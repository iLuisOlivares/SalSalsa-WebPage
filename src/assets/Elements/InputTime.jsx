import React from 'react'
import { InputStyled, LabelStyled, LeyendaStyled } from './Formularios'

const hoy = new Date();


function InputTime({estado,cambiarEstado, label,leyenda,name,hora}) {

  const validacion = (e) =>{

    const valor = e.target.value;
    cambiarEstado({...estado, campo:e.target.value})

    if(valor.length === 0 ){
      cambiarEstado({...estado,valido: 'false'});
    } 
    else if(e.target.validity.valid === true){
      cambiarEstado({campo: valor, valido: 'true'});
    }else if(e.target.validity.rangeOverflow === true || e.target.validity.rangeUnderflow === true){
    cambiarEstado({...estado,valido: 'false'});
  }
  
}

      return(
        <div style={{minHeight: "100px"}} className="mb-0"  id="grupo_hora">
            <LabelStyled  valido={estado.valido} htmlFor="" className="form-label">{label}</LabelStyled>
            <InputStyled  type="time"  name="hora" min="13:00" max="23:00" valido={estado.valido} defaultValue={hora} onChange={validacion} onKeyUp = {validacion} onBlur={validacion} className="item-formulario form-control" id="" />                
            <LeyendaStyled valido={estado.valido} className="form-text">{leyenda}</LeyendaStyled>
        </div>
      )
    }

export default InputTime
