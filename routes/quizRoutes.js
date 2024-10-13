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
router.post('/take/:id', takeQuiz)

// View result of a quiz
router.get('/users/:userId/quizzes/:quizId/result', viewResult)

module.exports = router