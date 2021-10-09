//Cargar la libreria con la conexion a la bd
var sql = require('./bd');
//Cargar la libreria del modelo de MONEDA
const Moneda = require('./producto.modelo');

//constructor
var Pais = function (pais) {
    this.id = pais.Id;
    this.pais = pais.Pais;
    this.codigoAlfa2 = pais.CodigoAlfa2;
    this.codigoAlfa3 = pais.CodigoAlfa3;
    this.moneda = new Moneda(pais.IdMoneda, pais.Moneda, pais.Sigla, "", "");
}

//Metodo que obtiene un registro basado en la clave primaria
Pais.obtener = (idPais, resultado) => {
    sql.query(`SELECT * FROM Pais WHERE Id=${idPais};`, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando un país:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        if (res.length) {
            console.log("País encontrado :", res[0]);
            resultado(null, res[0]);
            return;
        }
        //No se encontraron registros
        resultado({ tipo: "No encontrado" }, null);
    });
}

//Metodo que obtiene la lista de paiss
Pais.listar = (resultado) => {
    sql.query('CALL spListarPaises;', (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando lista de paises:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        console.log("Lista de paises encontradas :", res[0]);
        resultado(null, res[0]);
    });
}

//Metodo que actualiza un registro 
Pais.actualizar = (pais, resultado) => {
    sql.query('CALL spActualizarPais(?, ?, ?, ?, ?);', //consulta sql
        [pais.id, pais.pais, pais.codigoAlfa2, pais.codigoAlfa3, pais.moneda.id], //parametros
        (err, res) => {
            //Verificar si hubo error ejecutando la consulta
            if (err) {
                console.log("Error actualizando país:", err);
                resultado(err, null);
                return;
            }
            //La consulta no afectó registros
            if (res.affectedRows == 0) {
                //No se encontraron registros
                resultado({ tipo: "No encontrado" }, null);
                return;
            }

            console.log("Pais actualizada :", pais);
            resultado(null, { pais });

        });
}

//Metodo que elimina un registro 
Pais.eliminar = (idPais, resultado) => {
    sql.query('DELETE FROM Pais WHERE Id = ?', idPais, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error eliminando la pais:", err);
            resultado(err, null);
            return;
        }
        //La consulta no afectó registros
        if (res.affectedRows == 0) {
            //No se encontraron registros
            resultado({ tipo: "No encontrado" }, null);
            return;
        }

        console.log("Pais eliminida con id :", idPais);
        resultado(null, res);
    });
}


module.exports = Pais;