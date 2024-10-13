const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    quizResults: [
        {
            quizId: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Quiz' 
            },
            score: { 
                type: Number, 
                required: true 
            },
            totalQuestions: { 
                type: Number, 
                required: true 
            },
            dateTaken: { 
                type: Date, 
                default: Date.now 
            }
        }
    ]
})

module.exports = mongoose.model('User', UserSchema)