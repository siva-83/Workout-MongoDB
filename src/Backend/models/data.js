const { strikethrough } = require('colors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
// create a schema
const workoutsSchema = new Schema({
    heading: {
        type:String,
        
    },
    imageurl: {
        type:String
    },
    discriptionforcard:{
        type:String
    },
    fulldiscription:{
        type:String
    },
    Calorieburnperhour:{
        type:Number
    }


})


// create model from schema
const workouts = mongoose.model('workouts', workoutsSchema)

module.exports = workouts;