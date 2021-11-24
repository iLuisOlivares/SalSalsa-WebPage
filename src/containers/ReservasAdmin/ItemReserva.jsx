import React from 'react';
import "./reservasAdmin.css";

function ItemReserva({reservas, cambiarReservas, reservaId,reserva, tipo, cliente, clienteEmail, asunto ,fecha, numeroPersonas, estado }) {


    const info = "%0D%0A%0D%0A%20Id%20reserva:%20"+reservaId+"%0D%0A%0D%0A%20Tipo:%20"+tipo+"%0D%0A%0D%0A%20Cantidad:%20"+numeroPersonas+"%0D%0A%0D%0A%20Fecha:%20"+fecha;
    const mailAccept = "mailto:"+clienteEmail +"?cc=luissolivaresp@gmail.com&bcc=luissolivares14@gmail.com&subject=Aceptar%20Reserva%20-%20Sal%20y%20Salsa&body=Coordial%20saludo%20"+cliente+ "%0D%0A%0D%0ASu%20reserva%20ha%20sido%20aceptada!"+info;
    const mailCancel = "mailto:"+clienteEmail +"?cc=luissolivaresp@gmail.com&bcc=luissolivares14@gmail.com&subject=Rechazar%20Reserva%20-%20Sal%20y%20Salsa&body=Coordial%20saludo%20"+cliente+ "%0D%0A%0D%0ASu%20reserva%20ha%20sido%20rechazadab!"+info;
    
    const updateEstado = async(object,id)=>{

        const resp = await fetch("https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/estado/"+ id,{
            method: 'PUT',
            body: JSON.stringify(object),
            headers:{'Content-Type': 'application/json'}
            });

            return(resp.ok) ? 'Actualizado' : 'No Actualizado'
    }

    const onAccept = () =>{
 
        reserva.estado = "aceptado";
        updateEstado(reserva,reservaId);
        cambiarReservas([...reservas]);

    }

    const onReject = () =>{
        reserva.estado = 'rechazado';
        updateEstado(reserva,reservaId);
        cambiarReservas([...reservas]);

    }

    const onPendiente = () =>{
        reserva.estado = 'pendiente';
        updateEstado(reserva,reservaId);
        cambiarReservas([...reservas]);
    }


    

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
                <a href={mailAccept} target="_blank" rel="noopener noreferrer" onClick={()=>onAccept()} className="mintam btn btn-success">Aceptar</a>
                <a href={mailCancel} target="_blank" rel="noopener noreferrer" onClick={()=>onReject()}  className="mintam btn btn-danger">Rechazar</a>
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
                <button onClick={()=>{onPendiente()}} className="mintam text-light btn btn-info">Modificar</button>
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
