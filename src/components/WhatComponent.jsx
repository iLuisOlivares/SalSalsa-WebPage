import React from "react";


function WhatComponent({ img, tittle }) {
  return (
    <div className="card text-center text-white bg-dark shadow-5 ">
        <img src={img} class="card-img-top" alt="..." />
      <div className="card-body text-light">
        <h4 class="m-2 card-title">{tittle}</h4>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <a className="btn btn-dark" href="">Ir al menu</a>
      </div>
  );
}

export default WhatComponent;
