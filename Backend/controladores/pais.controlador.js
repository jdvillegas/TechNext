//Cargar el modelo de las paises
var Pais = require('../modelos/pais.modelo');

//Metodo web para obtener una pais
exports.obtener = (req, res) => {
    Pais.obtener(req.params.id, (err, data) => {
        //Verificar si hubo error
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: `No se encontró pais con el id ${req.params.id}` });
            }
            else {
                res.status(500).send({ message: `Error obteniendo el país con el id ${req.params.id}` });
            }
        }
        else {
            //Se devuelve el registro obtenido
            res.send(data);
        }
    });
}

//Metodo web para obtener la lista de paises
exports.listar = (req, res) => {
    Pais.listar((err, data) => {
        //Verificar si hubo error
        if (err) {
            res.status(500).send({ message: 'Error obteniendo la lista de paises' });
        }
        else {
            //Se devuelve los registros obtenidos
            res.send(data);
        }
    });
}

//Metodo web para obtener una pais
exports.actualizar = (req, res) => {
    //validar que la solicitud tenga datos
    if (!req.body) {
        res.status(400).send({ message: 'El contenido del mensaje debe tener información con el país' });
    }

    Pais.actualizar(new Pais(req.body),
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                if (err.tipo == "No encontrado") {
                    res.status(404).send({ message: 'No se actualizó ningún país' });
                }
                else {
                    res.status(500).send({ message: 'Error actualizando el país ' });
                }
            }
            else {
                //Se devuelve el registro actualizado
                res.send(data);
            }
        });
}

//Metodo web para eliminar una pais
exports.eliminar = (req, res) => {
    Pais.eliminar(req.params.id,
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                if (err.tipo == "No encontrado") {
                    res.status(404).send({ message: `No se econtró el país con id:${req.params.id}` });
                }
                else {
                    res.status(500).send({ message: 'Error eliminando el país ' });
                }
            }
            else {
                //Se devuelve el registro actualizado
                res.send({ message: `La pais con id:${req.params.id} fue eliminada` });
            }
        });
}