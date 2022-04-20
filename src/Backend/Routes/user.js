const express = require('express');
// const { isAuthenticatedUser, authorizeRoles } = require('../iddlewares/auth');
const router = express.Router();
const{authenticateUser,isAuthenticatedUser}=require("../Middlewares/auth")
const users = require('../models/user')
const jwt = require('jsonwebtoken')


// protected route on back-end
// router.get('/',async (req, res) => {
//     // db and fetch all courses

//     let data = await workouts.find();
//     res.json(data);

// })

// router.get('/:id',async (req, res) => {
//     // db and fetch all courses
//     console.log(req.params.id)
//     console.log("jeffa")

//     let data = await workouts.findById(req.params.id);
//     res.json(data);
//     console.log(data);
// })



    
router.post('/signup', async (req, res) => {
    // db and insert one course  
    console.log("i am ready",req.body)  
    let data = await users.create(req.body);
    res.status(201).json(data);
    console.log("i am in route")
})


router.post("/login",authenticateUser,async(req,res)=>{
    const user = await users.findOne({email: req.body.email})
    console.log("jeffa",user)
    const token = user.getSignedJwtToken();
    res.status(200).json({auth: true, token: token});

})
router.patch('/:id',isAuthenticatedUser, async (req, res) => {
    
    
    
    console.log("i am ready to use")
    console.log(req.params.id);
    let updatedUser = await users.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedUser)
})

module.exports = router