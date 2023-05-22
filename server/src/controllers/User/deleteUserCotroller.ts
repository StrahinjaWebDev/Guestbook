import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function deleteUserControler(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const userPosts = await prisma.post.findMany({
      where: { authorId: id },
    });

    await prisma.post.deleteMany({
      where: { authorId: id },
    });

    const deletedUser = await prisma.user.delete({
      where: { id: id },
    });

    res.status(200).json({ deletedUser, deletedPosts: userPosts });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user!" });
  }
}
