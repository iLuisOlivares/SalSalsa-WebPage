import React from 'react'

function ComponenteServicio({nombre,leyenda,imagen}) {
    return (
    <div>    
            <div  className="bg-dark card col-4 rounded-1" style={{width: "18rem"}}>
              <img src={imagen} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h3 className="text-light card-text d-flex justify-content-center">{nombre}</h3>
                <p className="text-secondary card-text d-flex text-center fw-light justify-content-center">{leyenda}</p>
              </div>
            </div>
    </div>


    )
}

export default ComponenteServicio
