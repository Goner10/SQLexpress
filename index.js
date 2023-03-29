
const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./config/database")//aqui nos traemos la info sensible

app.use(express.json());//parsea el body
app.use("/products", require(".config/database"))




//Endpoint de base de datos

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE expressDB';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...')
    })
})



//crear tablas products y categorias

app.get('/createtableProducts', (req, res) => {

    let sql = 'CREATE TABLE products(id int AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})



app.get('/createtableCategories', (req, res) => {

    let sql = 'CREATE TABLE categories(id int AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})

//tabla intermedia porque es una relacion muchos a muchos

app.get("/createTableProducts_Categories", (req, res) => {
    let sql = "CREATE TABLE Products_Categories(id INT AUTO_INCREMENT, product_id INT, category_id INT, PRIMARY KEY(id), FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE, FOREIGN KEY (category_id) REFERENCES Categories(id) ON DELETE CASCADE)";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Tabla intermedia creada");
    });
});


//endpoints para añadir un producto nuevo y para crear una categoría




app.post("/c", (req, res) => {
    let sql = `INSERT INTO categories (title) values
            ('${req.body.title}');`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("category added...");
    });
});





//endpoints para actualizar producto y categoria




    app.put('/category',(req,res)=>{
        let newTitle = 'Updated Title';
        let sql = `UPDATE categories SET title = '${newTitle}'`;
        db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('category updated...')
        })
        })



app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));