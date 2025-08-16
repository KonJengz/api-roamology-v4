import jwt from "jsonwebtoken";
import { promisify } from "util";

const jwtService = {};

// สร้าง Promise-based verify function ไว้ใช้ซ้ำ
const verifyPromise = promisify(jwt.verify);

// --- ฟังก์ชันสร้าง Token (เปลี่ยนเป็น Sync) ---

jwtService.genToken = (payload) => {
  // ไม่ต้องใช้ async/await เพราะ jwt.sign เป็น synchronous
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
    algorithm: "HS256",
    // algorithm: "HS256" เป็นค่า default อยู่แล้ว อาจไม่จำเป็นต้องใส่
  });
};

jwtService.genRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {
    expiresIn: "30d",
    algorithm: "HS256",
  });
};

jwtService.genForgetPasswordToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_FORGOT_PASSWORD, {
    expiresIn: "5m",
    algorithm: "HS256",
  });
};

// --- ฟังก์ชันตรวจสอบ Token (ใช้ promisify ทั้งหมด) ---

jwtService.verifyToken = (token) => {
  return verifyPromise(token, process.env.JWT_SECRET);
};

jwtService.verifyRefreshToken = (token) => {
  return verifyPromise(token, process.env.JWT_REFRESH_TOKEN);
};

jwtService.verifyForgetPasswordToken = (token) => {
  return verifyPromise(token, process.env.JWT_FORGOT_PASSWORD);
};

export default jwtService;
