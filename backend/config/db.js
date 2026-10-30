require('dotenv').config()
const mongoose = require ('mongoose')

async function connectDB(){
    try {
        // Database URL comes from backend/.env (MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hospital')
        console.log('Database Connected')
        return conn
    } catch (error){
        console.log('Database Connection Error:', error.message)
    }
}

module.exports = connectDB
