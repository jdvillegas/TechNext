//Cargar el modelo de los productos
var Producto = require('../modelos/producto.modelo');

//Metodo web para obtener un producto
exports.obtener = (req, res) => {
    Producto.obtener(req.params.id, (err, data) => {
        //Verificar si hubo error
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: `No se encontró producto con el id ${req.params.id}` });
            }
            else {
                res.status(500).send({ message: `Error obteniendo el producto con el id ${req.params.id}` });
            }
        }
        else {
            //Se devuelve el registro obtenido
            res.header('Access-Control-Allow-Origin', '*');
            res.send(data);
        }
    });
}

//Metodo para buscar un prducto por nombre o referencia
exports.buscar = (req, res) => {
    Producto.buscar(req.params.dato, req.params.tipo, (err, data) => {
        if(!(req.params.tipo == 0 ||req.params.tipo == 1)){
            res.status(400).send({ message: 'Ingrese un tipo de busqueda valido 0: Nombre, 1: Referencia' });
        }
        //Verificar si hubo error
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: `No se encontró producto` });
            }
            else {
                res.status(500).send({ message: `Error obteniendo el producto` });
            }
        }
        else {
            //Se devuelve el registro obtenido
            res.header('Access-Control-Allow-Origin', '*');
            res.send(data);
        }
    });
}

//Metodo web para obtener la lista de productos
exports.listar = (req, res) => {
    Producto.listar((err, data) => {
        //Verificar si hubo error
        if (err) {
            res.status(500).send({ message: 'Error obteniendo la lista de productos' });
        }
        else {
            //Se devuelve los registros obtenidos
            res.header('Access-Control-Allow-Origin', '*');
            res.send(data);
        }
    });
}

//Metodo web para actualizar un producto
exports.actualizar = (req, res) => {
    //validar que la solicitud tenga datos
    if (!req.body) {
        res.status(400).send({ message: 'El contenido del mensaje debe tener información con el producto' });
    }

    Producto.actualizar(new Producto(req.body),
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                if (err.tipo == "No encontrado") {
                    res.status(404).send({ message: 'No se actualizó ningun producto' });
                }
                else {
                    res.status(500).send({ message: 'Error actualizando el producto ' });
                }
            }
            else {
                //Se devuelve el registro actualizado
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
}

//Metodo web para eliminar un producto
exports.eliminar = (req, res) => {
    Producto.eliminar(req.params.id,
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                if (err.tipo == "No encontrado") {
                    res.status(404).send({ message: `No se econtró el producto con id:${req.params.id}` });
                }
                else {
                    res.status(500).send({ message: 'Error eliminando el producto ' });
                }
            }
            else {
                //Se devuelve el registro actualizado
                res.header('Access-Control-Allow-Origin', '*');
                res.send({ message: `El producto con id:${req.params.id} fue eliminado` });
            }
        });
}