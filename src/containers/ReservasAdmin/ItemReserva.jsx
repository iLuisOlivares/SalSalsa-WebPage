import React from 'react';
import "./reservasAdmin.css";

function ItemReserva({reservaId, tipo, cliente, clienteEmail, asunto ,fecha, numeroPersonas, estado }) {
    
    const mail = "mailto:" + {clienteEmail};
    





    if(estado === "pendiente"){

        return (
    
            <div style = {{backgroundColor: "rgba(28, 27, 29, 0.836)"}}className="conte text-light">
    
            <div className="d-flex justify-content-around">
            <p className="m-2 ">ID: {reservaId}</p>
            <p className="m-2 ">tipo: {tipo}</p>
            <p className="m-2 ">Cliente: {cliente}</p>
            <p className="m-2 ">Cantidad personas: {numeroPersonas}</p>
            <p className="m-2 ">Email: {clienteEmail}</p>
            <p className="m-2 fw-lighter fw-lighter">{fecha}</p>
            </div>
            
            <div style={{backgroundColor:"#f1eded"}} className="conteiner text-dark d-flex justify-content-around">
    
            <p className="m-0 p-3">Asunto: {asunto}</p>
    
            <div className="p-3 container-botones d-flex justify-content-around ">
                <a href={mail} className="mintam btn btn-success">Aceptar</a>
                <button className="mintam btn btn-danger">Rechazar</button>
            </div>
    
            </div>
    
        </div>
    
        )

    }else if(estado === "aceptado" || estado ===  "rechazado"){
        return  (
    
            <div style = {{backgroundColor: "rgba(28, 27, 29, 0.836)"}}className="conte text-light">
    
            <div className="d-flex justify-content-around">
            <p className="m-2 ">ID: {reservaId}</p>
            <p className="m-2 ">tipo: {tipo}</p>
            <p className="m-2 ">Cliente: {cliente}</p>
            <p className="m-2 ">Cantidad personas: {numeroPersonas}</p>
            <p className="m-2 ">Email: {clienteEmail}</p>
            <p className="m-2 fw-lighter fw-lighter">{fecha}</p>
            </div>
            
            <div style={{backgroundColor:"#f1eded"}} className="conteiner text-dark d-flex justify-content-around">
    
            <p className="m-0 p-3">Asunto: {asunto}</p>
    
            <div className="p-3 container-botones d-flex justify-content-around ">
                <button className="mintam text-light btn btn-info">Modificar</button>
            </div>
    
            </div>
    
        </div>
    
        )
    }else{
        return (
    
            <div style = {{backgroundColor: "rgba(28, 27, 29, 0.836)"}}className="conte text-light">
    
            <div className="d-flex justify-content-around">
            <p className="m-2 ">ID: {reservaId}</p>
            <p className="m-2 ">tipo: {tipo}</p>
            <p className="m-2 ">Cliente: {cliente}</p>
            <p className="m-2 ">Cantidad personas: {numeroPersonas}</p>
            <p className="m-2 ">Email: {clienteEmail}</p>
            <p className="m-2 fw-lighter fw-lighter">{fecha}</p>
            </div>
            
            <div style={{backgroundColor:"#f1eded"}} className="conteiner text-dark d-flex justify-content-around">
    
            <p className="m-0 p-3">Asunto: {asunto}</p>
    
        
    
            </div>
    
        </div>
        )

    }

}

export default ItemReserva
