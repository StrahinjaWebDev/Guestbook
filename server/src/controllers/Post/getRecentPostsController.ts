import { Request, Response } from "express";
import { prisma } from "../../utils/db";
import { Prisma } from "@prisma/client";

export async function getRecentPostsController(req: Request, res: Response) {
  try {
    const posts = await prisma.post.findMany({
      take: 10,
      orderBy: { createdAt: "desc" } as Prisma.PostOrderByWithRelationInput,
      include: {
        author: true,
      },
    });

    const postsWithAuthor = posts.map((post) => ({
      ...post,
      author: post.author.username,
    }));

    res.status(200).json(postsWithAuthor);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving recent posts" });
  }
}
