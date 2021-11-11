import React from "react";

export default function Testimonio({ img, name }) {
  return (
    <div className="card mb-3 o-testimonio-fix">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid rounded-start testimonio-img"
            alt="Testimonio image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
