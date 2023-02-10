const { promisify } = require("util");
const { user: User } = require("../models/index");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");

exports.register = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.create({
    id: v4(),
    username,
    password,
  });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res
    .cookie("jwt", token, { maxAge: 5 * 60 * 60 * 1000, httpOnly: true })
    .status(201)
    .json({
      status: "success",
      user,
    });
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) return next(new AppError("Invalid email/password", 400));
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return next(new AppError("Invalid email/password", 400));
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res
    .cookie("jwt", token, { maxAge: 5 * 60 * 60 * 1000, httpOnly: true })
    .status(200)
    .json({
      status: "success",
      message: "Logged In successfully!",
      user,
    });
});
