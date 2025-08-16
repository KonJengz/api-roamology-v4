import prisma from "../../config/prisma.config.js";
import topicPostService from "../../services/topic-post.service.js";
import createError from "../../utils/create-error.util.js";
import {
  deleteMultipleImages,
  uploadMultipleImages,
} from "../../utils/image.util.js";

export default async function createImgTopicPostController(req, res) {
  const topicPostId = req.params.topicPostId;
  const postId = req.params.id;

  const existTopicPost = await topicPostService.getTopicPostByIdPostId(
    topicPostId,
    postId
  );

  if (!existTopicPost) {
    throw createError(404, "TopicPost not found");
  }

  if (existTopicPost._count.imgTopicPost + req.files.length > 8) {
    throw createError(400, "You can upload a maximum of 8 images", "img");
  }

  let uploadedImages = [];

  if (req.files && req.files.length > 0) {
    const result = await uploadMultipleImages(req.files);

    if (result.totalFailed > 0) {
      await deleteMultipleImages(result.failed.map((img) => img.filePath));
      throw createError(400, "Failed to upload some images", "img");
    }
    uploadedImages = result.successful;
  }

  const newImgTopicPost = await prisma.$transaction(async (tx) => {
    if (uploadedImages.length > 0) {
      await tx.imgTopicPost.createMany({
        data: uploadedImages.map((img) => ({
          imgUrl: img.publicUrl,
          filePath: img.filePath,
          topicPostId,
        })),
      });
    }

    return tx.topicPost.findUnique({
      where: {
        id: topicPostId,
        isDelete: false,
      },
      select: {
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
    newImgTopicPost,
  });
}
