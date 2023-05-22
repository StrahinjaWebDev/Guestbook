import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";
import { getUserController } from "./controllers/User/getUserController";
import { postUserLoginController } from "./controllers/User/postUserLoginController";
import { postNewUserController } from "./controllers/User/postNewUserController";
import { getPostsController } from "./controllers/Post/getPostsController";
import { getRecentPostsController } from "./controllers/Post/getRecentPostsController";
import { postPostsController } from "./controllers/Post/postPostsController";
import { deletePostController } from "./controllers/Post/deletePostController";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

//* User

app.get("/users", getUserController);

app.post("/login", postUserLoginController);

app.post("/user", postNewUserController);

//* Post

app.get("/posts", getPostsController);

app.get("/posts/recent", getRecentPostsController);

app.post("/posts", postPostsController);

app.delete("/posts/:id", deletePostController);

app.listen(PORT, () => console.log("Log check"));
