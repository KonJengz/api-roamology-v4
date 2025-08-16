// 1. เปลี่ยน import จาก RateLimiterRedis เป็น RateLimiterMemory
import { RateLimiterMemory } from "rate-limiter-flexible";

// --- สร้าง Rate Limiter Middleware ---

const createLimiter = (options) => {
  // 2. เปลี่ยนมาใช้ RateLimiterMemory
  const limiter = new RateLimiterMemory({
    keyPrefix: options.keyPrefix,
    points: options.points,
    duration: options.duration,
    blockDuration: options.blockDuration || options.duration,
  });
  // สังเกตว่าเราไม่ต้องใส่ storeClient: redisClient อีกต่อไป

  // คืนค่าออกมาเป็น Express Middleware (โค้ดส่วนนี้เหมือนเดิม)
  return (req, res, next) => {
    limiter
      .consume(req.ip)
      .then(() => {
        next();
      })
      .catch((rateLimiterRes) => {
        res.setHeader(
          "Retry-After",
          String(rateLimiterRes.msBeforeNext / 1000)
        );
        res.status(429).json({ message: "Too Many Requests" });
      });
  };
};

// --- Export Limiter ที่ตั้งค่าไว้แล้ว (โค้ดส่วนนี้เหมือนเดิม) ---

export const globalLimiter = createLimiter({
  keyPrefix: "global",
  points: 100,
  duration: 60,
});

export const loginLimiter = createLimiter({
  keyPrefix: "login_fail",
  points: 5,
  duration: 60 * 10,
});

export const registerLimiter = createLimiter({
  keyPrefix: "register_fail",
  points: 5, // 5 ครั้ง
  duration: 60 * 10, // ต่อ 10 นาที
});

export const searchLimiter = createLimiter({
  keyPrefix: "search_api",
  points: 20, // 20 ครั้ง
  duration: 60, // ต่อ 1 นาที
});
