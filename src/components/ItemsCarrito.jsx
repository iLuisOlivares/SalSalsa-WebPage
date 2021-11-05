import React from "react";
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
  const eliminarItem = async (id) => {
    const lista = carrito.filter((item) => item.id !== id);
    await fetch(
      "https://store-express-greg.herokuapp.com/api/v1/orders/" + id,
      {
        method: "DELETE",
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
    setCarrito(lista);
    // window.location.reload(true);
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

  const modificarItem = (id, cantidad) => {
    const lista = carrito.filter((item) => item.id !== id);
    setCarrito([...carrito]);
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
              value={cantidad}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsCarrito;
