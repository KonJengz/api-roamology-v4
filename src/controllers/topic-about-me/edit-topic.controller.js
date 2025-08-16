import topicAboutMeService from "../../services/topic-about-me.service.js";
import createError from "../../utils/create-error.util.js";

export default async function editTopicAboutMeController(req, res) {
  const { nameTopic, detail, isDelete } = req.body;
  const aboutMeId = req.params.id;
  const topicAboutMeId = req.params.topicAboutMeId;
  // const userId = req.user.id;

  const data = {};

  console.log("req.body=", req.body);

  //   console.log("req.body-------", req.body);
  //   console.log("req.files------", req.files);

  const existTopicAboutMe =
    await topicAboutMeService.getTopicAboutqMeByIdAboutMeId(
      topicAboutMeId,
      aboutMeId
    );

  console.log("existTopicAboutMe", existTopicAboutMe);

  if (!existTopicAboutMe) {
    throw createError(404, "TopicAboutMe not found");
  }

  if (
    existTopicAboutMe.nameTopic === nameTopic &&
    existTopicAboutMe.detail === detail
  ) {
    throw createError(
      400,
      "The data is already up to date. No changes were made."
    );
  }

  if (isDelete !== existTopicAboutMe.isDelete && isDelete !== undefined) {
    data.isDelete = isDelete;
  }

  if (nameTopic !== existTopicAboutMe.nameTopic && nameTopic) {
    data.nameTopic = nameTopic;
  }

  if (detail !== existTopicAboutMe.detail && detail) {
    data.detail = detail;
  }

  if (Object.keys(data).length === 0) {
    throw createError(400, "No data to update. Data is already up to date.");
  }

  const updatedTopicAboutMe = await topicAboutMeService.update(
    topicAboutMeId,
    data
  );

  console.log("updatedTopicAboutMe", updatedTopicAboutMe);

  res.status(200).json({
    success: true,
    updatedTopicAboutMe,
  });
}
