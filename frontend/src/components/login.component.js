import React, { Component, userState } from "react";




const login = () => {
    
    
} 

function Login(props) {
    
        return (
            <form onSubmit={this.handleSubmit} >
                <h3>Acceso</h3>

                <div className="form-group">
                    <label>Tipo Usuario</label>
                    <select className="form-control" id="tipo" name="tipo" ref={this.tipo}>
                        <option value="Vendedor"> Vendedor </option>
                        <option value="Administrador"> Administrador </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="Ingrese Correo" ref={this.email} />
                </div>

                <div className="form-group">
                    <label>Clave</label>
                    <input type="password" className="form-control" placeholder="Ingrese Clave" ref={this.password} />
                </div>

                

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={()=>login()} >Entrar</button>
                <p className="forgot-password text-right">
                    Olvido su <a href="#">Clave?</a>
                </p>
            </form>
        );

}



