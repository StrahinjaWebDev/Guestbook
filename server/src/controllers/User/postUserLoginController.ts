import { prisma } from "../../utils/db";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function postUserLoginController(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || user.password !== password) {
    res.status(401).json({ error: "Invalid username or password" });
  } else {
    const { id, username, admin } = user;
    const token = jwt.sign(
      { id, username, admin },
      process.env.TOKEN_SECRET as string,
      {
        expiresIn: "1800s",
      }
    );

    res.json(token);
  }
}
