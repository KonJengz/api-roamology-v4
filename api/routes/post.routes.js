import { Router } from "express";
import getAllPostController from "../controllers/post/get-all.controller.js";
import upload from "../middlewares/upload.middleware.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import createPostController from "../controllers/post/create.controller.js";
import editPostController from "../controllers/post/edit.controller.js";
import deleteImgPostController from "../controllers/img-post/delete.controller.js";
import createImgPostController from "../controllers/img-post/create.controller.js";
import getAllTopicPostByPostIdController from "../controllers/topic-post/get-all-topic.controller.js";
import createTopicPostController from "../controllers/topic-post/create.controller.js";
import createImgTopicPostController from "../controllers/img-topic-post/create.controller.js";
import editTopicPostController from "../controllers/topic-post/edit.controller.js";
import deleteImgTopicPostController from "../controllers/img-topic-post/delete.controller.js";
import { schemaPost } from "../validator/post-schema.js";
import validatorMiddleware from "../middlewares/validator.middleware.js";
import { schemaTopicPost } from "../validator/topic-post-schema.js";
import adminGetPostController from "../controllers/post/admin-getpost.controller.js";

const postRouter = Router();

postRouter.get("/", getAllPostController);
postRouter.get("/admin", authenticate, adminGetPostController);

postRouter.post(
  "/",
  authenticate,
  upload.array("images", 8),
  validatorMiddleware(schemaPost),
  createPostController
);

postRouter.patch(
  "/:id",
  authenticate,
  upload.array("images", 8),
  editPostController
);

postRouter.post(
  "/:id/img",
  authenticate,
  upload.array("images", 8),
  createImgPostController
);
postRouter.delete("/:id/img/:idImg", authenticate, deleteImgPostController);

postRouter.get("/:id/topic", getAllTopicPostByPostIdController);
postRouter.get(
  "/:id/topic/admin",
  authenticate,
  getAllTopicPostByPostIdController
);
postRouter.post(
  "/:id/topic",
  authenticate,
  upload.array("images", 8),
  createTopicPostController
);
postRouter.patch(
  "/:id/topic/:topicPostId",
  authenticate,
  editTopicPostController
);

postRouter.post(
  "/:id/topic/:topicPostId/img",
  authenticate,
  validatorMiddleware(schemaTopicPost),
  upload.array("images", 8),
  createImgTopicPostController
);
postRouter.delete(
  "/:id/topic/:topicPostId/img/:idImg",
  authenticate,
  deleteImgTopicPostController
);

export default postRouter;
