const mongoose = require('mongoose');

const database = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log(`MongoDB Connected  ${process.env.MONGODB}`.bgGreen);
    } catch (error) {
        console.log(`Error connecting MongoDB ${error.message}`.bgRed)
    }
    
}

module.exports = database;