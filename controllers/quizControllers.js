
exports.createQuiz = (req, res) => {
    res.json({
        msg: "Created a quiz"
    })
}

exports.getAllQuiz = (req, res) => {

    res.json({
        msg: "All quiz"
    })
}

exports.getQuizDetails = (req, res) => {

    res.json({
        msg: "Quiz Details"
    })
}

exports.takeQuiz = (req, res) => {
    
    res.json({
        msg: "Take a Quiz"
    })
}

exports.viewResult = (req, res) => {
    
    res.json({
        msg: "View Result"
    })
}
