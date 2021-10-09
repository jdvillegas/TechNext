import React, {useState} from "react";
import { Link } from "react-router-dom";

export function SignUp(props) {
    
     const formData = {
        tipo: 'Vendedor',
        nombre: '',
        apellido: '',
        correo: '',
        clave: '',
      }

      const [datos, setDatos] = useState(formData);
      


      const handleInputChange = (event) => {
             
             setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })    
      }
   
      const enviarDatos = (event) =>{
          
          event.preventDefault();
          window.location.href = "/PanelVentas";
          
          
           
      }


        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={enviarDatos} >
                <h3>Registro de Usuarios </h3>

                <div className="form-group">
                    <label>Tipo Usuario</label>
                    <select className="form-control" name="tipo" onChange={handleInputChange} required>
                        <option value="Vendedor" defaultValue> Vendedor </option>
                        <option value="Administrador"> Administrador </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" name="nombre"  onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Apellido" name="apellido" onChange={handleInputChange}  />
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Correo" name="correo"  onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Clave</label>
                    <input type="password" className="form-control" placeholder="Clave" name="clave"  onChange={handleInputChange} />
                </div>
                <br/>
                
                <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                <p className="forgot-password text-right">
                    Ya se encuentra  <Link to={`/log-in`} > registrado, acceder?</Link>
                </p>
            </form>
            </div>
            </div>
            
            );
        
    
}