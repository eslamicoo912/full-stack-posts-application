import { Router } from "express";
import * as controllers from "../controllers/post.js";

const routes = Router();

routes.post("/", controllers.createPost);
routes.get("/", controllers.getAllPosts);
routes.get("/:id", controllers.getPost);
routes.patch("/:id", controllers.updatePost);
routes.delete("/:id", controllers.deletePost);

export default routes;
