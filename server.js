const express = require('express');
const app =  express();



app.get('/',(res,req)=> res.send('Api running'));

const PORT = process.env.port || 5000;

app.listen(PORT,()=>console.log('connected to sever'+ PORT))