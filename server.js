const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const authRoutes = require('./routes/authRoutes')
const quizRoutes = require('./routes/quizRoutes')

app.use('/auth', authRoutes)
app.use('/quiz', quizRoutes)


app.listen(PORT, () => console.log(`Running on PORT ${PORT}`))