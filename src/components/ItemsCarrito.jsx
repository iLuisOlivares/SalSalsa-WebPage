import React, {useEffect} from "react";
import imagen from "../assets/Img/img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  ContainerImgStyled,
  ImagenStyled,
  InputCompraStyled,
} from "../assets/Elements/Carrito";

function ItemsCarrito({
  nombre,
  descripcion,
  precio,
  id,
  cantidad,
  carrito,
  setCarrito,
}) {


  const eliminarItem = (id) => {
    const lista = carrito.filter((item) => item.id !== id);
    console.log(lista);
    if(lista != ''){
      setCarrito(lista);
      console.log('no vacio');

    }else{
      setCarrito([]);
    }
 
  };

 
  
  const validacion = (e) => {
    const lista = [];
    console.log(e.target.id);
    for (const iterator of carrito) {
      if (iterator.id == e.target.id) {
        iterator.cantidad = e.target.value;
      }
      lista.push(iterator);
    }
    console.log(lista);
    setCarrito(lista);
  };

  const onChange = (id, e) => {
    const lista = [];
    for (const iterator of carrito) {
      if (iterator.id === id) {
        iterator.cantidad = e.target.value;
      }
      lista.push(iterator);
    }
    setCarrito(lista);
  };

  const modificarItem = (e) => {
    const carritoList = [];
    for (const iterator of carrito) {
      if(e.target.id == iterator.id){
        iterator.cantidad = e.target.value;
      }
      carritoList.push(iterator);
    }
    console.log('modificar');
    setCarrito(carritoList);
  };

  return (
    <div className="card mb-3" data-id={id}>
      <div className="row g-0">
        <ContainerImgStyled className="col-md-4">
          <ImagenStyled src={imagen} className="rounded-center" alt="..." />
        </ContainerImgStyled>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{nombre}</h5>
              <button
                type="button"
                onClick={() => eliminarItem(id)}
                className="btn btn-danger "
              >
                Eliminar
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </button>
            </div>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">{precio}</p>
            <InputCompraStyled
              type="number"
              id={id}
              className="shoppingImput"
              onChange={validacion}
              defaultValue={cantidad}
              onChange={modificarItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsCarrito;
