const express = require('express');
const { ObjectId } = require('mongodb');
// const { isAuthenticatedUser } = require('../Middlewares/auth');
const router = express.Router();
const workouthistories = require('../models/workouthistory')
const { isAuthenticatedUser } = require('../Middlewares/auth');



// protected route on back-end
router.get('/',isAuthenticatedUser,async (req, res) => {
    console.log("userdata jeffa",req.id)
    // const userid=req.user
    // db and fetch all courses
        // console.log("jeffa",res.advancedQueryResult.data)
    // let data = await workouthistories.find();
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

        // {
        //     $bucket: {
        //         groupBy:"$date",
        //         boundaries: [ 2022-04-18T10:53:39.218+00:00, ]
                
        //         }
        //      }
          



      ]);
    
    res.json(data);

})

// router.get('/:id',isAuthenticatedUser,async (req, res) => {
//     // db and fetch all courses
//     console.log(req.params.id)
//     console.log("jeffa")

//     let data = await workouts.findById(req.params.id);
//     res.json(data);
//     console.log(data);
// })



    
router.post('/', async (req, res) => {
    // db and insert one course  
    console.log("i was triggereddddddddddddddd",req.body)
    console.log("i am ready",req.body)  
    let data = await workouthistories.create(req.body);
    res.status(201).json(data);
    console.log("i am in route")
})

// router.delete('/:id', async (req, res) => {
//     // db and insert one course    
//     console.log(req.params.id);
//     let result = await Employee.findByIdAndDelete(req.params.id);
//     console.log(result);
//     res.json(result);
// })

// router.patch('/:id', async (req, res) => {
//     // db and insert one course    
//     console.log(req.params.id);
//     let updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body);
//     res.json(updatedEmployee)
// })

module.exports = router