import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function postPostsController(req: Request, res: Response) {
  const { content, authorId } = req.body;
  try {
    const newPost = await prisma.post.create({
      data: {
        content,
        authorId,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the post" });
  }
}
