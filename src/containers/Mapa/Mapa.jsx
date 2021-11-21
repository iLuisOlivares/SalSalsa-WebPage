import React from "react";
import MapaComponent from "../../components/MapaComponent";
import "./Mapa.css";

/* 
  Container para mostrar el diseño de la página Mapa
*/

const servicios = [
  {
    id: 1,
    tittle: "Inicio",
    image:
      "https://res.cloudinary.com/iluiss/image/upload/v1637342558/Sal-Salsa/Mapa/jsq4dfb7hpcd7isfzn4t.png",
    link: "/",
  },

  {
    id: 2,
    tittle: "Nosotros",
    image:
      "https://res.cloudinary.com/iluiss/image/upload/v1637342558/Sal-Salsa/Mapa/bcmbnp4yvffj8qgxjgs2.png",
    link: "/nosotros",
  },

  {
    id: 3,
    tittle: "Menu",
    image:
      "https://res.cloudinary.com/iluiss/image/upload/v1637342559/Sal-Salsa/Mapa/aapjtwfw9aytbxvhmrik.png",
    link: "/carta",
  },

  {
    id: 4,
    tittle: "Servicios",
    image:
      "https://res.cloudinary.com/iluiss/image/upload/v1637342559/Sal-Salsa/Mapa/zjfpowmoqrerljfk8hav.png",
    link: "/servicios",
  },
  {
    id: 5,
    tittle: "Reservar",
    image:
      "https://res.cloudinary.com/iluiss/image/upload/v1637342558/Sal-Salsa/Mapa/xadribku7x65xidmyfnv.png",
    link: "/reserva",
  },

  {
    id: 6,
    tittle: "Contactanos",
    image:
      "https://res.cloudinary.com/iluiss/image/upload/v1637342558/Sal-Salsa/Mapa/pyhwaqb2nek37d2olikb.png",
    link: "/contactanos",
  },

  {
    id: 7,
    tittle: "Carrito",
    image:
      "https://res.cloudinary.com/iluiss/image/upload/v1637342558/Sal-Salsa/Mapa/wdrrxf689nm7zbqx5ixg.png",
    link: "/carrito",
  },
];

const Mapa = () => (
  <section className="mb-5 container">

    <div className="col-12 text-center p-5 p-lg-5 pb-lg-4 m-ms-1 p-ms-2">
      <h2 className="text fw-bold">Mapa del sitio</h2>
      <hr className="divider" />
    </div>

    <div className="container">
      <div className="row">
        {servicios.map((card) => (
          <div className="col-lg-3 col-md-6 col-sm-12 pt-2" key={card.id}>
            <MapaComponent
              tittle={card.tittle}
              img={card.image}
              link={card.link}
            ></MapaComponent>
          </div>
        ))}
      </div>
    </div>
    {/* 
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
    </section> */}
  </section>
);

export default Mapa;
