import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function deleteUserControler(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: id },
    });
    res.status(200).json(deletedUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user!" });
  }
}
