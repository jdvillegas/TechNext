module.exports = (app) => {
    var usuarios = require('../controladores/usuario.controlador');


    //metodo que lista usuarios
    app.get("/usuarios", usuarios.listar);
    
    //metodo que edita rol o estado de actividad de usuarios
    app.post("/productos", usuarios.editar);
}