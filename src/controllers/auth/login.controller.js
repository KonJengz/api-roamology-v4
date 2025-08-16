import hashService from "../../services/hash.service.js";
import jwtService from "../../services/jwt.service.js";
import userService from "../../services/user.service.js";
import createError from "../../utils/create-error.util.js";

export default async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await userService.findUserByEmail_login(email);
  if (!user) {
    throw createError(400, "Email or Password is invalid");
  }

  console.log("user", user);

  const isPasswordMatch = await hashService.verify(password, user.password);
  if (!isPasswordMatch) {
    throw createError(401, "Invalid password");
  }

  const payload = { id: user.id };
  const accessToken = jwtService.genToken(payload);
  const refreshToken = jwtService.genRefreshToken(payload);

  await userService.updateUser(user.id, { refreshToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, // ป้องกันไม่ให้ JavaScript เข้าถึง cookie
    secure: process.env.NODE_ENV === "production", // ใน production ให้ส่งผ่าน HTTPS เท่านั้น
    sameSite: "strict", // ป้องกันการโจมตีแบบ CSRF
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 วัน (ต้องตรงกับ expiresIn ของ JWT)
  });

  res.status(200).json({
    success: true,
    accessToken,
  });
}
