import { Router } from "express";
import * as controllers from "../controllers/user.js";

const routes = Router();

routes.post("/", controllers.createUser);
routes.post("/login", controllers.login);
routes.get("/", controllers.getAllUsers);
routes.get("/:id", controllers.getUser);
routes.patch("/:id", controllers.updateUser);
routes.delete("/:id", controllers.deleteUser);

export default routes;
