const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //converts empty fields to an empty string to validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //name validation
  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }

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
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    error.password = "Password must be at least 6 characters";
  }

  //second password validation
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password2, { min: 6, max: 30 })) {
    error.password2 = "Password must be at least 6 characters";
  }

  //password & password2 equal
  if (!Validator.equals(data.password, data.password2)) {
    error.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
