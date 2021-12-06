const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI')

// async function to connect ot mongodb 

const connectDB = async () =>{
 try {
        await mongoose.connect(db)
        console.log('connected to mongoDB...')
 }

 catch (err){
console.error(err.message)
process.exit(1)
 }
}


module.exports = connectDB;