import "dotenv/config";
import app from "./app.js";
import prisma from "./config/prisma.config.js";
import { gracefulShutdown } from "./utils/shutdown.util.js";
// 1. ลบ import ที่เกี่ยวกับ Redis ออก
// import { connectRedis, redisClient } from "./middlewares/rate-limiter.middleware.js";

const PORT = process.env.PORT || 3000;
let server;

const startServer = async () => {
  try {
    // 2. ลบการเรียก connectRedis() ออก
    // await connectRedis();

    server = app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start the server:", error);
    process.exit(1);
  }
};

const handleShutdown = (signal) => {
  // 3. ลบ redis ออกจาก object ที่ส่งไป
  gracefulShutdown(server, signal, {
    // redis: redisClient,
    prisma: prisma,
  });
};

// --- 5. ดักจับ Events ของ Process สำหรับการปิดระบบและจัดการ Error ---

// 5.1. ดักจับสัญญาณการปิดปกติ (เช่น Ctrl+C หรือคำสั่งจาก Docker/PM2)
process.on("SIGINT", () => handleShutdown("SIGINT"));
process.on("SIGTERM", () => handleShutdown("SIGTERM"));

// 5.2. ดักจับ Promise ที่ไม่ถูกจัดการ (Unhandled Rejection)
process.on("unhandledRejection", (reason, promise) => {
  console.error("🔥 UNHANDLED REJECTION! Escalating to crash the process...");
  console.error("At promise:", promise, "\nReason:", reason);
  // ทำให้แอป crash ทันที เพื่อให้ uncaughtException จัดการต่อไป
  // เป็นวิธีที่ปลอดภัยที่สุดเพราะสถานะของแอปไม่น่าเชื่อถือแล้ว
  throw reason;
});

// 5.3. ดักจับ Error ที่ไม่ถูกดักจับทั้งหมด (Uncaught Exception)
// เป็น "ตาข่ายดักจับสุดท้าย" ก่อนที่แอปจะปิดตัว
process.on("uncaughtException", (error) => {
  console.error("🔥 UNCAUGHT EXCEPTION! Attempting to shut down gracefully...");
  console.error("Error:", error.name, error.message, error.stack);

  // ถ้าเซิร์ฟเวอร์ทำงานแล้ว ให้พยายามปิดระบบอย่างนุ่มนวล
  if (server) {
    handleShutdown("uncaughtException");
  } else {
    // ถ้าเซิร์ฟเวอร์ยังไม่เริ่มทำงาน (เกิด Error ระหว่าง startServer) ก็ปิด process ทันที
    process.exit(1);
  }
});

// --- 6. สั่งให้แอปพลิเคชันเริ่มต้นทำงาน ---
startServer();
