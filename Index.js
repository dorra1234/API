require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan=require('morgan')
const cors= require('cors')
app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000'
}));

const url ="mongodb://localhost:27017/API";
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/authentication',authenticationRoute)
app.use('/getUser',getUserRoute)
app.use('/getProduit',getProductRoute)
app.use(morgan('dev'))

async function connectAP(){
    try{
        await mongoose.connect(url);
        console.log('Connected to database')
    } catch (err){
        console.error('Error connecting database:',err.message);
    }
}
connectAP();

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`);
});