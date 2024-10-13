const express = require('express')
const router = express.Router()

const { signin, signup } = require('../controllers/authControllers')

// SignIn
router.post('/signin', signin)

// Signup
router.post('/signup', signup)

module.exports = router