import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/components/Header.css";
import LogoTipo from "../assets/Img/LogoTipo.png";
import "../assets/styles/components/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../containers/Login/auth/useAuth";

/* 
  Componente del header
*/

const Header = () => {
  const auth = useAuth();

  function sePresiono() {
    // alert("Funciona");
    // debugger;
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  }

  return (
    <header className="header">
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-lg  py-1"
        id="mainNav"
      >
        <div className="hamburger" onClick={() => sePresiono()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <section className="nav-container">
          <ul className="nav-container-main-options">
            <a className="navbar-brand" href="/">
              <img className="logo" src={LogoTipo} alt="Logo" />
            </a>

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
            {auth.isLogged() && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="select-items"
                    exact
                    to="/updateCarta"
                    activeclass="active"
                  >
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

            <div className="d-flex px-6">
              {!auth.isLogged() && (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="select-items"
                      exact
                      to="login"
                      activeclass="active"
                    >
                      Iniciar Sesión
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="select-items" exact to="register">
                      Registrarse
                    </NavLink>
                  </li>
                </>
              )}
            </div>

            {auth.isLogged() && (
              <>
                <button onClick={auth.logout}>Cerrar Sessión</button>
              </>
            )}
          </ul>
          <ul>
            <li className="nav-item">
              <NavLink className="icono-1 select-item" to="carrito">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </NavLink>
            </li>
          </ul>
        </section>

        {/* <div className="container px-4 px-lg-0">
          
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

            </ul>

          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
