const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const Course = require('./models/course')
// const Employee = require('./models/employee')
const workoutRoute=require("./Routes/Data")
const userRoute=require("./Routes/user")
const colors = require('colors')
//middlewares are still to be made in this project for smooth flow

const url = 'mongodb://localhost:27017/sivadb';
const connnectToDB = async () =>{
  await mongoose.connect(url);

  console.log("connected to db".green);
}
connnectToDB();

// pre middleware 
app.use(cors())
app.use(express.json())
app.use('/workouts', workoutRoute)
app.use('/', userRoute)


app.listen(4000, () => console.log('listening on 4000...'));