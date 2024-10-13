const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    questions: [
        {
          question: String,
          options: [String],
          correctAnswer: Number,
        }
    ]
})

module.exports = mongoose.model('Quiz', QuizSchema)