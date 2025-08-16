import prisma from "../../config/prisma.config.js";
import postService from "../../services/post.service.js";
import createError from "../../utils/create-error.util.js";
import {
  deleteMultipleImages,
  uploadMultipleImages,
} from "../../utils/image.util.js";

export default async function createImgPostController(req, res) {
  const postId = req.params.id;
  const userId = req.user.id;

  const existPost = await postService.findPostById(postId, userId);
  console.log("existPost", existPost);

  if (!existPost) {
    throw createError(404, "Post not found");
  }

  if (existPost._count.imgPost + req.files.length > 8) {
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

  const newImgPost = await prisma.$transaction(async (tx) => {
    if (uploadedImages.length > 0) {
      await tx.imgPost.createMany({
        data: uploadedImages.map((img) => ({
          imgUrl: img.publicUrl,
          filePath: img.filePath,
          postId,
        })),
      });
    }
    return tx.post.findUnique({
      where: {
        id: postId,
        isDelete: false,
      },
      select: {
        id: true,
        countryName: true,
        placeName: true,
        zone: true,
        date: true,
        imgPost: {
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
    newImgPost,
  });
}
