
const express = require("express");
const app = express();
const mysql = require('mysql2');
app.use(express.json());//parsea el body

const PORT = 8080;

//Creamos conexion conla base de datos 
const db = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : 'Supergona100.',
    database:'expressDB',
    
    });
    
//Me conecto a la base de datos 

db.connect();


//Endpoint de base de datos

app.get('/createdb',(req,res)=>{
    let sql ='CREATE DATABASE expressDB';
    db.query(sql,(err,result)=>{
    if(err)throw err;
    console.log(result);    
    res.send('Database created...')
    })
})




app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));