//Cargar la libreria con la conexion a la bd
var sql = require('./bd');

//constructor
var Moneda = function (producto) {
    this.id = producto.Id;
    this.nombre = producto.Nombre;
    this.referencia = producto.Referencia;
    this.valorUnitario = producto.ValorUnitario;
    this.idMarca = producto.IdMarca;
}

//Metodo que obtiene un registro basado en la clave primaria
Moneda.obtener = (idProducto, resultado) => {
    sql.query(`SELECT * FROM producto WHERE Id=${idProducto};`, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando una producto:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        if (res.length) {
            console.log("Producto encontrada :", res[0]);
            resultado(null, res[0]);
            return;
        }
        //No se encontraron registros
        resultado({ tipo: "No encontrado" }, null);
    });
}

//Metodo que obtiene la lista de monedas
Moneda.listar = (resultado) => {
    sql.query('CALL spListarMonedas;', (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando lista de monedas:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        console.log("Lista de monedas encontradas :", res[0]);
        resultado(null, res[0]);
    });
}

//Metodo que obtiene un registro basado en la clave primaria
Moneda.actualizar = (moneda, resultado) => {
    sql.query('CALL spActualizarMoneda(?, ?, ?, ?, ?);', //consulta sql
        [moneda.id, moneda.moneda, moneda.sigla, moneda.simbolo, moneda.emisor], //parametros
        (err, res) => {
            //Verificar si hubo error ejecutando la consulta
            if (err) {
                console.log("Error actualizando moneda:", err);
                resultado(err, null);
                return;
            }
            //La consulta no afectó registros
            if (res.affectedRows == 0) {
                //No se encontraron registros
                resultado({ tipo: "No encontrado" }, null);
                return;
            }

            console.log("Moneda actualizada :", moneda);
            resultado(null, { moneda });

        });
}

//Metodo que elimina un registro 
Moneda.eliminar = (idMoneda, resultado) => {
    sql.query('DELETE FROM Moneda WHERE Id = ?', idMoneda, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error eliminando la moneda:", err);
            resultado(err, null);
            return;
        }
        //La consulta no afectó registros
        if (res.affectedRows == 0) {
            //No se encontraron registros
            resultado({ tipo: "No encontrado" }, null);
            return;
        }

        console.log("Moneda eliminida con id :", idMoneda);
        resultado(null, res);
    });
}


module.exports = Moneda;