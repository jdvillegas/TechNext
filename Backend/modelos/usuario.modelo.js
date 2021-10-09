//Cargar la libreria con la conexion a la bd
var sql = require('./bd');

//constructor
var Usuario = function (usuario) {
    this.id = usuario.Id;
    this.usuario = usuario.Usuario;
    this.nombre = usuario.Nombre;
}

//Metodo que valida las credenciales de un usuario
Usuario.validarAcceso = (usuario, clave, resultado) => {
    sql.query("CALL spValidarAccesoUsuario( ?, ?);",
        [usuario, clave], (err, res) => {
            //Verificar si hubo error ejecutando la consulta
            if (err) {
                console.log("Error validando acceso:", err);
                resultado(err, null);
                return;
            }
            //La consulta devuelve resultados
            if (res.length && res[0].length) {
                console.log("Usuario encontrado :", res[0]);
                resultado(null, res[0]);
                return;
            }
            //No se encontraron registros
            resultado({ tipo: "No encontrado" }, null);
            console.log("Credenciales no válidas");
        });
}


module.exports = Usuario;