const express = require('express')
const router = express.Router()
const { getQuestions, getAnswers, getQuestion, getAnswer } = require('../controller/ExerciseController')

router.get('/questions', getQuestions)
router.get('/questions/:order', getQuestion);
router.get('/answers', getAnswers)
router.get('/answers/:order', getAnswer);

module.exports = router