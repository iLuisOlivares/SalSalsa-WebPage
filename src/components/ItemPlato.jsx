import React from "react";

const ItemPlato = (props) => {

  const determinarPlato = (id) => {
    // alert('LLama');
  }

  const { tituloPlato, descripcionPlato, imgPlato, idPlato } = props;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imgPlato} alt={tituloPlato} />
        <div className="card-body">
          <div className="informacion p-2">
            <h5 className="card-title">{tituloPlato}</h5>
            <p className="card-text">
              {descripcionPlato}
            </p>
          </div>
          {/* Trigger/Open The Modal */}
          <div className="d-flex justify-content-around align-items-center pb-2 pt-3">
            <button type="button" className="botones" onClick={determinarPlato(idPlato)}>

            {/* <button type="button" className="botones"> */}
              Agregar al carrito <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPlato;
