import { minHeight } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComponentePago from "../../components/ComponentePago";
import ItemsCarrito from "../../components/ItemsCarrito";
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
    <div className="my-3 container-xxl" style={{ minHeight: "74vh" }}>
      <h2 className="d-flex mb-3 justify-content-center">Carrito de compra</h2>

      {/* Contenedor de los items  */}
      <main className="container">
        <div className="row">
          <div className="card col-8">
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
        <div className="row p-2">
          <Link className="btn btn-dark " to="/carta">
            Continuar comprando
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Carrito;
