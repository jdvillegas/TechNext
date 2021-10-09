import React  from "react";
import { Link } from "react-router-dom";

export function Login(props) {
    
        return (
            <form  >
                <h3>Acceso</h3>

                <div className="form-group">
                    <label>Tipo Usuario</label>
                    <select className="form-control" id="tipo" name="tipo" >
                        <option value="Vendedor"> Vendedor </option>
                        <option value="Administrador"> Administrador </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="Ingrese Correo"  />
                </div>

                <div className="form-group">
                    <label>Clave</label>
                    <input type="password" className="form-control" placeholder="Ingrese Clave"  />
                </div>

                

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"  >Entrar</button>
                <p className="forgot-password text-right">
                    Olvido su <Link to={`/sign-up`}>Clave ?</Link>
                </p>
            </form>
        )

}



