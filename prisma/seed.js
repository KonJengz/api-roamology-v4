import { faker } from "@faker-js/faker";
import hashService from "../src/services/hash.service.js";
import prisma from "../src/config/prisma.config.js";

const hashPassword = await hashService.hash("123456");

const USER_COUNT = 10;
const ABOUT_ME_COUNT = 30;
const TOPIC_ABOUT_ME_COUNT = 50;
const IMG_TOPIC_ABOUT_ME_COUNT = 200;
const POST_COUNT = 80;
const IMG_POST_COUNT = 100;
const TOPIC_POST_COUNT = 200;
const IMG_TOPIC_POST_COUNT = 400;

function genUser(count) {
  return Array.from({ length: count }, () => ({
    email: faker.internet.email(),
    username: faker.person.fullName(),
    password: hashPassword,
    // refreshToken: faker.string.uuid(),
    refreshToken: faker.string.alphanumeric(64),
    imgUrl: faker.image.url(),
  }));
}

function genAboutMe(count, allUserId) {
  return Array.from({ length: count }, () => ({
    year: faker.number.int({ min: 2015, max: 2025 }),
    month: faker.number.int({ min: 1, max: 12 }),
    userId: faker.helpers.arrayElement(allUserId),
  }));
}

function genTopicAboutMe(count, allAboutMeId) {
  return Array.from({ length: count }, () => ({
    nameTopic: faker.lorem.word(10),
    detail: faker.lorem.sentence(),
    aboutMeId: faker.helpers.arrayElement(allAboutMeId),
  }));
}

function genImgTopicAboutMe(count, allTopicAboutMeId) {
  return Array.from({ length: count }, () => ({
    imgUrl: faker.image.url({
      category: "nature",
    }),
    topicAboutMeId: faker.helpers.arrayElement(allTopicAboutMeId),
  }));
}

function genPost(count, allUserId) {
  return Array.from({ length: count }, () => ({
    countryName: faker.location.country(),
    placeName: faker.location.city(),
    zone: faker.location.state(),
    userId: faker.helpers.arrayElement(allUserId),
  }));
}

function genImgPost(count, allPostId) {
  return Array.from({ length: count }, () => ({
    imgUrl: faker.image.url({
      category: "abstract",
    }),
    postId: faker.helpers.arrayElement(allPostId),
  }));
}

function genTopicPost(count, allPostId) {
  return Array.from({ length: count }, () => ({
    nameTopic: faker.lorem.word(10),
    detail: faker.lorem.sentence(),
    postId: faker.helpers.arrayElement(allPostId),
  }));
}

function genImgTopicPost(count, allTopicPostId) {
  return Array.from({ length: count }, () => ({
    imgUrl: faker.image.url({
      category: "food",
    }),
    topicPostId: faker.helpers.arrayElement(allTopicPostId),
  }));
}

async function cleanDatabase() {
  await prisma.imgTopicAboutMe.deleteMany();
  await prisma.imgTopicPost.deleteMany();
  await prisma.imgPost.deleteMany();
  await prisma.topicAboutMe.deleteMany();
  await prisma.aboutMe.deleteMany();
  await prisma.topicPost.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  console.log("Database cleaned...");
}

async function main() {
  try {
    faker.seed(123);
    await cleanDatabase();

    await prisma.user.createMany({
      data: genUser(USER_COUNT),
    });

    const allUserId = await prisma.user.findMany({
      select: {
        id: true,
      },
    });

    const user_id = allUserId.map((user) => user.id);

    console.log("allUserId", allUserId);

    await prisma.aboutMe.createMany({
      data: genAboutMe(ABOUT_ME_COUNT, user_id),
    });

    const allAboutMeId = await prisma.aboutMe.findMany({
      select: {
        id: true,
      },
    });

    await prisma.topicAboutMe.createMany({
      data: genTopicAboutMe(
        TOPIC_ABOUT_ME_COUNT,
        allAboutMeId.map((aboutMe) => aboutMe.id)
      ),
    });

    const allTopicAboutMeId = await prisma.topicAboutMe.findMany({
      select: {
        id: true,
      },
    });

    await prisma.imgTopicAboutMe.createMany({
      data: genImgTopicAboutMe(
        IMG_TOPIC_ABOUT_ME_COUNT,
        allTopicAboutMeId.map((topicAboutMe) => topicAboutMe.id)
      ),
    });

    await prisma.post.createMany({
      data: genPost(POST_COUNT, user_id),
    });

    const allPostId = await prisma.post.findMany({
      select: {
        id: true,
      },
    });

    const post_id = allPostId.map((post) => post.id);
    await prisma.imgPost.createMany({
      data: genImgPost(IMG_POST_COUNT, post_id),
    });

    await prisma.topicPost.createMany({
      data: genTopicPost(TOPIC_POST_COUNT, post_id),
    });

    const allTopicPostId = await prisma.topicPost.findMany({
      select: {
        id: true,
      },
    });
    await prisma.imgTopicPost.createMany({
      data: genImgTopicPost(
        IMG_TOPIC_POST_COUNT,
        allTopicPostId.map((topicPost) => topicPost.id)
      ),
    });

    console.log("Database seeded successfully...");
  } catch (error) {
    console.error(error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
