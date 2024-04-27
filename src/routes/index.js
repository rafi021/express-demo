import { Router } from "express";
import userRoutes from "./userRoutes.js";

const router = Router();

// register routes
router.get("/", (request, response) => {
  response.status(200).send("Up and Running");
});

router.use("/api/v1/users", userRoutes);

export default router;
