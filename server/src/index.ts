import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import { prisma } from "./utils/db";
import cors from "cors";
import { User } from "@prisma/client";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
  console.log(users);
});

app.post("/users/login"),
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user || user.password !== password) {
      res.status(401).json({ error: "Invalid username or password" });
    } else {
      res.json({ message: "Success" });
    }
  };

app.post("/", async (req: Request, res: Response) => {
  const newUser = await prisma.user.create({
    data: {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
    },
  });
});

app.listen(PORT, () => console.log("Log check"));
