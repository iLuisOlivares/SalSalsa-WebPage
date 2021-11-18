import React from "react";
import emailjss from "emailjs-com";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ComponenteModal({ precio, carrito, setCarrito }) {

  const MySwal = withReactContent(Swal);

  const sendAlert = (bool) =>{
    MySwal.fire({
      title: <p>Juventic</p>,
      footer: 'Copyright 2021',
      didOpen: () => {

        MySwal.clickConfirm()
      }
    }).then(() => {
      if(bool){
        return Swal.fire({
          title: 'Compra exitosa!',
          text: 'Su compra ha sido exitosa',
          icon: 'success',
          confirmButtonText: 'Cool'
        })

      }else{
        return Swal.fire({
          title: 'Compra Rechazada!',
          text: 'Su compra fue rechazada',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjss
      .sendForm(
        "service_abyircw",
        "template_quhzvbj",
        e.target,
        "user_D3SnG2Ug2C29tarRbxdi0"
      )
      .then(
        (result) => {
          console.log(result.text);
          sendAlert(true);
          e.target.reset();
          eliminarAllItems();
        },
        (error) => {
          sendAlert(false)
          console.log(error.text);
        }
      );
  };

  const eliminarAllItems = async () => {
    const lista = carrito.filter((item) => item.id == 0);
    // await fetch(
    //   "https://store-express-greg.herokuapp.com/api/v1/orders/",
    //   {
    //     method: "DELETE",
    //     mode: "cors",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
    setCarrito(lista);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Pagar
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Procedimiento de pago
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Correo electronico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="nombre"
                  />
                </div>

                <input
                  type="text"
                  class="form-control"
                  name="lol"
                  value={precio}
                  style={{ display: "none" }}
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button 
                  value="send" 
                  type="submit" 
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  >
                    Pagar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponenteModal;
