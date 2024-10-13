const Quiz = require('../models/quiz')
const User = require('../models/users') 

// Create a new quiz
exports.createQuiz = async (req, res) => {
    try {
        const quizData = req.body
        const newQuiz = new Quiz(quizData)
        await newQuiz.save()
        res.status(201).json({
            msg: "Quiz created successfully",
            quiz: newQuiz
        })
    } catch (error) {
        res.status(500).json({ msg: "Error creating quiz", error: error.message })
    }
}

// Get all quizzes
exports.getAllQuiz = async (req, res) => {
    try {
        const quizzes = await Quiz.find() // Fetch all quizzes from the database
        res.json({
            msg: "All quizzes",
            quizzes: quizzes
        })
    } catch (error) {
        res.status(500).json({ msg: "Error fetching quizzes", error: error.message })
    }
}

// Get details of a specific quiz by ID
exports.getQuizDetails = async (req, res) => {
    try {
        const quizId = req.params.id
        const quiz = await Quiz.findById(quizId)
        if (!quiz) {
            return res.status(404).json({ msg: "Quiz not found" })
        }
        res.json({
            msg: "Quiz details",
            quiz: quiz
        })
    } catch (error) {
        res.status(500).json({ msg: "Error fetching quiz details", error: error.message })
    }
}

// Take a quiz (submit answers and get results)
exports.takeQuiz = async (req, res) => {
    try {
        const quizId = req.params.id
        const { answers, userId } = req.body

        const quiz = await Quiz.findById(quizId)
        if (!quiz) {
            return res.status(404).json({ msg: "Quiz not found" })
        }

        // Check user exists (to store their result)
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ msg: "User not found" })
        }

        // Calculate score
        let score = 0
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++
            }
        })

        // Store the result in the user's quizResults array
        await User.findByIdAndUpdate(userId, {
            $push: {
                quizResults: {
                    quizId: quizId,
                    score: score,
                    totalQuestions: quiz.questions.length,
                    dateTaken: new Date()
                }
            }
        })

        res.json({
            msg: `Quiz submitted. Your score: ${score}/${quiz.questions.length}`,
            score: score,
            totalQuestions: quiz.questions.length
        })
    } catch (error) {
        res.status(500).json({ msg: "Error submitting quiz", error: error.message })
    }
}

// View the result of a quiz for a user
exports.viewResult = async (req, res) => {
    try {
        const { userId, quizId } = req.params

        // Find the user and populate their quiz results
        const user = await User.findById(userId).populate('quizResults.quizId')

        if (!user) {
            return res.status(404).json({ msg: "User not found" })
        }

        // Filter to get the result for the specific quiz
        const quizResult = user.quizResults.find(result => result.quizId._id.toString() === quizId)

        if (!quizResult) {
            return res.status(404).json({ msg: "Quiz result not found" })
        }

        res.json({
            msg: "Quiz result retrieved successfully",
            result: {
                quizTitle: quizResult.quizId.title,
                score: quizResult.score,
                totalQuestions: quizResult.totalQuestions,
                dateTaken: quizResult.dateTaken
            }
        })
    } catch (error) {
        res.status(500).json({ msg: "Error fetching quiz result", error: error.message })
    }
}
