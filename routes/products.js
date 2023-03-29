const express = require('express');
const router = express.Router();
const db = require('../config/database.js');
const ProductController = require("../controllers/ProductController")



//endpoint para añadir un producto nuevo 

router.post("/products", ProductController.postProduct)


//endpoint para actualizar producto 

router.put('/productsAct',ProductController.putProduct)
    
    module.exports = router;