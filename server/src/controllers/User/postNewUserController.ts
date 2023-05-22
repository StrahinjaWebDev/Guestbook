import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function postNewUserController(req: Request, res: Response) {
  const newUser = await prisma.user.create({
    data: {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
    },
  });
}
