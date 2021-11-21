import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import ComponentePago from "../../components/ComponentePago";
import ContainerCarro from "../../assets/Elements/ContainerCarro";

const Carrito = () => {
 
  const [carrito, setCarrito] = useState([]);
  // const [carrito, setCarrito] = useState(JSON.parse(window.localStorage.getItem("Carrito")));
 useEffect(()=>{
   let data = localStorage.getItem("Carrito");
   if(data != null){
     setCarrito(JSON.parse(data));
   }
   },[])

   useEffect(()=>{
    localStorage.setItem("Carrito", JSON.stringify(carrito));
    },[carrito]);

  
  return (
    <div className="my-5 container-xxl" style={{ minHeight: "74vh" }}>
      
      <h2 className="d-flex pb-4 justify-content-center fw-bold">Carrito de compra</h2>

      {/* Contenedor de los items  */}
      <main className="container">
        <div className="row">
          <div className="card col-8 p-1">
            <ContainerCarro
              carrito={carrito}
              setCarrito={setCarrito}
            ></ContainerCarro>
          </div>

          {/* < Contenedor para pagar todo  */}
          <ComponentePago carrito={carrito}
          setCarrito={setCarrito}></ComponentePago>
        </div>

        {/* Boton seguir comprando */}
        <div className="m-3 d-flex justify-content-center">
          <Link style={{width:"20rem", color: "white", backgroundColor: "rgba(182, 6, 6, 0.8)"}} className="btn btn-light " to="/carta">
            Continuar comprando
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Carrito;
