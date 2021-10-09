module.exports = (app) => {
    var usuarios = require('../controladores/usuario.controlador');


    //metodo que valida las credenciales de un usuario
    app.post("/usuarios/validaracceso", usuarios.validarAcceso);

}