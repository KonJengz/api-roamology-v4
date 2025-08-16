import aboutMeService from "../../services/about-me.service.js";
import createError from "../../utils/create-error.util.js";

export default async function editAboutMeController(req, res) {
  const { year, month, id, isDelete } = req.body;

  console.log("req.body", req.body);

  const data = {};

  const existAboutMe = await aboutMeService.findAllAboutMeByIdUserId(
    id,
    req.user.id
  );

  console.log("existAboutMe", existAboutMe);
  if (!existAboutMe) {
    throw createError(404, "AboutMe not found");
  }

  console.log("existAboutMe", existAboutMe);

  if (
    existAboutMe.year === Number(year) &&
    existAboutMe.month === Number(month)
  ) {
    throw createError(
      400,
      "The data is already up to date. No changes were made."
    );
  }

  if (isDelete !== existAboutMe.isDelete && isDelete !== undefined) {
    data.isDelete = true;
  }

  if (year && year !== existAboutMe.year) {
    data.year = Number(year);
  }

  if (month && month !== existAboutMe.month) {
    data.month = Number(month);
  }

  console.log("data", data);

  const aboutMe = await aboutMeService.upadte(id, data);

  res.status(200).json({
    success: true,
    aboutMe,
  });
}
