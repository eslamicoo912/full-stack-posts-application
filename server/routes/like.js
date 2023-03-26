import { Router } from "express";
import * as controllers from "../controllers/like.js";

const routes = Router();

routes.post("/", controllers.createLike);
routes.get("/", controllers.getAllLikes);
routes.get("/:post_id", controllers.getPostLike);
routes.delete("/:id", controllers.deleteLike);

export default routes;
