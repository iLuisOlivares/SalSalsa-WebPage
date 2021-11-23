import React from 'react'

function HistoriaComponent({nombre,foto,descripcion,historia}) {
    return (
        <div className="fondo card mb-3 p-3 bg" style={{maxWidth: "1800px", minHeight: "500px"}}>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={foto} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-lg-6 rounded-3">
            <div className="card-body rounded-3 fondo">
              <h3 className="text-dark  card-title text-light pb-4"> <b className="msg__in">{nombre}</b></h3>
              <p className="text-dark  card-text text-light fs-5">{historia}</p>
            </div>
            <div className="card-body rounded-3 fondo">
              <h3 className="text-dark  card-title text-light pb-3"> <b className="msg__in">¡Quienes somos?</b></h3>
              <p className="text-dark  card-text text-light fs-5">{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HistoriaComponent
