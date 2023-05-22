import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function deletePostController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const deletedPost = await prisma.post.delete({
      where: { id: id },
    });
    res.status(200).json(deletedPost);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the post" });
  }
}
