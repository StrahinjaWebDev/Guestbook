import { config } from "dotenv";
config();

import express, { Request, Response, response } from "express";
import { prisma } from "./utils/db";
import jwt from "jsonwebtoken";
import cors from "cors";
import { Prisma } from "@prisma/client";
import { Session } from "./model/Session";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const sessions: Session = {};

//* User

app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
  console.log(users);
});

app.post("/users/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || user.password !== password) {
    res.status(401).json({ error: "Invalid username or password" });
  } else {
    const { id, username } = user;
    const token = jwt.sign(
      { id, username },
      process.env.TOKEN_SECRET as string,
      {
        expiresIn: "1800s",
      }
    );

    res.json(token);
  }
});

// app.post("/users/logout", async (req: Request, res: Response) => {
//   const sessionId = req.headers.cookie?.split("=")[1];
//   if (sessionId) {
//     delete sessions[sessionId];
//   }
//   res.set("Set-Cookie", "session=; expires=Thu, 01 Jan 1970 00:00:00 GMT");
// });

app.post("/", async (req: Request, res: Response) => {
  const newUser = await prisma.user.create({
    data: {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
    },
  });
});

//* Post

app.get("/posts", async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
  console.log(posts);
});

app.get("/posts/recent", async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    take: 10,
    orderBy: { createdAt: "desc" } as Prisma.PostOrderByWithRelationInput,
    include: {
      author: true,
    },
  });

  const postsWithAuthor = posts.map((post) => ({
    ...post,
    author: post.author.username,
  }));

  res.json(postsWithAuthor);
});

app.post("/posts", async (req: Request, res: Response) => {
  const { content, email, authorId } = req.body;
  try {
    const newPost = await prisma.post.create({
      data: {
        content,
        email,
        authorId,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the post" });
  }
});

app.listen(PORT, () => console.log("Log check"));
