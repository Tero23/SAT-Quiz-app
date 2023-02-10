const router = require("express").Router();
const questionController = require("../controllers/question");
const protect = require("../middlewares/auth");

router
  .route("/")
  .get(protect.protect, questionController.getTenQuestions)
  .post(questionController.createQuestion);

module.exports = router;
