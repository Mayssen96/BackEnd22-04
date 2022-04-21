const express = require('express');
const connectDb = require('./config/connectDb');
const init = require('./config/setup')
require('dotenv').config();

const app=express();
app.use(express.json());
connectDb();
init()


const PORT=process.env.PORT||4000;
app.listen(PORT,(err)=>{
    if(err) return console.error(err)
    console.log(`listening on port ${PORT}`)
})
