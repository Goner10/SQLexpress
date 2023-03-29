const db = require("../config/database.js");

const ProductController = {
        putProduct(req, res) {
          let sql = 'SELECT * FROM Products ORDER BY id DESC';
          db.query(sql, (err, result) => {
              if (err) throw err;
              res.send(result);
          });
        },
        postProduct(req, res) {  
            let sql = `INSERT INTO Products(name, price) VALUES('${req.body.name}', ${req.body.price})`
            db.query(sql, (err, result) => {
              if(err) throw err;
              console.log(result);
              res.send("Product added");
            })}
        }





        module.exports = ProductController;