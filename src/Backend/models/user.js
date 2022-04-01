const { strikethrough } = require('colors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// create a schema
// create a schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
        // // validation on email
        // unique: true,
        // match: [/@gmail.com$/, "Please add a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: 6
    },
    role:{
        type: String,
        required: true

    }


})


userSchema.pre('save', async function(next){
    // if(!this.isModified('password')){
    //     next();
    // }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

})

userSchema.methods.getSignedJwtToken = function(){
    const token = jwt.sign({id: this._id, role: this.role}, "p@ssw0rd", {
        expiresIn: "30s"
    })

    return token;
}


// create model from schema
const users = mongoose.model('users', userSchema)

module.exports = users;