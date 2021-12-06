// calling express which is node js frameWork
const express = require('express');
const app = express();
const connectDB = require('./config/db');
//routes 
const posts = require('./routes/api/posts')
const auth = require('./routes/api/auth')
const profile = require('./routes/api/profile')
const users = require('./routes/api/users')

// a function to connect the app to mongo db 
connectDB();
//body parser this needed to send post requests for the sever 

app.use(express.json({extended: false}))
// define routes 
app.get('/',(req,res) => {res.send('Api running')});
app.use('/api/posts',posts)
app.use('/api/auth',auth)
app.use('/api/profile',profile)
app.use('/api/users',users)

const PORT = process.env.port || 5000;

app.listen(PORT,()=>console.log(`connected to port ${PORT}`))