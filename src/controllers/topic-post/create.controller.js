import prisma from "../../config/prisma.config.js";
import postService from "../../services/post.service.js";
import createError from "../../utils/create-error.util.js";
import {
  deleteMultipleImages,
  uploadMultipleImages,
} from "../../utils/image.util.js";

export default async function createTopicPostController(req, res) {
  const { nameTopic, detail } = req.body;
  const postId = req.params.id;
  const userId = req.user.id;

  const data = { nameTopic, detail, postId };
  let uploadedImages = [];

  const existPost = await postService.findPostById(postId, userId);

  if (!existPost) {
    throw createError(404, "Post not found");
  }

  if (req.files && req.files.length > 0) {
    const result = await uploadMultipleImages(req.files);

    if (result.totalFailed > 0) {
      await deleteMultipleImages(result.failed.map((img) => img.filePath));

      // ถ้ามีไฟล์อัปโหลดไม่สำเร็จ ให้โยน Error ทันที ไม่ต้องทำต่อ
      throw createError(400, "Failed to upload some images", "img");
    }
    uploadedImages = result.successful; // เก็บข้อมูลไฟล์ที่สำเร็จไว้
  }

  const newTopicPost = await prisma.$transaction(async (tx) => {
    // 2.1 สร้าง Topic หลัก โดยใช้ `tx` (Prisma Client ใน Transaction)
    const newTopic = await tx.topicPost.create({
      data,
    });

    // 2.2 ถ้ามีรูปภาพที่อัปโหลดสำเร็จ ให้สร้างข้อมูลรูปภาพ
    if (uploadedImages.length > 0) {
      await tx.imgTopicPost.createMany({
        data: uploadedImages.map((image) => ({
          imgUrl: image.publicUrl,
          filePath: image.filePath,
          topicPostId: newTopic.id, // เชื่อมกับ Topic ที่เพิ่งสร้าง
        })),
      });
    }

    // 2.3 ค้นหา Topic ที่สร้างใหม่พร้อมรูปภาพเพื่อส่งกลับไป
    return tx.topicPost.findUnique({
      where: { id: newTopic.id },
      select: {
        id: true,
        nameTopic: true,
        detail: true,
        imgTopicPost: {
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
  res.status(201).json({
    success: true,
    message: "Topic created successfully",
    newTopic: newTopicPost,
  });
}
