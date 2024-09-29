const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });    // Load environment variables
const cors = require('cors');

const connectDatabase=require('./config/connectDatabase');

const products =require('./routes/product');  //product and order ithu router import panurathu     // Import routes
const orders =require('./routes/order');    // Import routes
 
connectDatabase();


app.use(express.json())
app.use(cors())   ///ithu moddleware   ///Access control-origin
app.use('/api/v1/',products);
app.use('/api/v1/',orders);    ///ithu namakku ethathu pola path set panna


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
