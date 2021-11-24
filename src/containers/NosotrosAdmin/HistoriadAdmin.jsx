import React from 'react'
import { useState } from 'react'
import "./styleNosotros.css"

function HistoriadAdmin({nombre,foto,descripcion,historia}) {


    return (
        <div className="fondo card mb-3 p-3 bg" style={{maxWidth: "1800px", minHeight: "500px"}}>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={foto} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-lg-6 rounded-3">
            <div className="card-body rounded-3 fondo">
              <textarea  name="nombre" defaultValue= {nombre} className="textitulos text-dark  card-title text-light pb-4" />
              <textarea  name="historia" defaultValue= {historia} className="textareas text-dark  card-text text-light fs-5"/>
            </div>
            <div className="card-body rounded-3 fondo">
              <h3 className="text-dark  card-title text-light pb-3"> <b className="msg__in">¿Quienes somos?</b></h3>
              <textarea  name="descripcion" defaultValue = {descripcion} className="textareas text-dark  card-text text-light fs-5"/>
            </div>
          </div>

        </div>
        <div className="d-flex justify-content-end">
        <button className="text-light btn btn-info ">Actualizar</button>

        </div>
      </div>
    )
}

export default HistoriadAdmin
