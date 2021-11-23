import React from 'react'


const styleUs = {
    width: "18rem"
}


function EmpleadoComponent({nombre,foto,descripcion,cargo}) {
    return (
        <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
        <div className="card col-4" style={styleUs}>
          <img src={foto} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-text d-flex justify-content-center">{nombre}</h3>
            <p className="card-text d-flex justify-content-center">{cargo}</p>
          </div>
        </div>
      </div>
    )
}

export default EmpleadoComponent
