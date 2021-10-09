module.exports = (app) => {
    var paises = require('../controladores/pais.controlador');


    //metodo que obtiene un país
    app.get("/paises/:id", paises.obtener);

    //metodo que obtiene la lista de paises
    app.get("/paises", paises.listar);

    //metodo que actualiza (INSERT - UPDATE) un país
    app.post("/paises", paises.actualizar);

    //metodo que elimina un país
    app.delete("/paises/:id", paises.eliminar);

}