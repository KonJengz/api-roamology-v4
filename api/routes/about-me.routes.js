import { Router } from "express";
import getAllAboutMeController from "../controllers/about-me/get-all.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import createAboutMeController from "../controllers/about-me/create.controller.js";
import editAboutMeController from "../controllers/about-me/edit.controller.js";
import getAllTopicAboutMeByAboutIdController from "../controllers/topic-about-me/get-aboutid.controller.js";
import upload from "../middlewares/upload.middleware.js";
import createTopicAboutMeController from "../controllers/topic-about-me/create-topic.controller.js";
import editTopicAboutMeController from "../controllers/topic-about-me/edit-topic.controller.js";
import createImgTopicAboutMeController from "../controllers/img-topic-about-me/create.controller.js";
import deleteImgTopicAboutMeController from "../controllers/img-topic-about-me/delete.controller.js";
import validatorMiddleware from "../middlewares/validator.middleware.js";
import { schemaAboutMe } from "../validator/about-me-schema.js";
import { schemaTopicAboutMe } from "../validator/topic-about-me-schema.js";

const aboutMeRouter = Router();

//about me
aboutMeRouter.get("/", getAllAboutMeController);
aboutMeRouter.post(
  "/",
  authenticate,
  validatorMiddleware(schemaAboutMe),
  createAboutMeController
);
aboutMeRouter.patch("/", authenticate, editAboutMeController);

//topic about me
aboutMeRouter.get("/:id/topic", getAllTopicAboutMeByAboutIdController);
aboutMeRouter.post(
  "/:id/topic",
  authenticate,
  upload.array("images", 8),
  createTopicAboutMeController
);
aboutMeRouter.patch(
  "/:id/topic/:topicAboutMeId",
  authenticate,
  editTopicAboutMeController
);

// img topic about me
aboutMeRouter.post(
  "/:id/topic/:topicAboutMeId/img",
  authenticate,
  validatorMiddleware(schemaTopicAboutMe),
  upload.array("images", 8),
  createImgTopicAboutMeController
);

aboutMeRouter.delete(
  "/:id/topic/:topicAboutMeId/img/:idImg",
  authenticate,
  deleteImgTopicAboutMeController
);

export default aboutMeRouter;
