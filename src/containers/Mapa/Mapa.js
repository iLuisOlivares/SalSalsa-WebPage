import React from "react";
import { Link } from "react-router-dom";
import "./Mapa.css";

/* 
  Container para mostrar el diseño de la página Mapa
*/

const Mapa = () => (
  <section className="o-mapa-container">
    <h1>Mapa del Sitio</h1>

    <section className="o-mapa-content">
      <ul className="o-mapa-list">
        <li>
          <Link className="o-mapa-item select-color" to="/">
            <b>Inicio</b>
          </Link>
        </li>
        <li>
          <Link className="o-mapa-item select-color" to="/nosotros">
            <b>Nosotros</b>
          </Link>
        </li>
        <li>
          <Link className="o-mapa-item select-color" to="/carta">
            <b>Menú</b>
          </Link>
        </li>
        <li>
          <Link className="o-mapa-item select-color" to="/servicios">
            <b>Servicos</b>
          </Link>
        </li>
        <li>
          <Link className="o-mapa-item select-color" to="/reserva">
            <b>Contáctanos</b>
          </Link>
        </li>
      </ul>
    </section>
  </section>
);

export default Mapa;
