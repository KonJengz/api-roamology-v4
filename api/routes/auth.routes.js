import { Router } from "express";
import registerController from "../controllers/auth/register.controller.js";
import loginController from "../controllers/auth/login.controller.js";
import logoutController from "../controllers/auth/logout.controller.js";
import refreshTokenController from "../controllers/auth/refresh-token.controller.js";
import { loginLimiter } from "../middlewares/rate-limiter.middleware.js";
import validatorMiddleware from "../middlewares/validator.middleware.js";
import { schemaLogin, schemaRegister } from "../validator/auth-schema.js";
import upload from "../middlewares/upload.middleware.js";

const authRouter = Router();

authRouter.post(
  "/register",
  upload.single("image"),
  validatorMiddleware(schemaRegister),
  registerController
);
authRouter.post(
  "/login",
  loginLimiter,
  validatorMiddleware(schemaLogin),
  loginController
);
authRouter.post(
  "/google",
  loginLimiter,
  validatorMiddleware(schemaLogin),
  loginController
);
authRouter.post("/refresh", refreshTokenController);
authRouter.post("/logout", logoutController);

export default authRouter;
