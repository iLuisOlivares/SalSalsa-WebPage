import React, { Fragment } from "react";
import ButtonElement from "../../assets/Elements/ButtonElement";
import CheckElement from "../../assets/Elements/CheckElement";
import SelectElement from "../../assets/Elements/SelectElement";
import ComponenteForm from "../../components/ComponenteForm";
import Input from "../../components/ComponenteInput";

// import "./Carta.css";

/* 
  Container para mostrar el diseño de la página Carta
*/

const Reserva = () => (
  <Fragment>
    <section>
      <ComponenteForm>

        <SelectElement/>
        <Input
        label ="Asunto"
        placeholder ="Asunto"
        inputType ="text"
        leyenda ="Escriba un asunto valido"
        />
        <Input
        label ="Nombre Completo"
        placeholder ="Nombre Completo"
        inputType ="text"
        leyenda ="Escriba un nombre valido"
        />
        <Input
        label ="Correo Electronico"
        placeholder ="Correo Electronico"
        inputType ="email"
        leyenda ="Escriba un Email valido"
        />
        <Input
        label ="Celular"
        placeholder ="Celular"
        inputType ="text"
        leyenda ="Escriba un numero celular valido"
        />
        <Input
        label ="Numero de personas"
        placeholder ="Numero personas"
        inputType = "number"
        min = "1"
        leyenda ="Ingrese un numero de valido"
        />
        <Input
        label ="Fecha"
        placeholder ="Fecha"
        inputType ="date"
        leyenda ="Ingrese una fecha valida"
        />
        <Input
        label ="Hora"
        placeholder ="Hora"
        inputType ="time"
        leyenda ="Ingrese una hora valida"
        />
        <CheckElement></CheckElement>
        <ButtonElement nombre="Enviar"></ButtonElement>
      </ComponenteForm>
    </section>
  </Fragment>
);

export default Reserva;