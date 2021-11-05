import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/Img/logo@2x.png";
import "../assets/styles/components/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

/* 
  Componente del header
*/
const Header = () => {
  return (
    <header className="header">
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-lg  py-1"
        id="mainNav"
      >
        <div className="container px-4 px-lg-0">
          <a className="navbar-brand">
            <img className="logo" src={img} />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link className="select-items" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="select-items" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="select-items" to="/carta">
                  Menú
                </Link>
              </li>
              <li className="nav-item">
                <Link className="select-items" to="/servicios">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="select-items" to="/reserva">
                  Reservar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="select-items" to="mapa">
                  Mapa
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav p-3">
              <li className="nav-item">
                <Link className="icono-1 select-items" to="carrito">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
