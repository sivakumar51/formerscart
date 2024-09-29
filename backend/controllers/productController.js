const productModel= require('../model/productModel')    ///import product model



//get product api    API ---->/api/v1/products
exports.getProducts =async (req, res, next) => {
   const  query =  req.query.keyword?{name:{
    $regex:req.query.keyword,
    $options:'i'
   }}:{}
   const products =  await productModel.find(query)                       
    res.json({
        success: true,
        products
    });
};

//get product api    API ---->/api/v1/products/:id
exports.getSingleProduct =async (req, res, next) => {
   
    try{
        const product = await productModel.findById(req.params.id)
        res.json({
            success: true,
             product
        });
    }
    catch(error)
    {
        res.status(404).json({
            success: false,
             message:"this not correct id"
        });
    }    
};
