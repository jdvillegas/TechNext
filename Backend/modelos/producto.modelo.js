//Cargar la libreria con la conexion a la bd
var sql = require('./bd');

//constructor
var Producto = function (producto) {
    this.id = producto.Id;
    this.nombre = producto.Nombre;
    this.referencia = producto.Referencia;
    this.valorUnitario = producto.ValorUnitario;
    this.idMarca = producto.IdMarca;
}

//Metodo que obtiene un registro basado en la clave primaria
Producto.obtener = (idProducto, resultado) => {
    sql.query(`SELECT * FROM producto WHERE Id=${idProducto};`, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando un producto:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        if (res.length) {
            console.log("Producto encontrado :", res[0]);
            resultado(null, res[0]);
            return;
        }
        //No se encontraron registros
        resultado({ tipo: "No encontrado" }, null);
    });
}

//Metodo que obtiene la lista de productos
Producto.listar = (resultado) => {
    sql.query('CALL spListarProductos;', (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando lista de productos:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        console.log("Lista de productos encontrados :", res[0]);
        resultado(null, res[0]);
    });
}

//Metodo que obtiene un registro basado en el nombre o eferencia 
Producto.buscar = (producto, resultado) => {
    sql.query('CALL spBuscarProducto(?, ?);', //consulta sql
        [dato, tipo], //parametros
        (err, res) => {
            //Verificar si hubo error ejecutando la consulta
            if (err) {
                console.log("Error consultando producto:", err);
                resultado(err, null);
                return;
            }
            if (res.length) {
                if(tipo == 0){
                    console.log(`Se encontró el producto por el nombre ${dato}: `, res[0]);
                resultado(null, res[0]);
                return;
                }
                if(tipo == 0){
                    console.log(`Se encontró el producto por la referencia ${dato} :`, res[0]);
                resultado(null, res[0]);
                return;
                }
            }
            //No se encontraron registros
            resultado({ tipo: "No encontrado" }, null);
        });
}

//Metodo que obtiene un registro basado en la clave primaria
Producto.actualizar = (producto, resultado) => {
    sql.query('CALL spActualizarProducto(?, ?, ?, ?, ?);', //consulta sql
        [producto.id, producto.nombre, producto.referencia, producto.valorUnitario, producto.idMarca], //parametros
        (err, res) => {
            //Verificar si hubo error ejecutando la consulta
            if (err) {
                console.log("Error actualizando producto:", err);
                resultado(err, null);
                return;
            }
            //La consulta no afectó registros
            if (res.affectedRows == 0) {
                //No se encontraron registros
                resultado({ tipo: "No encontrado" }, null);
                return;
            }
            if (producto.id <=0 ){
                console.log("Producto insertado :", producto);
                resultado(null, { producto });
                return;
            }
            console.log("Producto actualizado :", producto);
            resultado(null, { producto });

        });
}

//Metodo que elimina un registro 
Producto.eliminar = (idProducto, resultado) => {
    sql.query('DELETE FROM producto WHERE Id = ?', idProducto, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error eliminando el producto:", err);
            resultado(err, null);
            return;
        }
        //La consulta no afectó registros
        if (res.affectedRows == 0) {
            //No se encontraron registros
            resultado({ tipo: "No encontrado" }, null);
            return;
        }

        console.log("Producto eliminido con id :", idProducto);
        resultado(null, res);
    });
}

module.exports = Producto;