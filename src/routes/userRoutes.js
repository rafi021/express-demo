import { Router } from "express";
import UserController from "../controllers/UserController.js";
const userRoutes = Router();

userRoutes.get("/", UserController.getAllUsers);
userRoutes.get("/:id", UserController.getUser);

export default userRoutes;
