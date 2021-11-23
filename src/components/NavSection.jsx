import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import LogoTipo from "../assets/Img/LogoTipo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../containers/Login/auth/useAuth";
// import "../assets/styles/components/Header.css";

export default function NavSection({ modalControl, isLittle, closeModal }) {
  const auth = useAuth();
  return (
    <Fragment>
      {isLittle === false ? (
        <Fragment>
          <section className="hamburger" onClick={() => modalControl()}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </section>
          <li>
            <a className="navbar-brand" href="/">
              <img className="logo" src={LogoTipo} alt="Logo" />
            </a>
          </li>

          <section className="nav-container">
            <ul className="nav-container-main-options">
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
                  <li className="nav-item">
                    <NavLink
                      className="select-items"
                      exact
                      to="/admin/Reservas"
                      activeclass="active"
                    >
                      Reservas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="select-items"
                      exact
                      to="/admin/Comentarios"
                      activeclass="active"
                    >
                      Comentarios
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
                <NavLink className="select-items" to="/mapa">
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
                <NavLink className="icono-1 select-item" to="/carrito">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </NavLink>
              </li>
            </ul>
          </section>
        </Fragment>
      ) : (
        <Fragment>
          <section className="">
            {/* <a className="" href="/">
              <img className="logo" src={LogoTipo} alt="Logo" />
            </a> */}

            <ul className="container-nav-little">
              <li className="">
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  exact
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  to="/nosotros"
                >
                  Nosotros
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  to="/carta"
                >
                  Menú
                </NavLink>
              </li>
              {auth.isLogged() && (
                <>
                  <li className="">
                    <NavLink
                      className="select-items"
                      onClick={() => closeModal(false)}
                      exact
                      to="/updateCarta"
                      activeclass="active"
                    >
                      Actualizar Menú
                    </NavLink>
                  </li>
                </>
              )}

              <li className="">
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  to="/servicios"
                >
                  Servicios
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  to="/reserva"
                >
                  Reservar
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  to="/contactanos"
                >
                  Contactanos
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  to="mapa"
                >
                  Mapa
                </NavLink>
              </li>

              <>
                {!auth.isLogged() && (
                  <>
                    <li className="">
                      <NavLink
                        className="select-items"
                        exact
                        onClick={() => closeModal(false)}
                        to="login"
                        activeclass="active"
                      >
                        Iniciar Sesión
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        className="select-items"
                        onClick={() => closeModal(false)}
                        exact
                        to="register"
                      >
                        Registrarse
                      </NavLink>
                    </li>
                  </>
                )}
              </>

              {auth.isLogged() && (
                <>
                  <button onClick={auth.logout}>Cerrar Sessión</button>
                </>
              )}
              <li className="">
                <NavLink
                  className="icono-1 select-item"
                  onClick={() => closeModal(false)}
                  to="carrito"
                >
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </NavLink>
              </li>
            </ul>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}
