import React from "react";
import { useState, useEffect } from "react";
import "./reservasAdmin.css";
import ItemReserva from "./ItemReserva";

function ReservasAdmin() {
  const [reservas, cambiarReservas] = useState([]);

  useEffect(() => {
    console.log("si");
    obtenerReservas();
  }, []);

  const obtenerReservas = async () => {
    const data = await fetch(
      "https://61955d6c74c1bd00176c6d13.mockapi.io/api/v1/comments"
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
                <div className="text-light px-2 py-2 d-flex  justify-content-around filtros">
                  <p className="m-0">Pendientes</p>
                  <p className="m-0">Aceptados</p>
                  <p className="m-0">Rechazados</p>
                </div>
                <div className="py-2 px-2 text-light">
                  <p className="m-0">Historial</p>
                </div>
              </div>

              <div className="body-r">
                <ItemReserva
                  reservaId="1"
                  tipo="Reunion"
                  cliente="cliente"
                  clienteEmail="cliente@email.com"
                  asunto="asunto"
                  fecha="21/12/2022 - 03:00"
                  numeroPersonas="2"
                  estado = "pendiente"
                ></ItemReserva>

                <ItemReserva
                  reservaId="2"
                  tipo="Reunion"
                  cliente="cliente"
                  clienteEmail="cliente@email.com"
                  asunto="asunto"
                  fecha="21/12/2022 - 03:00"
                  numeroPersonas="2"
                  estado ="rechazado"
                ></ItemReserva>
                

                <ItemReserva
                  reservaId="3"
                  tipo="Reunion"
                  cliente="cliente"
                  clienteEmail="cliente@email.com"
                  asunto="asunto"
                  fecha="21/12/2022 - 03:00"
                  numeroPersonas="2"
                ></ItemReserva>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservasAdmin;
