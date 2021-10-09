module.exports = (app) => {
    var monedas = require('../controladores/producto.controlador');

    //metodo que obtiene una moneda
    app.get("/productos/:id", monedas.obtener);

    app.get("/productos/:dato/:tipo", monedas.buscar);

    //metodo que obtiene la lista de monedas
    app.get("/productos", monedas.listar);

    //metodo que actualiza (INSERT - UPDATE) una moneda
    app.post("/productos", monedas.actualizar);

    //metodo que elimina una moneda
    app.delete("/productos/:id", monedas.eliminar);
}