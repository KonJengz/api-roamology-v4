import prisma from "../../config/prisma.config.js";
import {
  deleteMultipleImages,
  uploadMultipleImages,
} from "../../utils/image.util.js";

export default async function createTopicAboutMeController(req, res) {
  const { nameTopic, detail } = req.body;
  const aboutMeId = req.params.id;
  let uploadedImages = []; // เตรียมตัวแปรสำหรับเก็บข้อมูลรูปที่อัปโหลดสำเร็จ

  // 1. จัดการการอัปโหลดไฟล์ก่อนเริ่ม Transaction
  if (req.files && req.files.length > 0) {
    const result = await uploadMultipleImages(req.files);

    if (result.totalFailed > 0) {
      await deleteMultipleImages(result.failed.map((img) => img.filePath));
      // ถ้ามีไฟล์อัปโหลดไม่สำเร็จ ให้โยน Error ทันที ไม่ต้องทำต่อ
      throw createError(400, "Failed to upload some images");
    }
    uploadedImages = result.successful; // เก็บข้อมูลไฟล์ที่สำเร็จไว้
  }

  // 2. เริ่ม Database Transaction
  const newTopicWithImages = await prisma.$transaction(async (tx) => {
    // 2.1 สร้าง Topic หลัก โดยใช้ `tx` (Prisma Client ใน Transaction)
    const newTopic = await tx.topicAboutMe.create({
      data: {
        nameTopic,
        detail,
        aboutMeId,
      },
    });

    // 2.2 ถ้ามีรูปภาพที่อัปโหลดสำเร็จ ให้สร้างข้อมูลรูปภาพ
    if (uploadedImages.length > 0) {
      await tx.imgTopicAboutMe.createMany({
        data: uploadedImages.map((image) => ({
          imgUrl: image.publicUrl,
          filePath: image.filePath,
          topicAboutMeId: newTopic.id, // เชื่อมกับ Topic ที่เพิ่งสร้าง
        })),
      });
    }

    // 2.3 ค้นหา Topic ที่สร้างใหม่พร้อมรูปภาพเพื่อส่งกลับไป
    return tx.topicAboutMe.findUnique({
      where: { id: newTopic.id },
      select: {
        id: true,
        nameTopic: true,
        detail: true,
        imgTopicAboutMe: {
          orderBy: {
            createdAt: "desc",
          },
          select: {
            id: true,
            imgUrl: true,
          },
        },
      },
    });
  });

  console.log("newTopicWithImages", newTopicWithImages);

  res.status(201).json({
    success: true,
    message: "Topic created successfully",
    newTopic: newTopicWithImages, // ส่งข้อมูลที่เพิ่งสร้างกลับไป
  });
}
