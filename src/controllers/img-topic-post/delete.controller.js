import imgTopicPostService from "../../services/img-topic-post.service.js";
import topicPostService from "../../services/topic-post.service.js";
import createError from "../../utils/create-error.util.js";
import { deleteImage } from "../../utils/image.util.js";

export default async function deleteImgTopicPostController(req, res) {
  const topicPostId = req.params.topicPostId;
  const idImg = req.params.idImg;
  const postId = req.params.id;

  const existImgTopicPost = await imgTopicPostService.findByIdTopicPostId(
    idImg,
    topicPostId
  );

  if (!existImgTopicPost) {
    throw createError(404, "Img Topic Post not found");
  }

  await deleteImage(existImgTopicPost.filePath);
  await imgTopicPostService.delete(idImg);

  const existTopicPost = await topicPostService.findById(topicPostId, postId);

  res.status(200).json({
    success: true,
    topicPostUpdated: existTopicPost,
  });
}
