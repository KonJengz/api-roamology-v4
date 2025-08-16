import postService from "../../services/post.service.js";
import topicPostService from "../../services/topic-post.service.js";
import createError from "../../utils/create-error.util.js";

export default async function getAllTopicPostByPostIdController(req, res) {
  const postId = req.params.id;

  const existPost = await postService.findByPostId(postId);

  if (!existPost) {
    throw createError(400, "Post not found");
  }

  const topics = await topicPostService.getAllTopicPostByPostId(postId);
  res.status(200).json({
    success: true,
    topics,
  });
}
