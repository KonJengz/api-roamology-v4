import userService from "../../services/user.service.js";
import createError from "../../utils/create-error.util.js";
import { uploadSingleImage } from "../../utils/image.util.js";

export default async function editUserController(req, res) {
  const { email, username } = req.body;

  const data = {};
  console.log("req.user", req.user);

  if (email !== req.user.email && email) {
    const findUserByEmail = await userService.findUserByEmail_login(email);

    if (findUserByEmail) {
      throw createError(409, "Email already exist");
    }

    data.email = email;
  }

  if (username !== req.user.username) {
    data.username = username;
  }

  console.log("req.file", req.file);

  if (!!req.file) {
    const result = await uploadSingleImage(req.file);

    console.log({ result });
    data.imgUrl = result.publicUrl;
  }

  console.log({ data });

  const user = await userService.updateUser(req.user.id, data);

  res.status(200).json({
    success: true,
    user,
  });
}
