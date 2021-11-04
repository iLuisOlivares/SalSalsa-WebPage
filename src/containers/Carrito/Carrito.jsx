import { minHeight } from "@mui/system";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import ComponentePago from "../../components/ComponentePago";
import ItemsCarrito from "../../components/ItemsCarrito";
import ContainerCarro from "../../assets/Elements/ContainerCarro";

 const inicializar = () =>{

  var lista=[];
  const url = 'https://store-express-greg.herokuapp.com/api/v1/orders'
  fetch(url).then(response => response.json()).then(data => {
    for (const iterator of data) {
      lista.push(iterator)
    }
  }).catch(error => console.log(error));
  
  return lista
 }

function Carrito() {

  
  const lista = inicializar();
  console.log(lista);
  const [carrito, setCarrito] =  useState(lista);
 
  return (
    <div className="my-3 container-xxl" style={{minHeight: '74vh'}}>
      <h2 className="d-flex mb-3 justify-content-center">Carrito de compra</h2>

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
          <Link className="btn btn-danger " to="/carta">
            Continuar comprando
          </Link>
        </div>


      </main>
    </div>
  );
}

export default Carrito;
