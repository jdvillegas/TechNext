import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Acceso</h3>

                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="Ingrese Correo" />
                </div>

                <div className="form-group">
                    <label>Clave</label>
                    <input type="password" className="form-control" placeholder="Ingrese Clave" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                <p className="forgot-password text-right">
                    Olvido su <a href="#">Clave?</a>
                </p>
            </form>
        );
    }
}