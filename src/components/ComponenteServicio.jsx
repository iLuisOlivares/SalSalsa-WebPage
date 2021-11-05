import React from 'react'
import { Link } from 'react-router-dom'
import imagenes from '../assets/Img/imagenes'

function ComponenteServicio({nombre,leyenda,imagen}) {
    return (
    <div>    
            <div  class="bg-dark card col-4" style={{width: "18rem"}}>
              <img src={imagen} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h3 class="text-light card-text d-flex justify-content-center">{nombre}</h3>
                <p class="text-light card-text d-flex text-center fst-italic justify-content-center">{leyenda}</p>
              </div>
            </div>
    </div>


    )
}

export default ComponenteServicio
