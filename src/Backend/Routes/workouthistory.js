const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const workouthistories = require('../models/workouthistory')
const { isAuthenticatedUser } = require('../Middlewares/auth');



// protected route on back-end
router.get('/',isAuthenticatedUser,async (req, res) => {
    console.log("userdata jeffa",req.id)
 
    let data = await workouthistories.aggregate([
        { $match: {"user":ObjectId(req.id)}},
        {
            "$group": { 
                "_id": {"nameofworkout":"$nameofworkout","date":"$date" },
                "nameofworkout": { "$first": "$nameofworkout" },
                "calories": { $sum: "$caloriesburned" },
                "time": {$sum:"$duration"},
                "date":{"$first":"$date"}
                
            }
         },
         {
            $group: {
              _id: "$date",
              "date":{"$first":"$date"},
              "total_calories":{$sum:"$calories"},
              "total_time":{$sum:"$time"},

              workouts: {
                $push: {
                  "nameofworkout": "$_id.nameofworkout",
                  "calories": "$calories",
                  "time": "$time"
                }
              }
            }
        },
        {
            $project:{
                "_id":0
            }
        }

      ]);
    
    res.json(data);

})    
router.post('/',isAuthenticatedUser, async (req, res) => {
    // db and insert one course  
    console.log("i was triggereddddddddddddddd",req.body)
    console.log("i am ready",req.body)  
    let data = await workouthistories.create(req.body);
    res.status(201).json(data);
    console.log("i am in route")
})

module.exports = router