import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

import mainRouter from "./routes/index.routes.js";
import notFoundMiddleware from "./middlewares/not-found.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import { globalLimiter } from "./middlewares/rate-limiter.middleware.js";

const app = express();

app.set("trust proxy", 1);

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://roamology-web-v4.vercel.app", // ถ้าใช้ custom domain
    ],
    credentials: true, // ถ้าคุณส่ง cookie/token
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    // optionsSuccessStatus: 200,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.SECRET_32));
app.use(globalLimiter);

app.use(morgan("dev"));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      // ... other directives
      imgSrc: ["'self'", "data:", "https://lh3.googleusercontent.com"],
    },
  })
);
app.use(compression());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const BASE_URL = "/api/v1";
app.use(`${BASE_URL}`, mainRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
