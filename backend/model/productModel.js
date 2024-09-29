const mongoose = require('mongoose');  //Importing Mongoose


//Defining the Schema
const productschema =new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    rating:String,
    image:[
        {
            image:String
        },
    ],
    category:String,
    seller:String,
    stock:String,
    numberofReviews:String,
    createdAt:Date
})
const productModel=mongoose.model('product',productschema) //Creating the Model

module.exports=productModel; ///Exporting the Model