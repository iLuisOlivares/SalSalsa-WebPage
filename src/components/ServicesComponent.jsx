import React from 'react'
import "../containers/Home/Home.css"

function ServicesComponent({img, tittle}) {
    return (
        <div className="p-2 text-center  ">
        <img src={img} class="card-img-top" style={{maxWidth:"300px",}} alt="..." />
        <h4 class="text-light m-2 card-title">{tittle}</h4>
      </div>
    )
}

export default ServicesComponent
