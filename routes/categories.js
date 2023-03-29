const express = require('express');
const router = express.Router();
const db = require('../config/database.js');
const CategoryController = require("../controllers/CategoryController")


//endpoint para crear una categoría

router.post("/categories", CategoryController.postCategory)

//endpoints para actualizar una categoria

app.put('/categoriesAct', CategoryController.putCategory)

module.exports = router;