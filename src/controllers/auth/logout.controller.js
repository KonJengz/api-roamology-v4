import userService from "../../services/user.service.js";

export default async function unifiedLogoutController(req, res) {
  // --- ขั้นตอนที่ 1: ตรวจสอบและจัดการ Token-Based Auth ---
  const { refreshToken } = req.cookies;

  if (refreshToken) {
    // ถ้ามี Refresh Token ให้ทำกระบวนการ Logout ของ Token
    if (req.user && req.user.id) {
      await userService.updateUser(req.user.id, { refreshToken: null });
    }
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    // จบการทำงานและส่ง Response ทันที
    return res.sendStatus(204);
  }

  // --- ขั้นตอนที่ 2: ถ้าไม่มี Token ให้ตรวจสอบและจัดการ Session-Based Auth ---
  // req.isAuthenticated() เป็นฟังก์ชันของ Passport เพื่อดูว่ามี Session ที่ถูกต้องหรือไม่
  if (req.isAuthenticated()) {
    // ถ้ามี Session ให้ทำกระบวนการ Logout ของ Session
    req.logout((logoutErr) => {
      if (logoutErr) {
        return res.status(500).json({ message: "Session logout error." });
      }
      req.session.destroy((destroyErr) => {
        if (destroyErr) {
          return res
            .status(500)
            .json({ message: "Could not destroy session." });
        }
        res.clearCookie("connect.sid");
        // ส่ง Response และจบการทำงาน
        return res.status(200).json({ message: "Session logout successful." });
      });
    });
  } else {
    // --- ขั้นตอนที่ 3: ถ้าไม่มีทั้งสองอย่าง ---
    // ผู้ใช้ไม่ได้ล็อกอินมาด้วยวิธีใด ๆ เลย
    return res.status(204).send(); // ส่งสถานะว่าสำเร็จโดยไม่ต้องทำอะไร
  }
}
