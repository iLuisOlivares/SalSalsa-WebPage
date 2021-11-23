import React from "react";
import { Fragment, useState, useEffect } from "react";
import HistoriaComponent from "./HistoriaComponent";
import EmpleadoComponent from "./EmpleadoComponent";
import SlideComponent from "./SlideComponent";

function Nosotros() {
  const [empleados, setEmpleados] = useState([]);
  const [restaurante, setRestaurante] = useState([]);

  useEffect(() => {
    obtenerEmpleados();
    obtenerRestaurante(1);
  }, []);

  const obtenerEmpleados = async () => {
    const data = await fetch(
      "https://61955d6c74c1bd00176c6d13.mockapi.io/api/v1/Empleado"
    );
    const resp = await data.json();
    console.log(resp);
    setEmpleados(resp);
  };

  const obtenerRestaurante = async (id) => {
    const data = await fetch(
      "https://61955d6c74c1bd00176c6d13.mockapi.io/api/v1/Restaurante/" + id
    );
    const resp = await data.json();
    console.log(resp);
    setRestaurante(resp);
  };

  return (
    <Fragment>
      <section className="page-section">
        {/* Contenedor */}
        <div className="container rounded-3 bg-dark pb-4">
          {/* <!-- Primera parte -->  */}
          <div className="row p-3  mt-5 rounded d-flex justify-content-end ">
            <div className="col-12 col-lg-6 text-end p-3 p-ms-2 fondo rounded rounded-pill">
              <h2 className="text-light">
                Nuestra <b style={{ color: "rgb(191 38 38)" }}>Historia </b>{" "}
              </h2>
            </div>
          </div>

          {/* <!-- Card Historia -->  */}

          {
            <HistoriaComponent
              foto={restaurante.imagen}
              nombre={restaurante.nombre}
              descripcion={restaurante.descripcion}
              historia={restaurante.historia}
            ></HistoriaComponent>
          }
        </div>
      </section>

      {/* <!-- Personal -->  */}
      <section className="page-section" id="personal">
        {/* <!-- contenedor -->  */}
        <div className="container">
          <div className="col-12 text-center p-5 p-lg-5 m-ms-1 p-ms-2">
            <h2 className="text">Personal</h2>
            <hr className="divider" />
          </div>

          {/* <!-- row principal -->  */}
          <div className="row pb-5">
            <div className="col-12 col-lg-12">
              {/* <!-- sub-row1 -->  */}
              <div className="row1 row cok-12 bg-dark rounded m-lg-2 m-0 m-md-1">
                {empleados.map((item) => (
                  <EmpleadoComponent
                    key={item.id}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    foto={item.imagen}
                    cargo={item.cargo}
                  ></EmpleadoComponent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials -->  */}
      <section
        style={{ maxWidth: "1000px" }}
        className="container page-section"
        id="Testimonials"
      >
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SlideComponent></SlideComponent>
            <SlideComponent></SlideComponent>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </Fragment>
  );
}

export default Nosotros;
