import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function postNewUserController(req: Request, res: Response) {
  try {
    const newUser = await prisma.user.create({
      data: {
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin,
      },
    });
    res.status(200).json({ success: true, newUser });
  } catch (error) {
    res.status(500).json({ error: "Error while creating new user" });
  }
}
