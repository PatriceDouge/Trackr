const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //converts empty fields to an empty string to validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //email validation
  if (Validator.isEmpty(data.email)) {
    error.email = "Empty field is required";
  } else if (!Validator.isEmail(data.email)) {
    error.email = "Email is invalid";
  }

  //password validation
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};