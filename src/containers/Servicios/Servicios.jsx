import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import ComponenteServicio from '../../components/ComponenteServicio';

function Servicios () {
    return (

      <Fragment>
         <div className="container">
          <div className="col-12 text-center p-5 p-lg-5 pb-lg-4 m-ms-1 p-ms-2">
            <h2 className="text fw-bold">Servicios</h2>
            <hr className="divider" />
          </div>
        

        <div className="row pb-5">
              <div className="col-12 col-lg-12">

                <div className="row1 row col-12 fondo rounded m-2 bg-light shadow-lg p-3">
 
                  <div className="row p-3">
                        <div className="col-6 d-flex p-1 justify-content-end">
                          <a href="https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@'">

                        <button className="botones" > <i className="fab fa-whatsapp"></i> Contactanos: Via Whatsapp</button>
                          </a>
                        </div>
                        <div className="col-6 d-flex p-1 justify-content-start">
                        <Link to="reserva">
                        <button className="botones btn-dark"> <i className="fas fa-calendar-day"></i> Contactanos: Haz tu Reserva </button>
                        </Link>
                        </div>
                  </div>

                  <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Aniversario"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = 'https://res.cloudinary.com/iluiss/image/upload/v1637251609/Sal-Salsa/servicios%20/lfdfxg3933sraplv4kf1.jpg'
                  >
                  </ComponenteServicio>
                  </div>

                  <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Cumplea??os"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = 'https://res.cloudinary.com/iluiss/image/upload/v1637251608/Sal-Salsa/servicios%20/c3wor97idvhmxtlhvrrs.jpg'
                  >
                  </ComponenteServicio>
                  </div>

                  <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Fiestas Infantiles"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = 'https://res.cloudinary.com/iluiss/image/upload/v1637251609/Sal-Salsa/servicios%20/uj8sqc18vawecqqyxpcg.jpg'
                  >
                  </ComponenteServicio>
                  </div>

                  <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Declaraciones"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = 'https://res.cloudinary.com/iluiss/image/upload/v1637251608/Sal-Salsa/servicios%20/gi9n6qrhmike9iktgb35.jpg'
                  >
                  </ComponenteServicio>
                  </div>

                  <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Despedidas"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = 'https://res.cloudinary.com/iluiss/image/upload/v1637251608/Sal-Salsa/servicios%20/uqlj6uhr8fv58y8xpqmw.jpg'
                  >
                  </ComponenteServicio>
                    </div>

                  <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  nombre = "Cena de amigos"
                  leyenda = "Lorem ipsum dolor sit amet consect  dolor epsum adipisicing elit. Voluptatum, qui!"
                  imagen = 'https://res.cloudinary.com/iluiss/image/upload/v1637251609/Sal-Salsa/servicios%20/oaqnhv31tx7pyuwezy9m.jpg'
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