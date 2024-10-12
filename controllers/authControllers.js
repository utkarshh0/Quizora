
const signin = (req, res) => {
    
    res.json({
        msg: 'Signin'
    })
}

const signup = (req, res) => {
    
    res.json({
        msg: 'Signup'
    })
}


module.exports = {
    signin, signup
}