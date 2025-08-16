import createError from "./create-error.util.js";

const handlePrismaError = (err) => {
  let message;
  let statusCode;

  switch (err.code) {
    case "P2002":
      statusCode = 409;
      const target =
        err.meta && err.meta.target ? err.meta.target.join(", ") : "data";
      message = `${target} already in use`;
      return createError(statusCode, message);
    case "P2025":
      statusCode = 404;
      message = "request not found data";
      return createError(statusCode, message);
    case "P2003":
      statusCode = 400;
      message = "foreign key constraint invalid";
      return createError(statusCode, message);
    case "P2014":
      statusCode = 400;
      message = "Invalid ID for relation";
      return createError(statusCode, message);
    case "P2021":
    case "P2022":
      statusCode = 500;
      message = "Table or Column not exists";
      return createError(statusCode, message);
    default:
      statusCode = 500;
      message = "database someting wrong";
      return createError(statusCode, message);
  }
};

export default handlePrismaError;
