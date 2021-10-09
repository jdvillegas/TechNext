//Cargar el modelo de las paises
var Usuario = require('../modelos/usuario.modelo');

//Metodo web para obtener la lista de usuarios
exports.listar = (req, res) => {
    Usuario.listar((err, data) => {
        //Verificar si hubo error
        if (err) {
            res.status(500).send({ message: 'Error obteniendo la lista de usuarios' });
        }
        else {
            //Se devuelve los registros obtenidos
            res.header('Access-Control-Allow-Origin', '*');
            res.send(data);
        }
    });
}

//Metodo para editar el estado de activo o el rol de un usuario !(req.params.tipo == 0 ||req.params.tipo == 1)
exports.editar = (req, res) => {
    Usuario.buscar(req.params.dato, req.params.tipo, (err, data) => {
        //verificar opcion de edicion
        if(!(req.params.tipo == 0 ||req.params.tipo == 1)){
            res.status(400).send({ message: 'Ingrese un tipo edición valido 0: Estado de actividad, 1: Rol' });
        }
        //verificar opcion de estado de activiad
        if(req.params.tipo == 0){
            if(!(req.params.dato == 0 ||req.params.dato == 1)){
                res.status(400).send({ message: 'Ingrese un tipo de estado de actividad válido 0:inactivo, 1: Activo' });
            }    
        }
        //verificar opcion de rol
        if(req.params.tipo == 1){
            if(!(req.params.dato == 1 ||req.params.dato == 2)){
                res.status(400).send({ message: 'Ingrese un tipo de rol válido 1: Administrador, 2: vendedor' });
            }    
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
