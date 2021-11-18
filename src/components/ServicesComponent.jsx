import React from 'react'
import "../containers/Home/Home.css"

function ServicesComponent({img, tittle}) {
    return (
        <div className="p-2 text-center  ">
        <img src={img} className="card-img-top" style={{maxWidth:"300px",}} alt="..." />
        <h4 className="text-light m-2 card-title">{tittle}</h4>
      </div>
    )
}

export default ServicesComponent
