import postService from "../../services/post.service.js";
import topicPostService from "../../services/topic-post.service.js";
import createError from "../../utils/create-error.util.js";

export default async function adminGetTopicController(req, res) {
  const userId = req.user.id;
  const findPost = await postService.adminFindPost(userId);

  if (!findPost) {
    throw createError(404, "Post not found");
  }
  const topics = await topicPostService.adminGetAllTopicPostByPostId(
    findPost.id
  );
  res.status(200).json({
    success: true,
    topics,
  });
}
