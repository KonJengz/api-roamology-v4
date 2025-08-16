import jwtService from "../../services/jwt.service.js";
import userService from "../../services/user.service.js";
import createError from "../../utils/create-error.util.js";

export default async function refreshTokenController(req, res) {
  // 1. ดึง refreshToken จาก cookie ที่เบราว์เซอร์ส่งมาอัตโนมัติ
  const { refreshToken } = req.cookies;

  // ถ้าไม่มี cookie หรือไม่มี refreshToken ใน cookie ให้ตอบกลับไปว่าไม่ได้รับอนุญาต
  if (!refreshToken) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Refresh token not found." });
  }

  // 2. ตรวจสอบ Signature และวันหมดอายุของ refreshToken
  // Express v5 จะดักจับ error จาก jwt.verify ที่เป็น Promise rejection โดยอัตโนมัติ
  const decoded = jwtService.verifyRefreshToken(refreshToken);
  console.log("decoded", decoded);

  // 3. ตรวจสอบในฐานข้อมูลว่า Token นี้ยังใช้งานได้จริงหรือไม่
  // นี่เป็นขั้นตอนที่สำคัญมากเพื่อป้องกัน token ที่ถูก revoke ไปแล้ว
  const tokenFromDb = await userService.findUserByIdRefreshToken(
    decoded.id,
    refreshToken
  );
  if (!tokenFromDb) {
    // ถ้าไม่เจอ Token ใน DB (อาจจะเพราะ user logout จากเครื่องอื่นไปแล้ว)
    // ให้ถือว่าไม่ปลอดภัยและตอบกลับเป็น 403 Forbidden
    throw createError(403, "Forbidden: Invalid refresh token.");
  }

  // (Best Practice) Refresh Token Rotation
  // 4. สร้าง Access Token และ Refresh Token "ชุดใหม่"
  const payload = { id: decoded.id };
  const newAccessToken = jwtService.genToken(payload);
  const newRefreshToken = jwtService.genRefreshToken(payload);

  // 5. อัปเดต refreshToken ตัวใหม่ลงในฐานข้อมูล (แทนที่ตัวเก่า)
  await userService.updateUser(decoded.id, { refreshToken: newRefreshToken });

  // 6. ส่ง refreshToken "ตัวใหม่" กลับไปให้ Client ผ่าน HttpOnly cookie
  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true, // ป้องกันไม่ให้ JavaScript เข้าถึง cookie
    secure: process.env.NODE_ENV === "production", // ใน production ให้ส่งผ่าน HTTPS เท่านั้น
    sameSite: "strict", // ป้องกันการโจมตีแบบ CSRF
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 วัน (ต้องตรงกับ expiresIn ของ JWT)
  });

  // 7. ส่ง accessToken "ตัวใหม่" กลับไปใน JSON body เพื่อให้ Client นำไปใช้งานต่อ
  res.status(200).json({
    success: true,
    accessToken: newAccessToken,
  });
}
