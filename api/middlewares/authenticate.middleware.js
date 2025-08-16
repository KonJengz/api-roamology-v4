import jwtService from "../services/jwt.service.js";
import userService from "../services/user.service.js";
import createError from "../utils/create-error.util.js";

const authenticate = async (req, res, next) => {
  // 1. ตรวจสอบ Authorization Header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw createError(
      401,
      "Authentication failed: No token or invalid format."
    );
  }

  // console.log("authHeader", authHeader);

  // 2. แยก Token ออกจาก Header
  const token = authHeader.split(" ")[1];

  // 3. ตรวจสอบและถอดรหัส Token
  // หาก jwtService.verifyToken throw error -> Express v5 จะจัดการให้อัตโนมัติ
  const payload = await jwtService.verifyToken(token);

  // 4. ค้นหา user จาก ID ใน Payload
  const userInDb = await userService.findUserById(payload.id);
  if (!userInDb) {
    throw createError(401, "Authentication failed: User not found.");
  }

  // 5. นำรหัสผ่านออกจาก Object เพื่อความปลอดภัย
  const { password, ...user } = userInDb;

  // console.log("user", user);

  // 6. แนบข้อมูลผู้ใช้ไปกับ Request Object
  req.user = user;

  // 7. ไปยัง Middleware หรือ Route Handler ตัวถัดไป
  next();
};

export default authenticate;
