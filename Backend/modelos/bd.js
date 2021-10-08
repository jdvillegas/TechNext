//Cargar libreria para operar con BD MySQL
var mysql = require("mysql");

//Cargar el archivo de configuracion
var configBD = require("../configuracion/bd.config");

//crear la conexion la BD
var conexion = mysql.createConnection({
    host: configBD.SERVIDOR,
    user: configBD.USUARIO,
    password: configBD.CLAVE,
    database: configBD.BASEDATOS
});

//Abrir la conexión a la BD
conexion.connect((error) => {
    if (error) throw error;
    //Mostrar por consola mensaje de conexión
    console.log("Conexión existosa a la BD de tienda");
}
);

module.exports = conexion;