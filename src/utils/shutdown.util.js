export const gracefulShutdown = (server, signal, connections) => {
  // 1. ตั้ง Timeout สำหรับบังคับปิด Process หาก Graceful Shutdown ไม่สำเร็จ
  const shutdownTimeout = setTimeout(() => {
    console.error("❌ Graceful shutdown timed out. Forcing exit.");
    process.exit(1);
  }, 10000); // 10 วินาที

  console.log(`\n🚨 Received ${signal}. Starting graceful shutdown...`);

  // 2. รวบรวม "ทุกงานที่ต้องทำก่อนปิด" มาไว้ใน Array ของ Promises
  const cleanupPromises = [
    // งานที่ 1: ปิด HTTP Server (หยุดรับ request ใหม่)
    new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) {
          console.error("❌ Error closing HTTP server:", err);
          return reject(err);
        }
        console.log("✅ HTTP server closed successfully.");
        resolve();
      });
    }),
  ];

  // เพิ่มงานปิด Prisma ถ้ามี connection object และ prisma client ส่งมา
  if (connections && connections.prisma) {
    cleanupPromises.push(
      connections.prisma
        .$disconnect()
        .then(() => {
          console.log("✅ Prisma disconnected successfully.");
        })
        .catch((err) => {
          console.error("❌ Error disconnecting Prisma:", err);
          throw err;
        })
    );
  }

  // เพิ่มงานปิด Redis ถ้ามี connection object และ redis client ที่กำลังเชื่อมต่ออยู่ส่งมา
  if (connections && connections.redis && connections.redis.isOpen) {
    cleanupPromises.push(
      connections.redis
        .quit()
        .then(() => {
          console.log("✅ Redis connection closed successfully.");
        })
        .catch((err) => {
          console.error("❌ Error closing Redis connection:", err);
          throw err;
        })
    );
  }

  // 3. สั่งให้ทุกงานทำงานพร้อมกัน และรอจนกว่าจะเสร็จทั้งหมด
  Promise.allSettled(cleanupPromises).then((results) => {
    console.log("🏁 All cleanup tasks have been settled.");
    clearTimeout(shutdownTimeout);

    const hasErrors = results.some((result) => result.status === "rejected");

    if (hasErrors) {
      console.log("👋 Shutdown completed with errors.");
      process.exit(1);
    } else {
      console.log("👋 Graceful shutdown completed successfully.");
      process.exit(0);
    }
  });
};
