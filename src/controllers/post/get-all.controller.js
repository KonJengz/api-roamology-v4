import postService from "../../services/post.service.js";

export default async function getAllPostController(req, res) {
  const { s } = req.query;
  const posts = await postService.findAllPost(s);
  res.status(200).json({
    success: true,
    posts,
  });
}
