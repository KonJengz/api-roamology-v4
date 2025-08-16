import prisma from "../../config/prisma.config.js";
import aboutMeService from "../../services/about-me.service.js";
import topicAboutMeService from "../../services/topic-about-me.service.js";
import { uploadMultipleImages } from "../../utils/image.util.js";

export default async function createAboutMeController(req, res) {
  const { year, month } = req.body;

  const dataAboutMe = {
    year: Number(year),
    month: Number(month),
    userId: req.user.id,
  };

  const newAboutMe = await aboutMeService.create(dataAboutMe);

  res.status(201).json({
    success: true,
    newAboutMe,
  });
}
