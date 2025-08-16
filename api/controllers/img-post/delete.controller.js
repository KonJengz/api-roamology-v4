import imgPostService from "../../services/img-post.service.js";
import createError from "../../utils/create-error.util.js";
import { deleteImage } from "../../utils/image.util.js";

export default async function deleteImgPostController(req, res) {
  const idImg = req.params.idImg;
  const postId = req.params.id;

  const existImgPost = await imgPostService.findByIdPostId(idImg, postId);
  console.log("existImgPost", existImgPost);

  if (!existImgPost) {
    throw createError(404, "Img Post not found");
  }

  await deleteImage(existImgPost.filePath);
  await imgPostService.deleteImgPost(idImg);
  res.status(200).json({
    success: true,
  });
}
