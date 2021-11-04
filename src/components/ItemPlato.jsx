import React, { Fragment } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

/* function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}*/

const ItemPlato = (props) => {
  const postData = async (productName, descriptionName, price, id) => {
    let amount = parseInt(document.getElementById("id_cantidad").value);
    
    // console.log("JSON DATA ES ", JSON.stringify(data))
    //alert(`cantidad ${cantidad} mas id ${id}`)

    await fetch("https://store-express-greg.herokuapp.com/api/v1/orders", {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "nombre": productName,
        "descripcion": descriptionName,
        "precio": price,
        "id": id, 
        "cantidad": amount 
      })
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { tituloPlato, descripcionPlato, imgPlato, precioPlato, idPlato } =
    props;
  return (
    <Fragment>
      <div className="col">
        <div className="card h-100">
          <img src={imgPlato} alt={tituloPlato} />
          <div className="card-body">
            <div className="informacion p-2">
              <h5 className="card-title">{tituloPlato}</h5>
              <p className="card-text">{descripcionPlato}</p>
            </div>
            {/* Trigger/Open The Modal */}
            <div className="d-flex justify-content-around align-items-center pb-2 pt-3">
              <button type="button" className="botones" onClick={handleOpen}>
                {/* <button type="button" className="botones"> */}
                Agregar al carrito <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <h1 id="o-value-plato-titulo">{tituloPlato}</h1>
          {/* <span id="o-value-plato">num</span> */}
          <p id="o-value-plato-descripcion">{descripcionPlato}</p>
          <div className="d-flex justify-content-center">
            <img
              id="o-value-plato-image"
              src={imgPlato}
              className="img-thumbnail rounded o-img-modal-container"
              style={{ height: 220 }}
            />
          </div>
          <div className="o-information-cost">
            {/* Precio */}
            <p>Precio</p>
            <span id="o-value-plato-price">{precioPlato}</span>
            <section className="o-style-btn-add-carrito">
              {/* Open whatsapp to send a message */}
              <button
                type="button"
                className="botones"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@",
                    "_blank"
                  );
                }}
              >
                Ver contacto
              </button>
              <button
                id="btn__agregar"
                onClick={() => postData(tituloPlato, descripcionPlato, precioPlato, idPlato)}
                type="button"
                className="botones"
              >
                Agregar al carrito <i className="fas fa-shopping-cart" />
              </button>
              <input
                type="number"
                id="id_cantidad"
                className="shoppingImput"
                // value={cantidad}
                className="o-input-carta"
                min={1}
              />
            </section>
          </div>
          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default ItemPlato;
