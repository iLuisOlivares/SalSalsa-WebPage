import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import ComponenteServicio from '../../components/ComponenteServicio';
import imagenes from '../../assets/Img/imagenes';

function Servicios () {
    return (

      <Fragment>
         <div class="container">
          <div class="col-12 text-center p-5 p-lg-5 pb-lg-4 m-ms-1 p-ms-2">
            <h2 class="text fw-bold">Servicios</h2>
            <hr class="divider" />
          </div>
        

        <div class="row pb-5">
              <div class="col-12 col-lg-12">

                <div class="row1 row col-12 fondo rounded m-2 bg-light shadow-lg p-3">
 
                  <div class="row p-3">
                        <div class="col-6 d-flex p-1 justify-content-end">
                          <a href="https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@'">

                        <button class="botones" role="button"> <i class="fab fa-whatsapp"></i> Contactanos: Via Whatsapp</button>
                          </a>
                        </div>
                        <div class="col-6 d-flex p-1 justify-content-start">
                        <Link to="reserva">
                        <button class="botones btn-dark" role="button"> <i class="fas fa-calendar-day"></i> Contactanos: Haz tu Reserva </button>
                        </Link>
                        </div>
                  </div>

                  <div class="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Aniversario"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = {imagenes.aniversario}
                  >
                  </ComponenteServicio>
                  </div>

                  <div class="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Cumpleaños"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = {imagenes.cumpleaños}
                  >
                  </ComponenteServicio>
                  </div>

                  <div class="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Fiestas Infantiles"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = {imagenes.fiesta}
                  >
                  </ComponenteServicio>
                  </div>

                  <div class="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Declaraciones"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = {imagenes.declaracion}
                  >
                  </ComponenteServicio>
                  </div>

                  <div class="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Despedidas"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = {imagenes.despedida}
                  >
                  </ComponenteServicio>
                    </div>

                  <div class="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Cena de amigos"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = {imagenes.amigos}
                  >
                  </ComponenteServicio>
                  </div>
                </div>
            </div>
          </div>


          </div>

      </Fragment>
    );

}

export default Servicios;