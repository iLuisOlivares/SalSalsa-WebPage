import React, { Fragment, useState, useRef  } from "react";
import ButtonElement from "../../assets/Elements/ButtonElement";
import CheckElement from "../../assets/Elements/CheckElement";
import SelectElement from "../../assets/Elements/SelectElement";
import InputNumber from "../../assets/Elements/InputNumber";
import InputTime from "../../assets/Elements/InputTime";
import ImputDate from "../../assets/Elements/InputDate";
import Input from "../../components/ComponenteInput";
import InputDate from "../../assets/Elements/InputDate";
import {
  MensajeStyled1,
  MensajeStyled2,
} from "../../assets/Elements/Formularios";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// import "./Carta.css";

/* 
  Container para mostrar el diseño de la página Carta
*/

const Reserva = () => {


  
  const [asunto, cambiarAsunto] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [celular, cambiarCelular] = useState({ campo: "", valido: null });
  const [numeroPersonas, cambiarNumero] = useState('true');
  const [fecha, cambiarFecha] = useState('true');
  const [hora, cambiarHora] = useState('true');
  const [terminos, cambiarTerminos] = useState(false);
  const [formulario, cambiarFormulario] = useState(null);

  //Expresiones regulares
  const expresiones = {
    comprobacion: /^[a-zA-ZÀ-ÿ\s\W]{1,}$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,50}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{7,14}$/, // 7 a 14 numeros.
    descripcion: /^[a-zA-ZÀ-ÿ\s\W]{0,}$/, // Letras y espacios, pueden llevar acentos.
  };

  
  const MySwal = withReactContent(Swal)

  const sendAlert = () =>{

    MySwal.fire({
      title: <p>Juventic</p>,
      footer: 'Copyright 2021',
      didOpen: () => {

        MySwal.clickConfirm()
      }
    }).then(() => {
      return Swal.fire({
        title: 'Enviado!',
        text: 'Se ha enviado la reserva correctamente',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
  }

  const onSubmit = (e) => {
    if (
      asunto.valido === "true" &&
      nombre.valido === "true" &&
      correo.valido === "true" &&
      celular.valido === "true" &&
      numeroPersonas === "true" &&
      fecha  === "true" &&
      hora === "true" &&
      terminos === true
    ) {
      console.log("Formulario Completado");
      sendAlert();
      e.preventDefault();

    emailjs.sendForm('service_abyircw', 'template_1zoz45o', e.target, 'user_D3SnG2Ug2C29tarRbxdi0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

      cambiarFormulario(true);
      cambiarNombre({ campo: "", valido: null });
      cambiarAsunto({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarCelular({ campo: "", valido: null });
      cambiarHora(null);
      cambiarFecha(null);
      cambiarNumero(null);
      cambiarTerminos(null);
    } else {
    e.preventDefault();
      cambiarFormulario(false);
      console.log("Formulario no completado");
      console.log(asunto.valido);
      console.log(nombre.valido);
      console.log(correo.valido);
      console.log(numeroPersonas);
      console.log(fecha);
      console.log(hora);
      console.log(terminos);  
    }
  };


  return (
    <Fragment>
      <section>
        <div className="row gx-0 gx-lg-0 justify-content-center mb-2 mx-1 py-5">
          
          <div className=" shadow-lg  col-xll-3 col-xl-6 col-lg-8 px-4 py-3 px-sm-5 rounded-3">
          <div className="col-12 text-center p-3">
            <h2 className="text fw-bold">Reserva</h2>
            <hr className="divider" />
          </div>
            <form onSubmit={onSubmit} estado={formulario}>
              <SelectElement />
              <Input
                estado={asunto}
                cambiarEstado={cambiarAsunto}
                label="Asunto"
                placeholder="Asunto"
                inputType="text"
                leyenda="Escriba un asunto valido"
                expresionRegular={expresiones.asunto}
                name = "asunto"
              />
              <Input
                estado={nombre}
                cambiarEstado={cambiarNombre}
                expresionRegular={expresiones.nombre}
                label="Nombre Completo"
                placeholder="Nombre Completo"
                inputType="text"
                leyenda="Escriba un nombre valido"
                name = "nombre"
              />
              <Input
                estado={correo}
                cambiarEstado={cambiarCorreo}
                expresionRegular={expresiones.correo}
                label="Correo Electronico"
                placeholder="Correo Electronico"
                inputType="email"
                leyenda="Escriba un Email valido"
                name = "email"
              />
              <Input
                estado={celular}
                cambiarEstado={cambiarCelular}
                expresionRegular={expresiones.celular}
                label="Celular"
                placeholder="Celular"
                inputType="text"
                leyenda="Escriba un numero celular valido"
                name = "celular"
              />
              <InputNumber
                estado={numeroPersonas}
                cambiarEstado={cambiarNumero}
                label="Numero de personas"
                leyenda="Ingrese un numero de valido: Entre 1 y 30 personas"
                exprecionRegular=""
                name = "personas"
              />
              <InputDate
                estado={fecha}
                cambiarEstado={cambiarFecha}
                expresionRegular={expresiones.celular}
                label="Fecha"
                leyenda="Ingrese una fecha valida: Posterior al dia de hoy"
                name = "fecha"
              />
              <InputTime
                estado={hora}
                cambiarEstado={cambiarHora}
                expresionRegular={expresiones.celular}
                label="Hora"
                leyenda="Ingrese una hora valida: Entre las 13:00 y las 23:00"
                name = "hora"
              />
              <CheckElement
                estado={terminos}
                cambiarEstado={cambiarTerminos}
              ></CheckElement>
              {formulario === false && (
                <MensajeStyled1>
                  No se ha enviado el formulario: Verifique cada uno de los
                  campos
                </MensajeStyled1>
              )}
              {formulario === true && (
                <MensajeStyled2>
                  Se ha enviado el formulario: Muchas gracias
                </MensajeStyled2>
              )}
              <button id="button-id" value = "Send" type="submit" className="btn btn-danger">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Reserva;
