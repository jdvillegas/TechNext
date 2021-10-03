import React, { Component } from "react";


function ProductRegistration(props) {
   
        return (
            <form>
                <h3>Registro de productos</h3>
                <div class="mb-3">
                    <label for="InputNombre" class="form-label">Nombre del producto</label>
                    <input type="text" class="form-control" id="InputNombre"/>
                    
                </div>
                <div class="mb-3">
                    <label for="FormControlTextarea1" class="form-label">Descripción</label>
                    <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="InputCodigo" class="form-label">Codigo</label>
                    <input type="number" class="form-control" id="InputCodigo"/>
                </div>
                <div class="mb-3">
                    <label for="InputValor" class="form-label">Valor unitario</label>
                    <input type="number" class="form-control" id="InputValor" />
                </div>
                <label for="DataList" class="form-label">Estado</label>
                <input class="form-control" list="datalistOptions" id="DataList" placeholder="Type to search..."/>
                <datalist id="datalistOptions">
                    <option value="Disponible"/>
                    <option value="No disponible"/>     
                </datalist> 
                <br />
                <button type="button" class="btn btn-primary">Guardar</button>
                
            </form>
            
           
        );
    
}