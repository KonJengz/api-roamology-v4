import aboutMeService from "../../services/about-me.service.js";

export default async function getAllAboutMeController(req, res) {
  const allAboutMe = await aboutMeService.findAllAboutMe();

  res.status(200).json({
    success: true,
    allAboutMe,
  });
}
