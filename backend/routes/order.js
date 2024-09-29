const express = require('express');
const { createOrder } = require('../controllers/orderController');   ////ithu import panurathu
const router = express.Router();




router.route('/order').post(createOrder);

module.exports = router;   /// ithu module export panna use agum



