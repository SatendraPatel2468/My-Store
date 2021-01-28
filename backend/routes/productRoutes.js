const express=require('express')
const { getAllProducts, getAllProductById } = require('../controller/productController')
const router=express.Router()

//Get all products from db
//route GET /api/products
//access public
router.get('/',getAllProducts)


//Get all products from db
//route GET /api/products/:id
//access public
router.get('/:id',getAllProductById)

module.exports= router;