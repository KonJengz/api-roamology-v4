import prisma from "../config/prisma.config.js";

const aboutMeService = {};

aboutMeService.findAllAboutMe = async (userId) => {
  return await prisma.aboutMe.findMany({
    where: {
      isDelete: false,
      userId,
    },
    orderBy: [
      { year: "desc" }, // 1. เรียงตามปีก่อน (มากไปน้อย)
      { month: "desc" }, // 2. ถ้าปีเดียวกัน ให้เรียงตามเดือน (มากไปน้อย)
    ],
    select: {
      id: true,
      year: true,
      month: true,
      topicAboutMe: {
        where: {
          isDelete: false,
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
      },
    },
  });
};

// aboutMeService.findAboutMe = (id) => {
//   return prisma.aboutMe.findUnique({
//     where: {
//       isDelete: false,
//       id,
//     },
//     select: {
//       id: true,
//       year: true,
//       month: true,
//       topicAboutMe: {
//         where: {
//           isDelete: false,
//         },
//         select: {
//           id: true,
//           nameTopic: true,
//           detail: true,
//           imgTopicAboutMe: {
//             where: {
//               isDelete: false,
//             },
//             select: {
//               id: true,
//               imgUrl: true,
//             },
//           },
//         },
//       },
//     },
//   });
// };

aboutMeService.findAllAboutMeByIdUserId = async (id, userId) => {
  return await prisma.aboutMe.findUnique({
    where: {
      id,
      isDelete: false,
      userId,
    },
    select: {
      id: true,
      year: true,
      month: true,
    },
  });
};

aboutMeService.findAllAboutMeById = async (id) => {
  return await prisma.aboutMe.findUnique({
    where: {
      id,
      isDelete: false,
    },
    select: {
      id: true,
      year: true,
      month: true,
    },
  });
};

aboutMeService.create = async (data) => {
  return await prisma.aboutMe.create({
    data,
    select: {
      id: true,
      year: true,
      month: true,
    },
  });
};

aboutMeService.upadte = async (id, data) => {
  return await prisma.aboutMe.update({
    data,
    where: {
      id,
    },
  });
};

export default aboutMeService;
