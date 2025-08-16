import multer from "multer";
import path from "path";

// ใช้ memory storage เพื่อเก็บไฟล์ในหน่วยความจำชั่วคราว
// ไม่ต้องบันทึกลงดิสก์ก่อน ประหยัดเวลาและพื้นที่
const storage = multer.memoryStorage();

// ฟังก์ชันตรวจสอบประเภทไฟล์
// กรองให้เฉพาะไฟล์รูปภาพเท่านั้น
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp|avif/;

  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true); // อนุญาตให้อัพโหลด
  } else {
    cb(
      new Error("รองรับเฉพาะไฟล์รูปภาพเท่านั้น (jpeg, jpg, png, gif, webp)"),
      false
    );
  }
};

// ตั้งค่า multer สำหรับจัดการการอัพโหลด
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // จำกัดขนาดไฟล์ 5MB
    files: 10, // จำกัดจำนวนไฟล์สูงสุด 10 ไฟล์ต่อครั้ง
  },
  fileFilter: fileFilter,
});

export default upload;
