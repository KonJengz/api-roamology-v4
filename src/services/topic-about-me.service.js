import prisma from "../config/prisma.config.js";

const topicAboutMeService = {};

topicAboutMeService.create = async (data) => {
  return await prisma.topicAboutMe.create({
    data: {
      nameTopic: data.nameTopic,
      detail: data.detail,
      aboutMeId: data.aboutMeId,
    },
  });
};

topicAboutMeService.getTopicAboutqMeById = async (id) => {
  return await prisma.topicAboutMe.findUnique({
    where: {
      id,
    },
  });
};

topicAboutMeService.getTopicAboutqMeByIdAboutMeId = async (id, aboutMeId) => {
  return await prisma.topicAboutMe.findUnique({
    where: {
      id,
      aboutMeId,
    },
    select: {
      id: true,

      _count: {
        select: {
          imgTopicAboutMe: true,
        },
      },
    },
  });
};

topicAboutMeService.getAllTopicAboutMeByAboutId = async (aboutMeId) => {
  return await prisma.topicAboutMe.findMany({
    where: {
      aboutMeId,
      isDelete: false,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      nameTopic: true,
      detail: true,
      imgTopicAboutMe: {
        where: {
          isDelete: false,
        },
        select: {
          id: true,
          imgUrl: true,
        },
      },
    },
  });
};

topicAboutMeService.update = async (id, data) => {
  return await prisma.topicAboutMe.update({
    where: {
      id,
    },
    data: {
      nameTopic: data.nameTopic,
      detail: data.detail,
    },
    select: {
      id: true,
      nameTopic: true,
      detail: true,
      imgTopicAboutMe: {
        where: {
          isDelete: false,
        },
        select: {
          id: true,
          imgUrl: true,
        },
      },
    },
  });
};

export default topicAboutMeService;
