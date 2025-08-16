import prisma from "../../config/prisma.config.js";
import imgTopicAboutMeService from "../../services/img-topic-about-me.service.js";
import topicAboutMeService from "../../services/topic-about-me.service.js";
import createError from "../../utils/create-error.util.js";
import { uploadMultipleImages } from "../../utils/image.util.js";

export default async function createImgTopicAboutMeController(req, res) {
  const aboutMeId = req.params.id;
  const topicAboutMeId = req.params.topicAboutMeId;

  const existTopicAboutMe =
    await topicAboutMeService.getTopicAboutqMeByIdAboutMeId(
      topicAboutMeId,
      aboutMeId
    );

  if (!existTopicAboutMe) {
    throw createError(404, "TopicAboutMe not found");
  }

  let uploadedImages = [];
  const data = {};

  console.log("req.files", req.files);

  if (existTopicAboutMe._count.imgTopicAboutMe + req.files.length > 8) {
    throw createError(400, "You can upload a maximum of 8 images", "img");
  }

  // 1. จัดการการอัปโหลดไฟล์ก่อนเริ่ม Transaction
  if (req.files && req.files.length > 0) {
    const result = await uploadMultipleImages(req.files);

    if (result.totalFailed > 0) {
      await deleteMultipleImages(result.failed.map((img) => img.filePath));

      // ถ้ามีไฟล์อัปโหลดไม่สำเร็จ ให้โยน Error ทันที ไม่ต้องทำต่อ
      throw createError(400, "Failed to upload some images", "img");
    }
    uploadedImages = result.successful; // เก็บข้อมูลไฟล์ที่สำเร็จไว้
  }

  console.log("uploadedImages", uploadedImages);

  const newImgTopicAboutMe = await prisma.$transaction(async (tx) => {
    if (uploadedImages.length > 0) {
      data.imgTopicAboutMe = await tx.imgTopicAboutMe.createMany({
        data: uploadedImages.map((img) => ({
          imgUrl: img.publicUrl,
          filePath: img.filePath,
          topicAboutMeId,
        })),
      });
    }
    return tx.imgTopicAboutMe.findUnique({
      where: {
        topicAboutMeId,
        isDelete: false,
      },
      select: {
        id: true,
        imgUrl: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  });

  // console.log("newImgTopicAboutMe", newImgTopicAboutMe);

  res.status(201).json({
    success: true,
    newImgTopicAboutMe,
  });
}
