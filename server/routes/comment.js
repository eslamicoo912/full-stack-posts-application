import { Router } from "express";
import * as controllers from "../controllers/comment.js";

const routes = Router();

routes.post("/", controllers.createcomment);
routes.get("/", controllers.getAllcomments);
routes.get("/:id", controllers.getcomment);
routes.get("/post_comments/:post_id", controllers.getPostComments);
routes.delete("/:id", controllers.deletecomment);

export default routes;
