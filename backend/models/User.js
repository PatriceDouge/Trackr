/**
 * Schema to represent User and its fields
 * Where projects/to do/in progress/etc will also be defined
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//USER SCHEMA
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: Date,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
