const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//initiates input validation for registration and log in
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//initiates user model
const User = require("../../models/User");