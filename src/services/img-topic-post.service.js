import prisma from "../config/prisma.config.js";

const imgTopicPostService = {};

imgTopicPostService.findByIdTopicPostId = async (id, topicPostId) => {
  return await prisma.imgTopicPost.findUnique({
    where: {
      topicPostId,
      id,
    },
  });
};

imgTopicPostService.delete = async (id) => {
  return await prisma.imgTopicPost.delete({
    where: {
      id,
    },
  });
};

export default imgTopicPostService;
