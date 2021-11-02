import { minHeight } from "@mui/system";
import React, {useState} from "react";
import ComponentePago from "../../components/ComponentePago";
import ItemsCarrito from "../../components/ItemsCarrito";
import ContainerCarro from "../../assets/Elements/ContainerCarro";

function Carrito() {

  const lista=[
    {
      nombre: "Item",
      descripcion: "Descripcion",
      precio: 1900,
      id: 1,
      cantidad: 1, 
    },
    {
      nombre: "Item2",
      descripcion: "Descripcion",
      precio: 1000,
      id: 2,
      cantidad: 5, 
    },  
    {
      nombre: "Item3",
      descripcion: "Descripcion",
      precio: 2000,
      id: 3,
      cantidad: 2, 
    },  
  ]

  const [carrito, setCarrito] =  useState(lista);

 
  return (
    <div className="my-3 container-xxl" style={{minHeight: '74vh'}}>
      <h2 class="d-flex mb-3 justify-content-center">Carrito de compra</h2>

      {/* Contenedor de los items  */}
      <main className="container">
        <div className="row">
          <div className="card col-8">
    
          <ContainerCarro
          carrito = {carrito}
          setCarrito = {setCarrito}          
          >
          </ContainerCarro>
          </div>

          {/* < Contenedor para pagar todo  */}
       <ComponentePago
        carrito = {carrito}
       ></ComponentePago>
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
