import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export  async function getPostsController (req: Request, res: Response) {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  res.json(posts);
}