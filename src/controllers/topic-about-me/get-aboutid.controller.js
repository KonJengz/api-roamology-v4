import aboutMeService from "../../services/about-me.service.js";
import topicAboutMeService from "../../services/topic-about-me.service.js";

export default async function getAllTopicAboutMeByAboutIdController(req, res) {
  const aboutMeId = req.params.id;

  const existAboutMe = await aboutMeService.findAllAboutMeById(aboutMeId);

  if (!existAboutMe) {
    throw createError(404, "AboutMe not found");
  }

  const allTopicAboutMe = await topicAboutMeService.getAllTopicAboutMeByAboutId(
    aboutMeId
  );

  res.status(200).json({
    success: true,
    allTopicAboutMe,
  });
}
