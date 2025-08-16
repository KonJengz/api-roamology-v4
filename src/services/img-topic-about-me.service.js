import prisma from "../config/prisma.config.js";

const imgTopicAboutMeService = {};

imgTopicAboutMeService.create = async (data) => {
  return await prisma.imgTopicAboutMe.create({
    data,
    select: {
      id: true,
      imgUrl: true,
    },
  });
};

imgTopicAboutMeService.delete = async (id) => {
  return await prisma.imgTopicAboutMe.delete({
    where: {
      id,
    },
    select: {
      id: true,
      imgUrl: true,
    },
  });
};

imgTopicAboutMeService.findImgTopicAboutMeById = async (id) => {
  return await prisma.imgTopicAboutMe.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      imgUrl: true,
      filePath: true,
    },
  });
};

imgTopicAboutMeService.findAllImgTopicAboutMeByTopicAboutMeId = async (
  topicAboutMeId
) => {
  return await prisma.imgTopicAboutMe.findMany({
    where: {
      topicAboutMeId,
    },
    select: {
      id: true,
      imgUrl: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export default imgTopicAboutMeService;
