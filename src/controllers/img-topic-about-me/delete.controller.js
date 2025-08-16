import imgTopicAboutMeService from "../../services/img-topic-about-me.service.js";
import topicAboutMeService from "../../services/topic-about-me.service.js";
import createError from "../../utils/create-error.util.js";
import { deleteImage } from "../../utils/image.util.js";

export default async function deleteImgTopicAboutMeController(req, res) {
  const id = req.params.idImg;
  const aboutMeId = req.params.id;
  const topicAboutMeId = req.params.topicAboutMeId;

  const existTopicAboutMe =
    await topicAboutMeService.getTopicAboutqMeByIdAboutMeId(
      topicAboutMeId,
      aboutMeId
    );

  if (!existTopicAboutMe) {
    throw createError(404, "TopicAboutMe not found");
  }

  const existImgTopicAboutMe =
    await imgTopicAboutMeService.findImgTopicAboutMeById(id);

  console.log("existImgTopicAboutMe", existImgTopicAboutMe);

  if (!existImgTopicAboutMe) {
    throw createError(404, "ImgTopicAboutMe not found");
  }
  //   console.log("existImgTopicAboutMe.imgUrl", existImgTopicAboutMe.imgUrl);
  //   const filePath = existImgTopicAboutMe.imgUrl.split("/").slice(4).join("/");
  //   console.log("filePath", filePath);

  await deleteImage(existImgTopicAboutMe.filePath);

  await imgTopicAboutMeService.delete(id);

  const topicAboutMe =
    await imgTopicAboutMeService.findAllImgTopicAboutMeByTopicAboutMeId(
      topicAboutMeId
    );

  console.log("topicAboutMe", topicAboutMe);
  res.status(200).json({
    success: true,
  });
}
