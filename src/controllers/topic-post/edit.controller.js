import topicPostService from "../../services/topic-post.service.js";
import createError from "../../utils/create-error.util.js";

export default async function editTopicPostController(req, res) {
  const topicPostId = req.params.topicPostId;
  const postId = req.params.id;
  const { nameTopic, detail, isDelete } = req.body;

  const data = {};

  const existTopicPost = await topicPostService.getTopicPostByIdPostId(
    topicPostId,
    postId
  );

  if (!existTopicPost) {
    throw createError(404, "TopicPost not found");
  }

  if (existTopicPost.nameTopic !== nameTopic && nameTopic) {
    data.nameTopic = nameTopic;
  }

  if (existTopicPost.detail !== detail && detail) {
    data.detail = detail;
  }

  if (existTopicPost.isDelete !== isDelete && isDelete) {
    data.isDelete = isDelete;
  }

  if (Object.keys(data).length === 0) {
    throw createError(
      400,
      "The data is already up to date. No changes were made."
    );
  }

  const updatedTopicPost = await topicPostService.update(topicPostId, data);

  res.status(200).json({
    success: true,
    topicPost: updatedTopicPost,
  });
}
