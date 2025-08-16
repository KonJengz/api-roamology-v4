// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({
//   log:
//     process.env.NODE_ENV === "development"
//       ? ["query", "info", "warn", "error"]
//       : ["warn", "error"],
// });

// //   const globalForPrisma = globalThis;

// // const prisma =
// //   globalForPrisma.prisma ||
// //   new PrismaClient({
// //     log:
// //       process.env.NODE_ENV === "development"
// //         ? ["query", "info", "warn", "error"]
// //         : ["warn", "error"],
// //   });

// // if (process.env.NODE_ENV !== "development") {
// //   globalForPrisma.prisma = prisma;
// // }

// export default prisma;

import { PrismaClient } from "@prisma/client";

// ประกาศ global.prisma เพื่อเก็บ instance
const globalForPrisma = global;

// ตรวจสอบว่ามี instance ของ PrismaClient ใน global scope หรือไม่
// ถ้าไม่มีให้สร้างใหม่ ถ้ามีอยู่แล้วให้ใช้ตัวเดิม
const prisma = globalForPrisma.prisma || new PrismaClient();

// ใน environment ที่ไม่ใช่ production ให้ g้บ instance ไว้ใน global
// เพื่อไม่ให้ Hot Reload ของ Next.js (หรือ framework อื่นๆ) สร้าง instance ใหม่เรื่อยๆ
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
