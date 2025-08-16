import prisma from "../config/prisma.config.js";

const userService = {};

userService.findUserByEmail_login = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });
};

userService.findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      email: true,
    },
  });
};

userService.findUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      email: true,
      id: true,
      username: true,
      imgUrl: true,
    },
  });
};

userService.findUserByIdRefreshToken = async (id, refreshToken) => {
  return await prisma.user.findUnique({
    where: {
      id,
      refreshToken,
    },
    select: {
      email: true,
      id: true,
      username: true,
      imgUrl: true,
    },
  });
};

userService.createUser = async (data) => {
  return await prisma.user.create({
    data,
    select: {
      email: true,
      id: true,
      username: true,
      imgUrl: true,
    },
  });
};

userService.updateUser = async (id, data) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      email: true,
      id: true,
      username: true,
      imgUrl: true,
    },
  });
};

export default userService;
