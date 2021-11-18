import React, { Fragment, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NumericInput from "react-numeric-input";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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

const ItemPlato = ({
  tituloPlato,
  descripcionPlato,
  imgPlato,
  precioPlato,
  idPlato,
  carrito,
  setCarrito,
  platillos,
}) => {

  const MySwal = withReactContent(Swal)

  const addAlert = () =>{

    MySwal.fire({
      title: <p>Juventic</p>,
      footer: 'Copyright 2021',
      didOpen: () => {

        MySwal.clickConfirm()
      }
    }).then(() => {
      return Swal.fire({
        title: 'Agregado!',
        text: 'Se ha agregado el platillo',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
  }


  

  const postData = (id) => {
    let amount = parseInt(document.getElementById("id_cantidad").value);
    console.log("Agregar");
    const item = {
      nombre: tituloPlato,
      id: idPlato,
      precio: precioPlato,
      imagen: imgPlato,
      descripcion: descripcionPlato,
      cantidad: amount,
    };
    const lista = carrito.filter((item) => item.id !== id);

    addAlert();
    setCarrito([...lista, item]);
    setOpen(false);

  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
  
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Fragment>
       <div className="col">
         <div className="card text-center text-white bg-dark shadow-5 h-100">
          <img src={imgPlato} className="card-img-top" alt={tituloPlato} />
               <div className="card-body text-light">
          <h4 className="m-2 card-title">{tituloPlato}</h4>
          <p className="card-text text-secondary">{descripcionPlato}</p>
          </div>
          <a className="btn btn-dark" onClick={handleOpen} > Agregar al carrito <i className="fas fa-shopping-cart"></i></a>
          </div>
      </div> 
    
      {/* <div className="col">
        <div className="card h-100">
          <img src={imgPlato} alt={tituloPlato} />
          <div className="card-body">
            <div className="informacion p-2">
              <h5 className="card-title">{tituloPlato}</h5>
              <p className="card-text">{descripcionPlato}</p>
            </div>
           
            <div className="d-flex justify-content-around align-items-center pb-2 pt-3">
              <button type="button" className="botones" onClick={handleOpen}> Agregar al carrito <i className="fas fa-shopping-cart"></i>
                
               
              </button>
            </div>
          </div>
        </div>
        </div> */}

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
                onClick={() => postData(idPlato)}
                type="button"
                className="botones"
              >
                Agregar al carrito <i className="fas fa-shopping-cart" />
              </button>

              <NumericInput
                id="id_cantidad"
                className="shopping-input"
                min={1}
                max={100}
                value={1}
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
