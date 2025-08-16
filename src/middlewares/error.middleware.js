import jwt from "jsonwebtoken";
import * as Yup from "yup";
import createError from "../utils/create-error.util.js";
import handlePrismaError from "../utils/prisma-error.js";
import multer from "multer";

const errorMiddleware = (err, req, res, next) => {
  console.log("err", err);
  if (err instanceof jwt.JsonWebTokenError) {
    err = createError(401, "Invalid token");
  } else if (err instanceof jwt.TokenExpiredError) {
    err = createError(401, "Token Expired");
  } else if (err.name === "PrismaClientKnownRequestError") {
    err = handlePrismaError(err);
  }

  if (err instanceof multer.MulterError) {
    err = createError(400, err.message, "image");
  }

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,

    message,
    success: false,
    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
      details: err,
    }),
  });
};

export default errorMiddleware;
