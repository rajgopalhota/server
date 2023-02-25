const express =require('express');
const app =express();
const mongoose = require('mongoose');
const dotenv=require("dotenv");
const routesurls = require('./routes/routes');
const cors = require('cors');
const PORT = process.env.PORT || 2003

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>{
    console.log("Database Connected!!")
})

app.use(express.json())
app.use(cors());
app.use('/api',routesurls);
app.listen(PORT,()=>{console.log("Server Started on 2003")})