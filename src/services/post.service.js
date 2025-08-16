import prisma from "../config/prisma.config.js";

const postService = {};

postService.findAllPost = async (s = "") => {
  return await prisma.post.findMany({
    where: {
      isDelete: false,
      OR: [
        {
          countryName: {
            contains: s,
          },
        },
        {
          placeName: {
            contains: s,
          },
        },
        {
          zone: {
            contains: s,
          },
        },
      ],
    },
    select: {
      id: true,
      countryName: true,
      placeName: true,
      zone: true,
      date: true,
      imgPost: {
        select: {
          id: true,
          imgUrl: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

postService.adminFindPost = async (userId) => {
  return await prisma.post.findMany({
    where: {
      userId,
      isDelete: false,
    },
    select: {
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

postService.findByPostId = async (id) => {
  return await prisma.post.findUnique({
    where: {
      id,
      isDelete: false,
    },
    select: {
      id: true,
      countryName: true,
      placeName: true,
      zone: true,
      date: true,
    },
  });
};

postService.findPostById = async (id, userId) => {
  return await prisma.post.findUnique({
    where: {
      id,
      userId,
    },
    select: {
      id: true,
      countryName: true,
      placeName: true,
      zone: true,
      date: true,
      _count: {
        select: {
          imgPost: true,
        },
      },
    },
  });
};

postService.editPost = async (id, userId, data) => {
  return await prisma.post.update({
    where: {
      id,
      userId,
    },
    data,
    select: {
      id: true,
      countryName: true,
      placeName: true,
      zone: true,
      date: true,
      imgPost: {
        select: {
          id: true,
          imgUrl: true,
        },
      },
    },
  });
};

export default postService;
