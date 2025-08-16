import postService from "../../services/post.service.js";

export default async function adminGetPostController(req, res) {
  const posts = await postService.adminFindPost(req.user.id);
  res.status(200).json({
    success: true,
    posts,
  });
}
