const { json } = require("express");
const users=require("../models/user")
const jwt = require('jsonwebtoken')

const authenticateUser = async function(req, res, next){
    const user = await users.findOne({email: req.body.email})
    console.log(user);

    if(user){
        // Match the password
        const isMatch = await user.matchPassword(req.body.password)
        if(isMatch){
            next();
        }else{
            res.status(401).send({"auth":false,"error":"Invalide Password"})
        }
    }else{
        res.status(200).send({"auth":false,"error":"invalide username"})
    }
}


const isAuthenticatedUser = async function(req, res, next){
    
    const token = req.headers['authorization'];
    console.log(token);
    if(token) {
        const tokens = token.split(' ');

        
        try{
            const decodedData = jwt.verify(tokens[1], "p@ssw0rd");
            console.log("hello",decodedData);
            req.myname="sivarama"
            console.log("bye",req)
            if(decodedData.accounttype){
                req.accounttype = decodedData.accounttype
                req.id = decodedData.id
                console.log("bye",req)
            }
            next();
        }
        catch(err){
            console.log('Error caught: ', err)
           
            next(err);
        }
    }
    else{
        res.status(403).send('You are not authorized to access this data');
    }
    
   
}



const authorizeRoles = (...roles) => {
    return (req, res, next)=> {
        if(roles.includes(req.accounttype)){
            next();
        }
        else{
            res.status(403).send('You dont have an authorized person to access')
        }
    }
}




module.exports={authenticateUser,isAuthenticatedUser,authorizeRoles}