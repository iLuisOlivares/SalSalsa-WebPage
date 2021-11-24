import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import Comentarios from "../Comentarios/Comentarios";

import {
  faPhone,
  faMobile,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Input from "../../components/ComponenteInput";
import TextAreaComponent from "../../components/TextAreaComponent";
import {
  MensajeStyled1,
  MensajeStyled2,
} from "../../assets/Elements/Formularios";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const marker = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const mobile = <FontAwesomeIcon icon={faMobile} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const styleIcon = {
  borderRadius: "25px",
  background: "#a51309df",
  fontSize: "40px",
  padding: "5px",
  width: "70px",
};

const expresiones = {
  comprobacion: /^[a-zA-ZÀ-ÿ\s\W]{1,}$/,
  asunto: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,50}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  descripcion: /^[a-zA-ZÀ-ÿ\s\W]{1,}$/, // Letras y espacios, pueden llevar acentos.
};

function ContactUs() {
  const [asunto, cambiarAsunto] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [descripcion, cambiarDescripcion] = useState({
    campo: "",
    valido: null,
  });
  const [formulario, cambiarFormulario] = useState(null);

  const MySwal = withReactContent(Swal);

  const sendAlert = () => {
    MySwal.fire({
      title: <p>Juventic</p>,
      footer: "Copyright 2021",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return Swal.fire({
        title: "Enviado!",
        text: "Se ha enviado el correo correctamente",
        icon: "success",
        confirmButtonText: "Cool",
      });
    });
  };

  const onSubmit = (e) => {
    if (
      asunto.valido === "true" &&
      nombre.valido === "true" &&
      correo.valido === "true" &&
      descripcion.valido === "true"
    ) {
      console.log("Formulario Completado");
      sendAlert();
      e.preventDefault();

      emailjs
        .sendForm(
          "service_b4tu7ca",
          "template_7giweyd",
          e.target,
          "user_IuWzSYfWgH0olLUkK0R4s"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();

      cambiarFormulario(true);
      cambiarNombre({ campo: "", valido: null });
      cambiarAsunto({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarDescripcion({ campo: "", valido: null });
    } else {
      e.preventDefault();
      cambiarFormulario(false);
      console.log("Formulario no completado");
    }
  };

  return (
    <Fragment>
      <div className="container my-5">
        <div className="col-12 text-center ">
          <h2 className="text fw-bold">Contactanos</h2>
          <hr className="divider mb-5" />
        </div>
        <div className="row">
          <div className="p-3 col-12 col-md-6">
            <div className="info d-flex justify-content-center ">
              <div>
                <p>{envelope} contactanos@colnodo.com</p>
                <p>{marker} Cra. 51a #46, Medellín, Antioquia</p>
                <p> {phone} (+57) 555 1234</p>
                <p> {mobile} (318) 4344 760 </p>
              </div>
            </div>
            <div style={{ fontSize: "20px", color: "white" }} className="Barlist mt-4 d-flex justify-content-center"  >
              <div  style={{ width: "250px" }} className="d-flex justify-content-between mb-5">
      
                <FontAwesomeIcon style={styleIcon} icon={faFacebookF} />
                <FontAwesomeIcon style={styleIcon} icon={faTwitter} />
                <FontAwesomeIcon style={styleIcon} icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="shadow rounded-3 p-3 col-12 col-md-6">
            <form className="Form" onSubmit={onSubmit} estado={formulario}>
              <Input
                estado={nombre}
                cambiarEstado={cambiarNombre}
                expresionRegular={expresiones.nombre}
                label="Nombre Completo"
                placeholder="Nombre Completo"
                inputType="text"
                leyenda="Escriba un nombre valido"
                name="name"
              />
              <Input
                estado={correo}
                cambiarEstado={cambiarCorreo}
                expresionRegular={expresiones.correo}
                label="Correo Electronico"
                placeholder="Correo Electronico"
                inputType="email"
                leyenda="Escriba un Email valido"
                name="email"
              />
              <Input
                estado={asunto}
                cambiarEstado={cambiarAsunto}
                label="Asunto"
                placeholder="Asunto"
                inputType="text"
                leyenda="Escriba un asunto valido"
                expresionRegular={expresiones.asunto}
                name="subject"
              />
              <TextAreaComponent
                estado={descripcion}
                cambiarEstado={cambiarDescripcion}
                expresionRegular={expresiones.descripcion}
                label="Descripcion"
                placeholder="Descripcion"
                inputType="text"
                leyenda="Escriba una descripcion valida"
                name="message"
              />
              {formulario === false && (
                <MensajeStyled1  className="fw-light">
                  No se ha enviado el formulario: Verifique cada uno de los campos
                </MensajeStyled1>
              )}
              {formulario === true && (
                <MensajeStyled2  className="fw-light">
                  Se ha enviado el formulario: Muchas gracias
                </MensajeStyled2>
              )}
              <button
                id="button-id"
                value="Send"
                type="submit"
                className="btn btn-danger"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

      <Comentarios></Comentarios>

      </div>
    
      

    </Fragment>
  );
}

export default ContactUs;
