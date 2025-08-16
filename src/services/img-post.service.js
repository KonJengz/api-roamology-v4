import prisma from "../config/prisma.config.js";

const imgPostService = {};

imgPostService.findByIdPostId = async (id, postId) => {
  return await prisma.imgPost.findUnique({
    where: {
      id,
      postId,
    },
  });
};

imgPostService.deleteImgPost = async (id) => {
  return await prisma.imgPost.delete({
    where: {
      id,
    },
  });
};

export default imgPostService;
