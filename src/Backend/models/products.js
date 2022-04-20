const { strikethrough } = require('colors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type:String,
        unique:true
    },
    imageurl: {
        type:String
    },
    price:{
        type:Number
    }


})


// create model from schema
const products = mongoose.model('products', productSchema)

module.exports = products;