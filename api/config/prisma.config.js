import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["warn", "error"],
});

//   const globalForPrisma = globalThis;

// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     log:
//       process.env.NODE_ENV === "development"
//         ? ["query", "info", "warn", "error"]
//         : ["warn", "error"],
//   });

// if (process.env.NODE_ENV !== "development") {
//   globalForPrisma.prisma = prisma;
// }

export default prisma;
