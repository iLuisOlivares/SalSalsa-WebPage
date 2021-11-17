import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../assets/static/img/img1.jpg";
// import img2 from "../../assets/static/img/img2.jpg";
// import img3 from "../../assets/static/img/img3.jpg";
// import img4 from "../../assets/static/img/img4.jpg";
// import img5 from "../../assets/static/img/img5.jpg";
// import img6 from "../../assets/static/img/img6.jpg";
import img7 from "../../assets/static/img/img7.jpg";
// import img8 from "../../assets/static/img/img8.jpg";
// import img9 from "../../assets/static/img/img9.jpg";
// import img10 from "../../assets/static/img/img10.jpg";
import img11 from "./../../assets/static/img/img11.jpg";
// import img12 from "../../assets/static/img/img12.jpg";
import img13 from "../../assets/static/img/img13.jpg";
import img14 from "../../assets/static/img/img14.png";

import slide1 from "../../assets/static/img/slide.jfif";
import slide2 from "../../assets/static/img/slide1.jfif";
import slide3 from "../../assets/static/img/slide3.jfif";

import Testimonio1 from "../../assets/static/img/personaUno.jpg";
import Testimonio2 from "../../assets/static/img/personaDos.jpg";
import Testimonio3 from "../../assets/static/img/personaTres.jpg";

import FeaturedPlato from "../../components/FeaturedPlato";
import Testimonio from "../../components/Testimonio";
import WhatComponent from "../../components/WhatComponent";
import ServicesComponent from "../../components/ServicesComponent";

import imagen1 from "../../assets/static/img/img11.jpg";
import imagen2 from "../../assets/static/img/img2.jpg";
import imagen3 from "../../assets/static/img/img4.jpg";

import imagenes from "../../assets/Img/imagenes";
/* 
  Container para mostrar el diseño de la página Home
*/

import Slider from "react-slick";

const items = [
  {
    id: 1,
    tittle: "Pizzas",
    image: imagen1,
  },

  {
    id: 2,
    tittle: "Hamburguesas",
    image: imagen2,
  },

  {
    id: 3,
    tittle: "Hot Dogs",
    image: imagen3,
  },
];

const servicios = [
  {
    id: 1,
    tittle: "Cumpleaños",
    image: imagenes.cumpleaños,
  },

  {
    id: 2,
    tittle: "Declaraciones",
    image: imagenes.declaracion,
  },

  {
    id: 3,
    tittle: "Aniversarios",
    image: imagenes.aniversario,
  },

  {
    id: 4,
    tittle: "Despedidas",
    image: imagenes.despedida,
  },
];

class Home extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      // autoplay: true,
      // autoplaySpeed: 3000,
    };
    return (
      <Fragment>
        <Slider {...settings} className="o-slider-container">
          <div className="o-container-slider-item">
            <section className="o-mensaje-slider">
              <h5>
                La pasión por lo que haces te hará entender que los límites son
                mentales.
              </h5>
              <h6>Anónimo</h6>
            </section>
            <img
              className="o-slide-inicio"
              src={slide3}
              alt="First slide"
              id="anchoImagenCaId"
            />
          </div>
          <div className="o-container-slider-item">
            <section className="o-mensaje-slider">
              <h5>La mejor forma de predecir tu futuro, es construirlo.</h5>
              <h6>Anónimo</h6>
            </section>
            <img
              className="o-slide-inicio"
              src={slide2}
              alt="First slide"
              id="anchoImagenCaId"
            />
          </div>
          <div className="o-container-slider-item">
            <section className="o-mensaje-slider">
              <h5>No por miedo a errar, vas a dejar de jugar.</h5>
              <h6>Alan Kay</h6>
            </section>
            <img
              className="o-slide-inicio"
              src={slide1}
              alt="First slide"
              id="anchoImagenCaId"
            />
          </div>
        </Slider>
        <section>
          {/* description information */}
          <div className="container o-description-container-text">
            <div className="container ">
              <h3 className="fw-bolder d-flex justify-content-center mt-5">
                Principales platos
              </h3>
              <h5 className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                beatae? Cumque laudantium reprehenderit iure quidem itaque rem a
                pariatur eveniet animi recusandae dignissimos iusto ullam,
                deserunt maxime enim mollitia atque.
              </h5>
            </div>

            <div className="container mt-5 ">
              <div className="row d-flex justify-content-around">
                {items.map((card) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 pt-2"
                    key={card.id}
                  >
                    <WhatComponent
                      tittle={card.tittle}
                      img={card.image}
                    ></WhatComponent>
                  </div>
                ))}
              </div>
            </div>
            {/* <img src={img7} className="o-img-info" />
            <img src={img11} className="o-img-info" />
            <img src={img14} className="o-img-info" /> */}
          </div>
        </section>

        <section className="section_3">
          <div className="containerL">
            <div className="text-light box-text ">
              <h2 className=" fw-bolder text-start m-3">
                Conoce Nuestra Pizza Premium
              </h2>
              <p className="fst-italic pt-4 m-3">
                Ven a disfrutar de la mejor comida escuchando la mejor musica en
                vivo de la ciudad
              </p>
              <a href="/nosotros"><button className="btn btn-l m-3">Conócenos</button></a>
            </div>
          </div>
        </section>

        <section className="section_4">
          <div className="container">
            <div className="row p-5 d-flex justify-content-center ">
              <h2 className="text-light mt-5 d-flex justify-content-center  ">
                Ven a celebrar con{" "}
              </h2>
              <h3
                className=" mb-5 d-flex justify-content-center "
                style={{ color: "#a12017" }}
              >
                {" "}
                NOSOTROS{" "}
              </h3>
              {servicios.map((card) => (
                <div className="col-lg-3 col-md-6 col-sm-12 pt-2" key={card.id}>
                  <ServicesComponent
                    tittle={card.tittle}
                    img={card.image}
                  ></ServicesComponent>
                </div>
              ))}

              <div className="mt-5 d-flex justify-content-center">

              <a href="/reserva">
              <button className=" btn-l2 ">Haz tu reserva</button>
              </a>
              </div>
            </div>





          </div>
        </section>

        <section className="container mb-5">
          <h4 className="o-testimonio-title" style={{ color: "#a12017" }}>
            Testimonios
          </h4>

          <div className="row">
            <div className="col-12">
              <div className="card mb-3 o-testimonio-fix">
                <Testimonio img={Testimonio1} name="Juan Pablo" />
              </div>
              {/* <div className=" card mb-3 o-testimonio-fix">
          <Testimonio img={Testimonio2} name="Violeta Salazar" />
          </div>
          <div className="card mb-3 o-testimonio-fix">
          <Testimonio img={Testimonio3} name="Daniel Alexander" />
          </div> */}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
