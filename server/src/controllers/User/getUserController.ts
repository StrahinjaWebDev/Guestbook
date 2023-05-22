import express, { Request, Response } from "express";
import { prisma } from "../../utils/db";

export async function getUserController(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
}
