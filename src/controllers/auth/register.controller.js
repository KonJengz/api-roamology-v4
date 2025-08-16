import hashService from "../../services/hash.service.js";
import userService from "../../services/user.service.js";
import createError from "../../utils/create-error.util.js";

export default async function registerController(req, res) {
  const { email, username, imgUrl, password } = req.body;

  const existUser = await userService.findUserByEmail(email);
  if (existUser) {
    throw createError(409, "Email already exist");
  }

  const hashPassword = await hashService.hash(password);
  const data = {
    email,
    username,
    password: hashPassword,
  };

  if (imgUrl) {
    data.imgUrl = imgUrl;
  }

  await userService.createUser(data);

  res.status(201).json({
    success: true,
  });
}
