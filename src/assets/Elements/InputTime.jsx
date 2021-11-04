import React from 'react'
import { InputStyled, LabelStyled, LeyendaStyled } from './Formularios'

const hoy = new Date();
const hora = hoy.getHours() + ':' + hoy.getMinutes();

function InputTime({estado,cambiarEstado, label,leyenda,name}) {

  const validacion = (e) => {

    if(e.target.validity.valid === true){
    cambiarEstado('true');
    console.log('valido');
    } else if(e.target.validity.rangeOverflow === true || e.target.validity.rangeUnderflow === true){
    cambiarEstado('false');
  }
  
}

      return(
        <div className="form mb-3" id="grupo_hora">
            <LabelStyled  valido={estado} htmlFor="" className="form_label">{label}</LabelStyled>
            <InputStyled name={name} type="time"  name="hora" min="13:00" max="23:00" valido={estado} defaultValue={hora} onChange={validacion} onKeyUp = {validacion} onBlur={validacion} className="item-formulario form-control" id="" />                
            <LeyendaStyled valido={estado} className="form-text">{leyenda}</LeyendaStyled>
        </div>
      )
    }

export default InputTime
