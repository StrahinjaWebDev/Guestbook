import express, { Request, Response } from "express";
const app = express();

app.get("/hello", (req, res) => {
  res.send("Al");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Aa");
});

app.listen(5000);
