//Cargar el modelo de las monedas
var Moneda = require('../modelos/producto.modelo');

//Metodo web para obtener una moneda
exports.obtener = (req, res) => {
    Moneda.obtener(req.params.id, (err, data) => {
        //Verificar si hubo error
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: `No se encontró moneda con el id ${req.params.id}` });
            }
            else {
                res.status(500).send({ message: `Error obteniendo la moneda con el id ${req.params.id}` });
            }
        }
        else {
            //Se devuelve el registro obtenido
            res.header('Access-Control-Allow-Origin', '*');
            res.send(data);
        }
    });
}

//Metodo web para obtener la lista de monedas
exports.listar = (req, res) => {
    Moneda.listar((err, data) => {
        //Verificar si hubo error
        if (err) {
            res.status(500).send({ message: 'Error obteniendo la lista de monedas' });
        }
        else {
            //Se devuelve los registros obtenidos
            res.header('Access-Control-Allow-Origin', '*');
            res.send(data);
        }
    });
}

//Metodo web para obtener una moneda
exports.actualizar = (req, res) => {
    //validar que la solicitud tenga datos
    if (!req.body) {
        res.status(400).send({ message: 'El contenido del mensaje debe tener información con la moneda' });
    }

    Moneda.actualizar(new Moneda(req.body),
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                if (err.tipo == "No encontrado") {
                    res.status(404).send({ message: 'No se actualizó ninguna moneda' });
                }
                else {
                    res.status(500).send({ message: 'Error actualizando la moneda ' });
                }
            }
            else {
                //Se devuelve el registro actualizado
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
}

//Metodo web para eliminar una moneda
exports.eliminar = (req, res) => {
    Moneda.eliminar(req.params.id,
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                if (err.tipo == "No encontrado") {
                    res.status(404).send({ message: `No se econtró la moneda con id:${req.params.id}` });
                }
                else {
                    res.status(500).send({ message: 'Error eliminando la moneda ' });
                }
            }
            else {
                //Se devuelve el registro actualizado
                res.header('Access-Control-Allow-Origin', '*');
                res.send({ message: `La moneda con id:${req.params.id} fue eliminada` });
            }
        });
}