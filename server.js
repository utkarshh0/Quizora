const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const quizRoutes = require('./routes/quizRoutes')
const authMiddleware = require('./middlewares/authMiddleware')

app.use(express.json())
connectDB()

app.use('/auth', authRoutes)
app.use('/quiz', authMiddleware, quizRoutes)


app.listen(PORT, () => console.log(`Running on PORT ${PORT}`))