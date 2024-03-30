import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("the database connected successfully");
}).catch((err) => {
  console.log(err);
});

const app=express();
app.listen(3000,()=>{
    console.log("the port is running from 3000!! hey hello this is the test from the nodemon and can be changed")
});