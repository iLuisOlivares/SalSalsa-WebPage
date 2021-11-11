import React, { Fragment } from "react";
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

import slide1 from "../../assets/static/img/fotoCar1.png";
import slide2 from "../../assets/static/img/fotoCa.png";
import slide3 from "../../assets/static/img/fotoDescripcionDos.png";

import Testimonio1 from "../../assets/static/img/personaUno.jpg";
import Testimonio2 from "../../assets/static/img/personaDos.jpg";
import Testimonio3 from "../../assets/static/img/personaTres.jpg";

import FeaturedPlato from "./../../components/FeaturedPlato";
import Testimonio from "./../../components/Testimonio";
/* 
  Container para mostrar el diseño de la página Home
*/

import Slider from "react-slick";

class Home extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
              src={slide1}
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
              src={slide3}
              alt="First slide"
              id="anchoImagenCaId"
            />
          </div>
        </Slider>
        <section>
          {/* description information */}
          <section className="o-description-container-text">
            <h3>¿Qué puedes encontrar?</h3>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              beatae? Cumque laudantium reprehenderit iure quidem itaque rem a
              pariatur eveniet animi recusandae dignissimos iusto ullam,
              deserunt maxime enim mollitia atque.
            </h5>
          </section>
          {/* images information */}
          <section className="o-description-container-img">
            <img src={img1} className="o-img-info" />
            <img src={img7} className="o-img-info" />
            <img src={img11} className="o-img-info" />
            <img src={img14} className="o-img-info" />
          </section>

          <section className="o-description-tf">
            <h4 className="o-description-title-featured">Platos destacados</h4>
            <section className="o-description-container-featured">
              <FeaturedPlato
                img={img1}
                title="Combo 1 hamburguesa"
                description="Combo de hamburguesa, con papas y refresco"
              />
              <FeaturedPlato
                img={img7}
                title="Papas sencillas"
                description="Papas a la francesa sencilla"
              />
              <FeaturedPlato
                img={img11}
                title="Pizza Italiana"
                description="Pizza Italiana de 8 porciones."
              />
            </section>
          </section>
        </section>
        <section className="container-testimonio">
          <h4 className="o-testimonio-title">Testimonios</h4>
          <Testimonio img={Testimonio1} name="Juan Pablo" />
          <Testimonio img={Testimonio2} name="Violeta Salazar" />
          <Testimonio img={Testimonio3} name="Daniel Alexander" />
        </section>
      </Fragment>
    );
  }
}

export default Home;
