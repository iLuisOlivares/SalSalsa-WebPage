import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/components/Header.css";
import img from "../assets/Img/logo@2x.png";
import "../assets/styles/components/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../containers/Login/auth/useAuth";

/* 
  Componente del header
*/

const Header = () => {

  const auth = useAuth();
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
                <NavLink className="select-items" exact to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="select-items" to="/nosotros">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="select-items" to="/carta">
                  Menú
                </NavLink>
              </li>
              {auth.isLogged() &&(
                <>
                  <li className="nav-item">
                    <NavLink className="select-items" exact to="/updateCarta" activeClass="active">
                      Actualizar Menú
                    </NavLink>
                  </li>
                </>

              )}

              <li className="nav-item">
                <NavLink className="select-items" to="/servicios">
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="select-items" to="/reserva">
                  Reservar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="select-items" to="/contactanos">
                  Contactanos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="select-items" to="mapa">
                  Mapa
                </NavLink>
              </li>

              <div className="d-flex px-5">  
                {!auth.isLogged() && (
                  <><li className="nav-item">
                    <NavLink className="select-items" exact to="login" activeClass="active">
                      Iniciar Sesión
                    </NavLink>
                  </li><li className="nav-item">
                      <NavLink className="select-items" exact to="register">
                        Registrarse
                      </NavLink>
                    </li></>
                )}
              </div>

              {auth.isLogged() &&(
                <>
                <button onClick={auth.logout}>Cerrar Sessión</button>
                </>
              )}


            </ul>
            <ul className="navbar-nav p-3">
              <li className="nav-item">
                <NavLink className="icono-1 select-item" to="carrito">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
