import React from "react";
import ComponentePago from "../../components/ComponentePago";
import ItemsCarrito from "../../components/ItemsCarrito";

function Carrito() {
  return (
    <div className="my-3 container-xxl">
      <h2 class="d-flex mb-3 justify-content-center">Carrito de compra</h2>

      {/* Contenedor de los items  */}
      <main className="container">
        <div className="row">
          <div className="card col-8">
            <div className="">
                <p className="d-flex justify-content-center">Todavia no has agregado items al carrito de compras</p>
                <ItemsCarrito
                nombre = "Item"
                descripcion = "Descripcion"
                precio = "Precio"
                id = "1"
                cantidad = "2"
                ></ItemsCarrito>
            </div>
          </div>

          {/* < Contenedor para pagar todo  */}
       <ComponentePago></ComponentePago>
        </div>

        {/* Boton seguir comprando */}
        <div className="row p-2">
          <a className="btn btn-danger " href="carta">
            Continuar comprando
          </a>
        </div>


      </main>
    </div>
  );
}

export default Carrito;
