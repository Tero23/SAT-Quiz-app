const { Op, Sequelize, UUIDV4 } = require("sequelize");
const { question: Question } = require("../models/index");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.createQuestion = catchAsync(async (req, res, next) => {
  const { text, options } = req.body;
  if (!text || !options)
    return next(new AppError("Please fill all the required fields!", 400));
  const question = await Question.create({
    text,
    options,
  });
  res.status(201).json({
    status: "success",
    message: "Question created!",
    question,
  });
});

exports.getTenQuestions = catchAsync(async (req, res, next) => {
  const q = await Question.findAll({});
  let randomNums = [];
  while (randomNums.length <= 9) {
    let num = Math.floor(Math.random() * 30 + 1);
    if (!randomNums.includes(num)) randomNums.push(num);
  }
  const questions = q.filter((el, i) => {
    return randomNums.includes(el.id);
  });
  res.status(200).json(questions);
});
