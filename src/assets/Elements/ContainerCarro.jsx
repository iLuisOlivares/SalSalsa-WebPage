import React from "react";
import ItemsCarrito from "../../components/ItemsCarrito";

function ContainerCarro({ carrito, setCarrito }) {
  return (
    <div className="xd">
      {carrito.length === 0 ? (
        <p className="m-5 d-flex justify-content-center">No hay ningún producto en el carrito</p>
      ) : (
        carrito.map((item) => (
          <ItemsCarrito
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            id={item.id}
            key={item.id}
            cantidad={item.cantidad}
            carrito={carrito}
            setCarrito={setCarrito}
          ></ItemsCarrito>
        ))
      )}
    </div>
  );
}

export default ContainerCarro;
