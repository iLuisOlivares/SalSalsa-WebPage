import React from "react";
import { useState, useEffect } from "react";
import "./reservasAdmin.css";
import ItemReserva from "./ItemReserva";




function ReservasAdmin() {


  const [reservas, cambiarReservas] = useState([]);
  const [term, setTerm] = useState("pendiente");
  const [term2, setTerm2] = useState("");
  const [term3, setTerm3] = useState("");
  

  useEffect(() => {
    obtenerReservas();

  }, []);

  useEffect(() => {
    console.log("si");
  }, [reservas]);
  



  const obtenerReservas = async () => {
    const data = await fetch(
      "https://61955d6c74c1bd00176c6d13.mockapi.io/api/v1/Reservas"
    );
    const resp = await data.json();
    console.log(resp);
    cambiarReservas(resp);
  };


 



  return (
    <div className="m-3">
      <div className="container">
        <div style={{ minHeight: "200px" }} className="row">
          <div className="col-12">
            <div className="">
              <div className="nav-r">
                <div className="text-light px-2 py-2 d-flex  justify-content-between filtros">
                  <select  onChange = {e => setTerm(e.target.value)} className="mintam form-select form-select-sm" name="select" id="1">
                  <option defaultValue>Pendiente</option>
                    <option >Aceptado</option>
                    <option >Rechazado</option>

                  </select>
                </div>
                <div className="py-2 px-2 text-light">
                  <input style={{width: "100px"}} className="m-1" onChange = {e => setTerm2(e.target.value)} placeholder = "Id"type="text" />
                  <input style={{width: "100px"}} className="m-1" onChange = {e => setTerm3(e.target.value)} placeholder = "Fecha"type="text" />

                </div>
              </div>

              <div className="body-r">
                {
                  reservas.filter( (e) => e.estado.includes(term.toLowerCase())  || !term).filter((e) => e.id.includes(term2)  || !term2).filter((e) => e.fecha.includes(term3)  || !term3).map((reser)=>(
                    <ItemReserva
                      key = {reser.id}
                      reservaId={reser.id}
                      tipo={reser.tipo}
                      cliente={reser.name}
                      clienteEmail={reser.email}
                      asunto={reser.asunto}
                      fecha={reser.fecha}
                      numeroPersonas={reser.cantidad}
                      estado = {reser.estado}
                      reserva = {reser}
                      reservas = {reservas}
                      cambiarReservas = {cambiarReservas}
                    ></ItemReserva>


                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservasAdmin;
