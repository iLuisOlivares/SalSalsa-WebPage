import React from 'react'
import { Link } from 'react-router-dom'

function ComponenteServicio({nombre,leyenda,imagen}) {
    return (
    <div>    
            <div  class="bg-dark card col-4 rounded-1" style={{width: "18rem"}}>
              <img src={imagen} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h3 class="text-light card-text d-flex justify-content-center">{nombre}</h3>
                <p class="text-secondary card-text d-flex text-center fw-light justify-content-center">{leyenda}</p>
              </div>
            </div>
    </div>


    )
}

export default ComponenteServicio
