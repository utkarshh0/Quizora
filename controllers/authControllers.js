const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/users')

const signin = async (req, res) => {
    
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid email or password' })
  
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' })
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({ token })
}

const signup = async (req, res) => {
    
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ username, email, password: hashedPassword })
    await user.save()
    res.status(201).json({ message: 'User registered successfully' })
}


module.exports = {
    signin, signup
}