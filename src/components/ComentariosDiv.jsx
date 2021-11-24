import React from 'react'
import '../assets/styles/components/Comenterios.css'

function ComentariosDiv({mensaje,usuarioId,fecha, nombre}) {



    
    return (
        <div className="col-12 m-2 contenedor">

            <div className="top d-flex justify-content-between">
            <p className="m-2 ">{usuarioId} - {nombre}</p>
            <p className="m-2 fw-lighter fw-lighter">{fecha}</p>
            </div>
            
            <p className="p-3">{mensaje}</p>

        </div>
    )
}

export default ComentariosDiv
