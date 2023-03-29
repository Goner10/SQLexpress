const express = require('express');
const router = express.Router();
const db = require('../config/database.js');

//endpoint para crear una categoría

router.post("/c", (req, res) => {
    let sql = `INSERT INTO categories (title) values
            ('${req.body.title}');`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("category added...");
    });
});