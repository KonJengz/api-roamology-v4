import admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// 1. สร้าง Path ที่ถูกต้องโดยอิงจากตำแหน่งไฟล์ปัจจุบัน
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const serviceAccountPath = join(
  __dirname,
  "..",
  "..",
  "serviceAccountKey.json"
);

// console.log({ __filename });
// console.log({ __dirname });
// console.log({ serviceAccountPath });

// 2. อ่านและ Parse ไฟล์ JSON
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));

// เริ่มต้นใช้งาน Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "project-romalogy.firebasestorage.app", // แก้ไขเป็น Bucket ของคุณ
});

// สร้าง bucket reference สำหรับเข้าถึง Firebase Storage
const bucket = getStorage().bucket();

export { bucket, admin };
