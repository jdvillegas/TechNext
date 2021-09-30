import React, { Component } from "react";





export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Registro de Usuarios </h3>

                <div className="form-group">
                    <label>Tipo Usuario</label>
                    <select className="form-control" id="tipo" name="tipo">
                        <option value="Vendedor"> Vendedor </option>
                        <option value="Administrador"> Administrador </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" />
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Apellido" />
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Correo" />
                </div>

                <div className="form-group">
                    <label>Clave</label>
                    <input type="password" className="form-control" placeholder="Clave" />
                </div>
                <br/>
                
                <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                <p className="forgot-password text-right">
                    Ya se encuentra registrado <a href="#">Acceder ?</a>
                </p>
            </form>
        );
    }
}