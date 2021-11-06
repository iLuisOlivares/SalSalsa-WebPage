import React, { Fragment, useState, useEffect } from "react";
import "./Carta.css";
import ItemPlato from "../../components/ItemPlato";
import { Link } from "react-router-dom";

/* 
  Container para mostrar el diseño de la página Carta
*/
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/static/img/img1.jpg";
import img2 from "../../assets/static/img/img2.jpg";
import img3 from "../../assets/static/img/img3.jpg";
import img4 from "../../assets/static/img/img4.jpg";
import img5 from "../../assets/static/img/img5.jpg";
import img6 from "../../assets/static/img/img6.jpg";
import img7 from "../../assets/static/img/img7.jpg";
import img8 from "../../assets/static/img/img8.jpg";
import img9 from "../../assets/static/img/img9.jpg";
import img10 from "../../assets/static/img/img10.jpg";
import img11 from "../../assets/static/img/img11.jpg";
import img12 from "../../assets/static/img/img12.jpg";
import img13 from "../../assets/static/img/img13.jpg";
import img14 from "../../assets/static/img/img14.png";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Carta = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
  };
  // var elements = document.getElementsByClassName("slick-active");

  // for (var i = 0; i < elements.length; i++) {
  //   elements[i].addEventListener("click", myFunction, false);
  // }

  // var myFunction = function () {
  //   var attribute = this.getAttribute("data-myattribute");
  //   alert("attribute");
  // };
  const [platillos, setPlatillos] = useState([
    {
      nombre: "Combo 1 hamburguesa",
      id: 1,
      precio: 15000,
      imagen: img1,
      descripcion: "combo de hamburguesa, con papas y refresco",
    },
    {
      nombre: "Combo 2 hamburguesa",
      id: 2,
      precio: 10000,
      imagen: img2,
      descripcion: "Combo de hamburguesa y papas",
    },
    {
      nombre: "Hamburguesa sencilla",
      id: 3,
      precio: 5000,
      imagen: img3,
      descripcion: "Hamburguesa con carne, tomate y demás vegetales.",
    },
    {
      nombre: "Combo Hot Dog",
      id: 4,
      precio: 15000,
      imagen: img4,
      descripcion: "Combo 1 de Hot dog y papas.",
    },
    {
      nombre: "Hot Dog Sencillo",
      id: 5,
      precio: 10000,
      imagen: img5,
      descripcion: "Hot dog sencillo con salsa.",
    },
    {
      nombre: "Copa de papas sencillo",
      id: 6,
      precio: 7000,
      imagen: img6,
      descripcion: "Copa de papas con guacamole.",
    },
    {
      nombre: "Papas sencillas",
      id: 7,
      precio: 5000,
      imagen: img7,
      descripcion: "Papas a la francesa sencilla",
    },
    {
      nombre: "2 Latas de Coca Cola",
      id: 8,
      precio: 7000,
      imagen: img8,
      descripcion: "Latas de Coca Cola, con limón y hielo",
    },
    {
      nombre: "Jarra con limonada",
      id: 9,
      precio: 8000,
      imagen: img9,
      descripcion: "Jarra con limonada de 1/2 litro.",
    },
    {
      nombre: "Jarra de agua",
      id: 10,
      precio: 7000,
      imagen: img10,
      descripcion: "Jarra de agua de 1/2 litro.",
    },
    {
      nombre: "Pizza Italiana",
      id: 11,
      precio: 15000,
      imagen: img11,
      descripcion: "Pizza Italiana de 8 porciones.",
    },
    {
      nombre: "Pizza personal italiana",
      id: 12,
      precio: 5000,
      imagen: img12,
      descripcion: "Pizza Italiana para 1 persona.",
    },
    {
      nombre: "Copa de helado",
      id: 13,
      precio: 3000,
      imagen: img13,
      descripcion: "Copa de helado de 1 sabor con uvas.",
    },
    {
      nombre: "Cono de helado",
      id: 14,
      precio: 4000,
      imagen: img14,
      descripcion: "Cono de helado con 2 bolas de diferentes sabores.",
    },
  ]);

  
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
  
    console.log(carrito)
    // //JSON.parse() regresar un archivo JSON a objeto
    // if (localStorage.getItem("Carrito")) {
    //   let listaCar = JSON.parse(localStorage.getItem("Carrito"));
    //   setCarrito([listaCar]) 
    //   console.log(carrito);
    //   console.log(listaCar);
    // }

  return (
    <Fragment>
      {/* Main content */}
      <main className="main-carta">
        {/* Título del container  */}
        <h2 className="o-title-menu">El menú</h2>

        {/* El container del menú */}
        <div className="container">
          {/* Carrosel items */}
          <div>
            <Slider {...settings}>
              <div className="row row-cols-md-3 g-4 o-fix-column">
                {platillos.length === 0 ? (
                  <p className="m-5 d-flex justify-content-center">
                    No hay ningún platillo en el Menu
                  </p>
                ) : (
                  platillos.map((item) => (
                    <ItemPlato
                      tituloPlato={item.nombre}
                      descripcionPlato={item.descripcion}
                      imgPlato={item.imagen}
                      precioPlato={item.precio}
                      idPlato={item.id}
                      carrito = {carrito}
                      setCarrito = {setCarrito}
                      platillos = {platillos}
                    />
                  ))
                )}
              </div>

            
            </Slider>
          </div>
        </div>
      </main>

      {/* Link to download the menu  */}
      <div className="o-menu-doc">
        <Link to="/files/Menu_Completo.pdf" target="_blank" download>
          Descarga el Menú completo aquí
        </Link>
      </div>
    </Fragment>
  );
};

export default Carta;
