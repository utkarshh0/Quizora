const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.DATABASE_URL}`)
        console.log('Databse Connected')
    }
    catch(err){
        console.error(err.message)
    }
}

module.exports = connectDB