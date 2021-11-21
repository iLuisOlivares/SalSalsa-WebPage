import React from "react";
import ComponenteModal from "./ComponenteModal";

function ComponentePago({carrito,setCarrito}) {

  const calcularPrecio = () =>{
    var precio = 0;
    for (const iterator of carrito) {
      var total = iterator.precio * iterator.cantidad;
      precio = total + precio;
    }
    return precio;
  }

  const valor = calcularPrecio()

  return (
    <div className="col-4">
      <div className=" card d-flex align-content-center ">
        <div style={{backgroundColor:"rgb(0 0 0 / 80%)"}} className="card-body  ">
          <h5 className="card-title text-light d-flex justify-content-center ">Total</h5>
          <p id="costo-total" className="text-light d-flex justify-content-center card-text">
            {valor}
          </p>
          <div className=" d-flex justify-content-center  ">
          
          <ComponenteModal
          precio = {valor}
          carrito = {carrito}
          setCarrito = {setCarrito}
          
          ></ComponenteModal>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentePago;
