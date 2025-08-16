import prisma from "../../config/prisma.config.js";
import { uploadMultipleImages } from "../../utils/image.util.js";

export default async function createPostController(req, res) {
  const { countryName, placeName, zone, date } = req.body;

  const data = { countryName, placeName, userId: req.user.id };

  if (zone) {
    data.zone = zone;
  }

  if (date !== "null" && date) {
    data.date = new Date(date);
  }

  let uploadedImages = []; // เตรียมตัวแปรสำหรับเก็บข้อมูลรูปที่อัปโหลดสำเร็จ

  console.log("req.files", req.files);

  // 1. จัดการการอัปโหลดไฟล์ก่อนเริ่ม Transaction
  if (req.files && req.files.length > 0) {
    const result = await uploadMultipleImages(req.files);

    if (result.totalFailed > 0) {
      // ถ้ามีไฟล์อัปโหลดไม่สำเร็จ ให้โยน Error ทันที ไม่ต้องทำต่อ
      throw createError(400, "Failed to upload some images");
    }
    uploadedImages = result.successful; // เก็บข้อมูลไฟล์ที่สำเร็จไว้
  }

  console.log("uploadedImages", uploadedImages);

  const newPost = await prisma.$transaction(async (tx) => {
    const newPost = await tx.post.create({
      data: data,
      select: {
        id: true,
        countryName: true,
        placeName: true,
        zone: true,
        date: true,
        imgPost: {
          select: {
            id: true,
            imgUrl: true,
          },
        },
      },
    });

    console.log("newPost", newPost);

    if (uploadedImages.length > 0) {
      await tx.imgPost.createMany({
        data: uploadedImages.map((image) => ({
          postId: newPost.id,
          imgUrl: image.publicUrl,
          filePath: image.filePath,
        })),
      });
    }

    return tx.post.findUnique({
      where: {
        id: newPost.id,
      },
      select: {
        id: true,
        countryName: true,
        placeName: true,
        zone: true,
        date: true,
        imgPost: {
          select: {
            id: true,
            imgUrl: true,
          },
        },
      },
    });
  });

  console.log("newPost", newPost);

  res.status(201).json({
    success: true,
    newPost,
  });
}
