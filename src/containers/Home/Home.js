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
/* 
  Container para mostrar el diseño de la página Home
*/

const Home = () => (
  <Fragment>
    <section className="seccionGeneralCarusel">
      <div className="contenedorGeneralCarrusel">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active anchoImagenCa"
              data-bs-interval="10000"
            >
              <img
                className="d-block w-100 anchoImagenCa"
                src={slide1}
                alt="First slide"
                id="anchoImagenCaId"
              />
              <div className="carousel-caption d-none d-md-block textCarrucel">
                <h5 className="textWhite anuncioCarucel">
                  La pasión por lo que haces te hará entender que los límites
                  son mentales.
                </h5>
                <p className="textWhite anuncioCarucel ">Anónimo </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="15000">
              <img
                className="d-block w-100 anchoImagenCa"
                src={slide2}
                alt="First slide"
                id="anchoImagenCaId"
              />
              <div className="carousel-caption d-none d-md-block textCarrucel">
                <h5 className="textWhite anuncioCarucel">
                  La mejor forma de predecir tu futuro, es construirlo.
                </h5>
                <p className="textWhite anuncioCarucel ">Alan Kay</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 anchoImagenCa"
                src={slide3}
                alt="First slide"
                id="anchoImagenCaId"
              />
              <div className="carousel-caption d-none d-md-block textCarrucel">
                <h5 className="textWhite anuncioCarucel ">
                  No por miedo a errar, vas a dejar de jugar.
                </h5>
                <p className="textWhite anuncioCarucel ">Anónimo </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Atras</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>

    <section className="" id="">
      <div className="contendor">
        <img
          className="d-block w-100"
          src="img/fotodescripcionDos.png"
          alt="First slide"
          className=""
          id=""
        />

        <section className="o-text-info">
          {/* <p className="textoEncima  textWhite ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
                    ducimus consectetur perspiciatis veniam odit facilis laborum aperiam. Laborum, possimus. Quasi culpa
                    laborum deleniti doloremque qui autem maxime labore asperiores ut.</p>  */}

          <p className="textoAbajo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            beatae? Cumque laudantium reprehenderit iure quidem itaque rem a
            pariatur eveniet animi recusandae dignissimos iusto ullam, deserunt
            maxime enim mollitia atque.{" "}
          </p>

          {/* <div className="centrado"></div> */}
        </section>
      </div>
    </section>

    <section className="seccionGeneralDos colorSeccionDos">
      {/* <br><br><br> */}
      <div className="contenedorGeneral">
        <h2 className="textCenter textWhite">Un poco de lo que hay</h2>
        <div className="">
          <p className="textWhite">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            obcaecati id explicabo tempora debitis doloremque voluptatum
            veritatis recusandae ratione in necessitatibus consequuntur eum
            excepturi nesciunt, facilis commodi. Ut, magnam earum?
          </p>
          {/* <br> */}
          <div className="columna2Dos padd">
            <label className="labelRegular textWhite">
              Para compartir en familia
            </label>
            <img className="o-style-uno" src={img11} id="" />

            <label className="labelRegular textWhite">Mas crocantes</label>
            <img className="o-style-uno" src={img7} id="" />
          </div>
          <div className="columna2Dos padd ">
            <label className="labelRegular textWhite">Nuevos combos:</label>
            <img className="o-style-uno" src={img1} id="" />

            <label className="labelRegular textWhite">Nuevos gustos</label>
            <img className="o-style-uno" src={img14} id="" />
          </div>

          <div className="columna2Dos">
            <label className="labelRegular textWhite">Mas sabores</label>
            <img className="o-style-dos" src={img13} id="" />
          </div>
        </div>
      </div>
    </section>

    {/*      <section className="seccionGeneral">
      <div className="contenedorGeneral">
        <h2 className="textCenter">Platos destacados</h2>
        <div className="testimonios ">
          <div className="contenedorPlatos textoTestimonios">
 
            <form action="carta.php">

              <div className="platos">
                <div className="imagenPlatos bg-img1"></div>
                <h2 className="subtitulo-servicios">Plato #1</h2>
                <p className="parrafo-regular text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <button className="botonRegular botonCentrado">Comprar</button>
              </div>
              <div className="platos">
                <div className="imagenPlatos bg-img2"></div>
                <h2 className="subtitulo-servicios">Plato #2</h2>
                <p className="parrafo-regular text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <button className="botonRegular botonCentrado">Comprar</button>
              </div>
              <div className="platos">
                <div className="imagenPlatos bg-img3"></div>
                <h2 className="subtitulo-servicios">Plato #2</h2>
                <p className="parrafo-regular text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <button className="botonRegular botonCentrado"> Comprar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> */}

    {/* <section className="seccionGeneral colorSeccionDos">
      <div className="contenedorGeneral">
        <h2 className="textCenter textWhite">Testimonios</h2>
        <div className="testimonios ">
          <div className="testimoniosDos textoTestimonios">
            <div className="card mb-3 o-fix-style-home">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="./img/personaTresE.jpg"
                    className="img-fluid rounded-start"
                    alt="Testimonio1"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Anónimo</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Distinctio error sed dolorem nihil, obcaecati nesciunt!
                      Animi, cumque? Quos dicta dolores minus distinctio
                      adipisci cum at aperiam maiores cumque, ratione sapiente?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="./img/personaUno.jpg"
                    className="img-fluid rounded-start"
                    alt="Testimonio2"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Anónimo</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Distinctio error sed dolorem nihil, obcaecati nesciunt!
                      Animi, cumque? Quos dicta dolores minus distinctio
                      adipisci cum at aperiam maiores cumque, ratione sapiente?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 o-style-tres">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="./img/personaDos.jpg"
                    className="img-fluid rounded-start"
                    alt="Testimonio3"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Anónimo</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Distinctio error sed dolorem nihil, obcaecati nesciunt!
                      Animi, cumque? Quos dicta dolores minus distinctio
                      adipisci cum at aperiam maiores cumque, ratione sapiente?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </Fragment>
);

export default Home;
