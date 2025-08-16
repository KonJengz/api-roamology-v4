import * as Yup from "yup";
import createError from "../utils/create-error.util.js";

const validatorMiddleware = (schema) => async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    await schema.validate(req.body, { abortEarly: false });

    next();
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const validatorError = error.inner.reduce((acc, cur) => {
        acc[cur.path] = cur.message;
        return acc;
      }, {});

      const err = createError(400, "Validate failed", validatorError);
      next(err);
    }
  }
};

export default validatorMiddleware;
