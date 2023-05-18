import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import { prisma } from "./utils/db";
import { User } from "@prisma/client";

const PORT = 5000;

const app = express();

app.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/", async (req: Request, res: Response) => {
  const newUser = await prisma.user.create({
    data: {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
    },
  });
});

app.listen(PORT, () => console.log("Miki"));
