import React, { Fragment } from "react";
import "./Carta.css";
import ItemPlato from "../../components/ItemPlato";

/* 
  Container para mostrar el diseño de la página Carta
*/
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/static/img/img1.jpg";
import img2 from "../../assets/static/img/img2.jpg";
import img3 from "../../assets/static/img/img3.jpg";
import img4 from "../../assets/static/img/img4.jpg";
import img5 from "../../assets/static/img/img5.jpg";
import img6 from "../../assets/static/img/img6.jpg";
import img7 from "../../assets/static/img/img7.jpg";
import img8 from "../../assets/static/img/img8.jpg";
import img9 from "../../assets/static/img/img9.jpg";
import img10 from "../../assets/static/img/img10.jpg";
import img11 from "../../assets/static/img/img11.jpg";
import img12 from "../../assets/static/img/img12.jpg";
import img13 from "../../assets/static/img/img13.jpg";
import img14 from "../../assets/static/img/img14.png";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

var Carousel = require("react-responsive-carousel").Carousel;

class Carta extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
    };
    // var elements = document.getElementsByClassName("slick-active");

    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].addEventListener("click", myFunction, false);
    // }

    // var myFunction = function () {
    //   var attribute = this.getAttribute("data-myattribute");
    //   alert("attribute");
    // };



    return (
      <Fragment>
        {/* Main content */}
        <main className="main-carta">
          {/* Título del container  */}
          <h2 className="o-title-menu">El menú</h2>

          {/* El container del menú */}
          <div className="container">
            {/* Carrosel items */}
            <div>
              <Slider {...settings}>
                <div className="row row-cols-md-3 g-4 o-fix-column">
                  <ItemPlato
                    tituloPlato="Combo 1 hamburguesa"
                    descripcionPlato="Combo de hamburguesa, con papas y refresco."
                    imgPlato={img1}
                    idPlato={1}
                    
                  />
                  <ItemPlato
                    tituloPlato="Combo 2 hamburguesa"
                    descripcionPlato="Combo de hamburguesa, papas y sin refresco."
                    imgPlato={img2}
                    idPlato={2}
                    
                  />
                  <ItemPlato
                    tituloPlato="Hamburguesa sencilla"
                    descripcionPlato="Hamburguesa con carne, tomate y vegetales."
                    imgPlato={img3}
                    idPlato={3}
                    
                  />
                  <ItemPlato
                    tituloPlato="Combo Hot Dog"
                    descripcionPlato="Combo 1 de Hot dog y papas."
                    imgPlato={img4}
                    idPlato={4}
                    
                  />
                  <ItemPlato
                    tituloPlato="Hot Dog Sencillo"
                    descripcionPlato="Hot dog sencillo con salsa."
                    imgPlato={img5}
                    idPlato={5}
                    
                  />
                  <ItemPlato
                    tituloPlato="Copa de papas sencillo"
                    descripcionPlato="Copa de papas con guacamole."
                    imgPlato={img6}
                    idPlato={6}
                    
                  />
                  <ItemPlato
                    tituloPlato="Papas sencillas"
                    descripcionPlato="Papas a la francesa sencilla."
                    imgPlato={img7}
                    idPlato={7}
                    
                  />
                  <ItemPlato
                    tituloPlato="2 Latas de Coca Cola"
                    descripcionPlato="Latas de Coca Cola, con limón y hielo."
                    imgPlato={img8}
                    idPlato={8}
                    
                  />
                  <ItemPlato
                    tituloPlato="Jarra con limonada"
                    descripcionPlato="Jarra con limonada de 1/2 litro."
                    imgPlato={img9}
                    idPlato={9}
                    
                  />
                  <ItemPlato
                    tituloPlato="Jarra de agua"
                    descripcionPlato="Jarra de agua de 1/2 litro"
                    imgPlato={img10}
                    idPlato={10}
                    
                  />
                  <ItemPlato
                    tituloPlato="Pizza de Italiana"
                    descripcionPlato="Pizza Italiana con 8 porciones."
                    imgPlato={img11}
                    idPlato={11}
                    
                  />
                  <ItemPlato
                    tituloPlato="Pizza personal Italiana"
                    descripcionPlato="Pizza Italiana para 1 persona."
                    imgPlato={img12}
                    idPlato={12}
                    
                  />
                </div>

                {/* close */}
                <div className="row row-cols-md-3 g-4 o-fix-column-2">
                  <ItemPlato
                    tituloPlato="Copa de helado"
                    descripcionPlato="Copa de helado de 1 sabor con uvas."
                    imgPlato={img13}
                    idPlato={13}
                    
                  />
                  <ItemPlato
                    tituloPlato="Cono de helado"
                    descripcionPlato="ono de helado con 2 bolas de diferentes sabores."
                    imgPlato={img14}
                    idPlato={14}
                    
                  />
                </div>
              </Slider>
            </div>
          </div>
        </main>

        {/* Link to download the menu  */}
        <div className="o-menu-doc">
          <a href="./assets/doc/Menu_Completo.pdf" download="menu">
            Descarga el Menú completo aquí
          </a>
        </div>

        {/* The Modal  */}
        <div id="myModal" className="modal">
          {/* Modal content */}
          <div className="modal-content">
            <span className="close">&times;</span>
            <h1 id="o-value-plato-titulo">Título del plato</h1>
            <span id="o-value-plato">num</span>
            <p id="o-value-plato-descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              aspernatur excepturi error temporibus odit, quod alias fuga.
              Corporis ipsa veniam qui ipsam rem atque voluptate nihil vero?
              Libero, illo totam.
            </p>
            <div className="d-flex justify-content-center">
              <div
                id="o-value-plato-image"
                className="img-thumbnail rounded o-img-modal-container"
                style={{ width: 720 }}
              ></div>
            </div>
            <div className="o-information-cost">
              {/* Precio */}
              <p>Precio</p>
              <span id="o-value-plato-price">Error</span>
              <section className="o-style-btn-add-carrito">
                {/* Open whatsapp to send a message */}
                <button
                  type="button"
                  className="botones"
                  onclick={
                    "location.href='https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@'"
                  }
                >
                  Ver contacto
                </button>
                <button id="btn__agregar" type="button" className="botones">
                  Agregar al carrito <i className="fas fa-shopping-cart" />
                </button>
                <input
                  type="number"
                  id="id_cantidad"
                  className="shoppingImput"
                  value={1}
                  className="o-input-carta"
                  min={1}
                />
              </section>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Carta;
