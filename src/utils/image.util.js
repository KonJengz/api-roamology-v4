import { bucket } from "../config/firebase.config.js";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

// ฟังก์ชันสร้างชื่อไฟล์ที่ไม่ซ้ำกัน
// ใช้ timestamp + UUID เพื่อความปลอดภัยและไม่ซ้ำกัน
export const generateFileName = (originalName) => {
  const ext = originalName.split(".").pop();
  const timestamp = Date.now();
  const uuid = uuidv4();
  return `${timestamp}_${uuid}.${ext}`;
};

// ฟังก์ชันปรับขนาดรูปภาพโดยใช้ Sharp
// Sharp เป็นไลบรารีที่เร็วและมีประสิทธิภาพสำหรับการประมวลผลรูปภาพ
// - ปรับขนาดรูปภาพให้เหมาะสม
// - บีบอัดเพื่อลดขนาดไฟล์
// - แปลงเป็น JPEG format
export const resizeImage = async (buffer, width = 800, height = 600) => {
  return await sharp(buffer)
    .resize(width, height, {
      fit: "inside", // รักษาอัตราส่วนของรูปภาพ
      withoutEnlargement: true, // ไม่ขยายรูปที่มีขนาดเล็กกว่าค่าที่กำหนด
    })
    .jpeg({ quality: 80 }) // บีบอัดเป็น JPEG คุณภาพ 80%
    .toBuffer();
};

// ฟังก์ชันอัพโหลดรูปภาพเดียว
export const uploadSingleImage = async (file, folder = "image_profile") => {
  try {
    // ปรับขนาดรูปภาพก่อนอัพโหลด
    const resizedBuffer = await resizeImage(file.buffer);
    console.log("resizedBuffer", resizedBuffer);

    // สร้างชื่อไฟล์ใหม่
    const fileName = generateFileName(file.originalname);
    const filePath = `${folder}/${fileName}`;

    console.log("fileName", fileName);
    console.log("filePath", filePath);

    // สร้าง reference ของไฟล์ใน Firebase Storage
    const fileRef = bucket.file(filePath);

    // อัพโหลดไฟล์พร้อมกับ metadata
    await fileRef.save(resizedBuffer, {
      metadata: {
        contentType: file.mimetype,
        metadata: {
          originalName: file.originalname,
          uploadedAt: new Date().toISOString(),
        },
      },
    });

    // ทำให้ไฟล์สามารถเข้าถึงได้จากสาธารณะ
    await fileRef.makePublic();

    // สร้าง public URL สำหรับเข้าถึงรูปภาพ
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;

    return {
      success: true,
      fileName: fileName,
      filePath: filePath,
      publicUrl: publicUrl,
      size: resizedBuffer.length,
    };
  } catch (error) {
    console.log("error", error);
    throw new Error(`การอัพโหลดล้มเหลว: ${error.message}`);
  }
};

// ฟังก์ชันอัพโหลดรูปภาพหลายรูป
export const uploadMultipleImages = async (files, folder = "images") => {
  // สร้าง Promise array สำหรับอัพโหลดพร้อมกัน
  const uploadPromises = files.map((file) => uploadSingleImage(file, folder));

  try {
    // รอให้การอัพโหลดทั้งหมดเสร็จสิ้น
    // ใช้ Promise.allSettled เพื่อให้การอัพโหลดที่ล้มเหลวไม่หยุดการทำงานทั้งหมด
    const results = await Promise.allSettled(uploadPromises);

    const successful = [];
    const failed = [];

    // แยกผลลัพธ์ที่สำเร็จและล้มเหลว
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        successful.push(result.value);
      } else {
        failed.push({
          fileName: files[index].originalname,
          error: result.reason.message,
        });
      }
    });

    return {
      successful,
      failed,
      totalUploaded: successful.length,
      totalFailed: failed.length,
    };
  } catch (error) {
    throw new Error(`การอัพโหลดหลายไฟล์ล้มเหลว: ${error.message}`);
  }
};

// ฟังก์ชันลบรูปภาพ
export const deleteImage = async (filePath) => {
  try {
    const fileRef = bucket.file(filePath);

    // ตรวจสอบว่าไฟล์มีอยู่หรือไม่
    const [exists] = await fileRef.exists();
    if (!exists) {
      throw new Error("ไม่พบไฟล์ที่ต้องการลบ");
    }

    // ลบไฟล์
    await fileRef.delete();

    return {
      success: true,
      message: "ลบไฟล์สำเร็จ",
      filePath: filePath,
    };
  } catch (error) {
    throw new Error(`การลบไฟล์ล้มเหลว: ${error.message}`);
  }
};

// ฟังก์ชันลบรูปภาพหลายรูป
export const deleteMultipleImages = async (filePaths) => {
  const deletePromises = filePaths.map((filePath) => deleteImage(filePath));

  try {
    const results = await Promise.allSettled(deletePromises);

    const successful = [];
    const failed = [];

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        successful.push(result.value);
      } else {
        failed.push({
          filePath: filePaths[index],
          error: result.reason.message,
        });
      }
    });

    return {
      successful,
      failed,
      totalDeleted: successful.length,
      totalFailed: failed.length,
    };
  } catch (error) {
    throw new Error(`การลบหลายไฟล์ล้มเหลว: ${error.message}`);
  }
};

// ฟังก์ชันดึงข้อมูล metadata ของรูปภาพ
export const getImageMetadata = async (filePath) => {
  try {
    const fileRef = bucket.file(filePath);
    const [metadata] = await fileRef.getMetadata();

    return {
      success: true,
      metadata: {
        name: metadata.name,
        size: metadata.size,
        contentType: metadata.contentType,
        created: metadata.timeCreated,
        updated: metadata.updated,
        publicUrl: `https://storage.googleapis.com/${bucket.name}/${filePath}`,
      },
    };
  } catch (error) {
    throw new Error(`ดึงข้อมูลไฟล์ล้มเหลว: ${error.message}`);
  }
};
