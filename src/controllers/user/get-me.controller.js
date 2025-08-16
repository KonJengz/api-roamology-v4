import userService from "../../services/user.service.js";

export default async function getMeController(req, res) {
  const user = await userService.findUserById(req.user.id);

  if (!user) {
    throw createError(404, "User not found");
  }

  res.status(200).json({
    success: true,
    user,
  });
}
