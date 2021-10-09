import { React, Table}  from "react-bootstrap";

export function ListarUsuarios(props) {
  
        return (
            

            <div class="container-inner p-3 my-3 border">
            <br/>
            <br/>
            <h1>Listado de Usuarios</h1>
            <br/>
            <div>
                <button> + </button>
            </div>
            <br/>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Vendedor</td>
                    <td>
                        Eliminar, Editar
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Vendedor</td>
                    <td><i class="bi bi-trash"></i></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Administrador</td>
                    <td><i class="bi bi-trash"></i></td>
                    </tr>
                  
                </tbody>
                </Table>

            </div>

            
        );
    
}