
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

    
    });
    
//Me conecto a la base de datos 

db.connect();


//Endpoint de base de datos





app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));