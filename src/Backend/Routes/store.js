const express = require('express');
// const { isAuthenticatedUser, authorizeRoles } = require('../iddlewares/auth');
const router = express.Router();
const{authenticateUser,isAuthenticatedUser,authorizeRoles}=require("../Middlewares/auth")
const users = require('../models/user')
const products=require("../models/products")
const jwt = require('jsonwebtoken')



router.get('/',[isAuthenticatedUser,authorizeRoles("prime")],async (req, res) => {
    
    let data = await products.find();
    res.json(data);

})


router.post('/',isAuthenticatedUser, async (req, res) => {
    // db and insert one course  
    console.log("i am ready to useeeeeeeeeeeeeeeeeeeeeeeeee",req.body)  
    let data = await products.create(req.body);
    res.status(201).json(data);
    console.log("i am in route")
})

module.exports = router