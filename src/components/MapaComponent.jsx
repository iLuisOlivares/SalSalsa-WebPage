import React from "react";
import "../containers/Home/Home.css";

function MapaComponent({ img, tittle, link }) {
  return (
    <a style={{color: "rgba(182, 6, 6, 0.8)"}} href={link}>
      <div className="p-2 text-center  ">
        <img
          src={img}
          className="card-img-top"
          style={{ maxWidth: "300px" }}
          alt="..."
        />
        <h4 className="text-dark m-2 card-title">{tittle}</h4>
      </div>
    </a>
  );
}

export default MapaComponent;
