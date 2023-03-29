const express = require('express');
const router = express.Router();
const db = require('../config/database.js');



//endpoint para añadir un producto nuevo 

router.post("/products", (req, res) => {
    let sql = `INSERT INTO products (title, body) values
        ('${req.body.title}', '${req.body.body}');`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Product added...");
    });
});



//endpoint para actualizar producto 

router.put('/',(req,res)=>{
    let newTitle = 'Updated Title';
    let sql = `UPDATE products SET title = '${newTitle}'`;
    db.query(sql, (err,result)=> {
    if(err) throw err;
    res.send('Products updated...')
    })
    })
    
    module.exports = db