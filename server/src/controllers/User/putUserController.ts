import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function putUserController(req: Request, res: Response) {
  const id = req.params.userId;
  const { password, admin } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id },
      data: { password, admin },
    });
    res.status(200).json({ message: "User updated successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error while updating user" });
  }
}
