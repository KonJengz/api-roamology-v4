import { Router } from "express";
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js";
import aboutMeRouter from "./about-me.routes.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import postRouter from "./post.routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", authenticate, userRouter);
router.use("/about-me", aboutMeRouter);
router.use("/posts", postRouter);

export default router;
