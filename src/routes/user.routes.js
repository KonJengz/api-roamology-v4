import { Router } from "express";
import getMeController from "../controllers/user/get-me.controller.js";
import upload from "../middlewares/upload.middleware.js";
import editUserController from "../controllers/user/edit.controller.js";
const userRouter = Router();

userRouter.get("/me", getMeController);
userRouter.patch("/", upload.single("image"), editUserController);

export default userRouter;
