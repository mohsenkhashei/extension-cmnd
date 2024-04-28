const CustomError = require("../services/CustomError");

function CustomErrorHandler(err, req, res, next) {
  let customError = err;

  switch (customError.name) {
    case "Error":
      customError = new CustomError(customError.message, customError.status);
      break;

    case "SyntaxError":
      customError = new CustomError("Unexpected Syntax", 400);
      break;

    case "ValidationError":
      let validationErrors = [];
      Object.keys(customError.errors).forEach((key) => {
        validationErrors.push(customError.errors[key].message);
      });
      customError = new CustomError(validationErrors, 400);
      break;

    default:
      customError = new CustomError("Internal Service Error", 500);
  }

  return res.status(customError.status ?? 500).json({
    success: false,
    error: [...customError.message.split(",")],
  });
}

module.exports = CustomErrorHandler;
