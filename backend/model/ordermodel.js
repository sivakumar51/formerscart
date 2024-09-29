const mongoose = require('mongoose');

const Orderschema = new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
})

const orderModel = mongoose.model('order',Orderschema)

module.exports= orderModel;