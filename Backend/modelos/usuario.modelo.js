//Cargar la libreria con la conexion a la bd
var sql = require('./bd');

//constructor
var Usuario = function (usuario) {
    this.id = usuario.Id;
    this.usuario = usuario.Usuario;
    this.nombre = usuario.Nombre;
    this.clave = usuario.Clave;
    this.rol = usuario.IdRol;
    this.activo = usuario.Activo;
}

//Metodo que obtiene la lista de usuarion
Usuario.listar = (resultado) => {
    sql.query('CALL spListarUsuarios;', (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando lista de usuarios:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        console.log("Lista de usuarios encontrados :", res[0]);
        resultado(null, res[0]);
    });
}

//Metodo para editar usuarios
Usuario.editar = (id, dato, tipo) => {
    sql.query("CALL spEditarUsuario(?,?,?);",
    [id, dato, tipo], (err,res) =>{
        if (err) {
            console.log("Error consultando usuario", err);
            resultado(err, null);
            return;
        }
        if (res.length) {
            if(tipo==0){
                console.log(`El usuario con id ${id} se encuentra con un estado de activo ${dato}}`, res[0]);
                resultado(null, res[0]);
                return;
            }
            if(tipo==1){
                console.log(`El usuario con id ${id} se encuentra con un rol ${dato}}`, res[0]);
                resultado(null, res[0]);
                return;
            }
        }
        //No se encontraron registros
        resultado({ tipo: "No encontrado" }, null);
    });
}

module.exports = Usuario;