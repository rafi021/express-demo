import { Router } from "express";
import UserController from "../controllers/UserController.js";
const userRoutes = Router();

userRoutes.get("/", UserController.getAllUsers);
userRoutes.post("/", UserController.createUser);
userRoutes.get("/:id", UserController.getUser);
userRoutes.put("/:id", UserController.updateUser);
userRoutes.delete("/:id", UserController.deleteUser);

export default userRoutes;
