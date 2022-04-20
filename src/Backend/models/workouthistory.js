const { strikethrough } = require('colors');
const mongoose = require('mongoose');
// const { number } = require('yup');
const Schema = mongoose.Schema;

const workouthistorySchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'users'
    },
    date:{
        type: String,
        // default: Date.now
    },

    nameofworkout: {
        type:String
        
    },
    caloriesburned: {
        type:Number
    },
    duration:{
        type:Number
    }


})


// create model from schema
const workouthistories = mongoose.model('workouthistories', workouthistorySchema)

module.exports = workouthistories;