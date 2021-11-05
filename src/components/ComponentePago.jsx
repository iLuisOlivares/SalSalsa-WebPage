import React from "react";

function ComponentePago({carrito}) {

  const calcularPrecio = () =>{
    var precio = 0;
    for (const iterator of carrito) {
      var total = iterator.precio * iterator.cantidad;
      precio = total + precio;
    }
    return precio;
  }


  return (
    <div className="col-4">
      <div className=" card d-flex align-content-center ">
        <div className="card-body  ">
          <h5 className="card-title d-flex justify-content-center ">Total</h5>
          <p id="costo-total" className="d-flex justify-content-center card-text">
            {calcularPrecio()}
          </p>
          <div className=" d-flex justify-content-center  ">
            <button id="btn__traer" type="button" className=" btn btn-dark ">
              Pagar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentePago;
