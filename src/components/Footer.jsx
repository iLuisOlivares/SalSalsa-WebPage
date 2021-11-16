import React from "react";
import "../assets/styles/components/Footer.css";
import { Link } from "react-router-dom";
/* 
  Componente del footer
*/

const Footer = () => {

  const style1 = {
    width: "60px",
    backgroundColor: "#ffffff",
    height: "2px"}

 
  
  return(
  <div class=" my-0">

  <footer 
          class="text-center text-lg-start text-white"
          style={{backgroundColor: "#212529"}}
          >
    <section
             class="d-flex justify-content-between "
             >

      

    </section>


    <section class="">
      <div class="container text-center text-md-start mt-5">

        <div class="row mt-3">
 
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">Sal&Salsa</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={style1}
                />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit,Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">Secciones</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={style1}
                />
            <p>
              <Link to="nosotros" class="text-white">Nosotros</Link>
            </p>
            <p>
              <Link to="carta" class="text-white">Menú</Link>
            </p>
            <p>
              <Link to="reserva" class="text-white">Reservar</Link>
            </p>
            <p>
              <Link to="mapa" class="text-white">Mapa</Link>
            </p>
          </div>



          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h6 class="text-uppercase fw-bold">Desarrolladores</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={style1}
                />
                <p class="textWhite parrafo">Robert Yarce Rincon</p>
                <p class="textWhite parrafo">Gregson Murcia Castro</p>
                <p class="textWhite parrafo">Luis Sebastian Olivares</p>
                <p class="textWhite parrafo">Kerwil</p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold">Ubicacion</h6>
          <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={style1}
                />
              <p></p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1258050551014!2d-75.57171838528315!3d6.247148095478077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442855eabbc4e9%3A0x29e5f9d50a8d96ba!2sEstaci%C3%B3n%20Metro%20San%20Antonio!5e0!3m2!1ses-419!2sco!4v1631889298286!5m2!1ses-419!2sco" class="mapa" style={{border:"0",width: "90%"}} allowfullscreen="" loading="lazy"></iframe>
                   
          </div>
        </div>
  
      </div>
    </section>


    <div class="text-center p-3">
        <a href="https://www.facebook.com/" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com/" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.Google.com/" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="https://www.Instagram.com/" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>

      </div>

    <div
         class="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      Copyright 2021 © Proyecto. Todos los derechos reservados.
    </div>

  </footer>


</div>
);
}

export default Footer;