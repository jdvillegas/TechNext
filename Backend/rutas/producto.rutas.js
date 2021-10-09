module.exports = (app) => {
    var monedas = require('../controladores/producto.controlador');

    //metodo que obtiene una moneda
    app.get("/monedas/:id", monedas.obtener);

    //metodo que obtiene la lista de monedas
    app.get("/monedas", monedas.listar);

    //metodo que actualiza (INSERT - UPDATE) una moneda
    app.post("/monedas", monedas.actualizar);

    //metodo que elimina una moneda
    app.delete("/monedas/:id", monedas.eliminar);

}