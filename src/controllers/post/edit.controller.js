import prisma from "../../config/prisma.config.js";
import postService from "../../services/post.service.js";
import createError from "../../utils/create-error.util.js";
import { uploadMultipleImages } from "../../utils/image.util.js";

export default async function editPostController(req, res) {
  const { countryName, placeName, zone, date, isDelete } = req.body;

  console.log("req.body", req.body);

  const id = req.params.id;
  const userId = req.user.id;

  const data = {};
  let uploadedImages = [];

  console.log("id", id);

  const findPost = await postService.findPostById(id, userId);
  console.log("findPost", findPost);

  if (!findPost) {
    throw createError(404, "Post not found");
  }

  if (
    findPost.countryName === countryName &&
    findPost.placeName === placeName &&
    findPost.zone === zone &&
    findPost.date === date
  ) {
    throw createError(
      400,
      "The data is already up to date. No changes were made."
    );
  }

  if (isDelete !== findPost.isDelete && isDelete !== undefined) {
    data.isDelete = isDelete;
  }

  if (findPost.countryName !== countryName && countryName) {
    data.countryName = countryName;
  }

  if (findPost.placeName !== placeName && placeName) {
    data.placeName = placeName;
  }

  if (findPost.zone !== zone && zone) {
    data.zone = zone;
  }

  if (findPost.date !== date && date) {
    data.date = new Date(date);
  }

  if (Object.keys(data).length === 0) {
    throw createError(400, "No data to update. Data is already up to date.");
  }

  if (req.files && req.files.length > 0) {
    const result = await uploadMultipleImages(req.files);

    if (result.totalFailed > 0) {
      // ถ้ามีไฟล์อัปโหลดไม่สำเร็จ ให้โยน Error ทันที ไม่ต้องทำต่อ
      throw createError(400, "Failed to upload some images");
    }
    uploadedImages = result.successful; // เก็บข้อมูลไฟล์ที่สำเร็จไว้
  }

  console.log("data", data);

  if (uploadedImages.length > 0) {
    await prisma.imgPost.createMany({
      data: uploadedImages.map((image) => ({
        postId: id,
        imgUrl: image.publicUrl,
        filePath: image.filePath,
      })),
    });
  }
  const editPost = await postService.editPost(id, userId, data);

  res.status(200).json({
    success: true,
    editPost,
  });
}
