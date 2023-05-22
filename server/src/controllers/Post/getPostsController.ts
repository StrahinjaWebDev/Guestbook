import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function getPostsController(req: Request, res: Response) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving posts" });
  }
}
