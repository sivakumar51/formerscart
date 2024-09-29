const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController'); // Import the controller functions

const router = express.Router()

router.route('/products').get(getProducts);   //ithu product get panna
router.route('/product/:id').get(getSingleProduct);  //ithu single product get panna


module.exports= router;   // ..Export the router..  to be used in other parts of the application




