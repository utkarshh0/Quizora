const express = require('express')
const router = express.Router()

const { createQuiz, getAllQuiz, getQuizDetails, takeQuiz, viewResult } = require('../controllers/quizControllers')

// Create a quiz
router.post('/', createQuiz)

// Get all quizzes
router.get('/', getAllQuiz)

// Get quiz details
router.get('/:id', getQuizDetails)

// Take a quiz
router.post('/:id/take', takeQuiz)

// View result of a quiz
router.get('/:id/result', viewResult)

module.exports = router