
const mysql = require('mysql2');


//Creamos conexion con la base de datos 
const db = mysql.createConnection({

    host: 'localhost',
    user: 'tu usuario',
    password: 'tu contraseña',
    database: 'expressDB'
});

//Me conecto a la base de datos 

db.connect();

module.exports = db