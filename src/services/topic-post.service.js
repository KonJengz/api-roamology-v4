import prisma from "../config/prisma.config.js";

const topicPostService = {};

topicPostService.getAllTopicPostByPostId = async (postId) => {
  console.log("postId", postId);
  return await prisma.topicPost.findMany({
    where: {
      postId,
      isDelete: false,
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      nameTopic: true,
      detail: true,
      imgTopicPost: {
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          imgUrl: true,
        },
      },
    },
  });
};

topicPostService.adminGetAllTopicPostByPostId = async (postId) => {
  return await prisma.topicPost.findMany({
    where: {
      postId,
      isDelete: false,
    },
  });
};

topicPostService.getTopicPostByIdPostId = async (id, postId) => {
  return await prisma.topicPost.findUnique({
    where: {
      id,
      postId,
    },
    select: {
      id: true,
      nameTopic: true,
      detail: true,
      _count: {
        select: {
          imgTopicPost: true,
        },
      },
    },
  });
};

topicPostService.update = async (id, data) => {
  return await prisma.topicPost.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      nameTopic: true,
      detail: true,
      imgTopicPost: {
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          imgUrl: true,
        },
      },
    },
  });
};

topicPostService.findById = async (id) => {
  return await prisma.topicPost.findUnique({
    where: {
      id,
      isDelete: false,
    },
    select: {
      id: true,
      nameTopic: true,
      detail: true,
      imgTopicPost: {
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          imgUrl: true,
        },
      },
    },
  });
};

export default topicPostService;
