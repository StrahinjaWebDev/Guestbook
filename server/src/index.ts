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
import { deleteUserControler } from "./controllers/User/deleteUserCotroller";

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

app.delete("/user/:id", deleteUserControler);

//* Post

app.get("/posts", getPostsController);

app.get("/posts/recent", getRecentPostsController);

app.post("/posts", postPostsController);

app.delete("/posts/:id", deletePostController);

app.listen(PORT, () => console.log("Log check"));
