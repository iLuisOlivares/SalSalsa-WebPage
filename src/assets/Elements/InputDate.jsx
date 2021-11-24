import React from 'react'
import { InputStyled, LabelStyled, LeyendaStyled } from './Formularios'



function InputDate({estado,cambiarEstado, label,leyenda,name, minFecha}) {

  const validacion = (e) => {

    const valor = e.target.value;

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
        <div style={{minHeight: "100px"}} className="mb-0" id="grupo_fecha">
            <LabelStyled valido={estado.valido} htmlFor="" className="form-label">{label}</LabelStyled>
            <InputStyled name={name} valido={estado.valido} type="date" min={minFecha} defaultValue={minFecha} onChange={validacion} onKeyUp = {validacion} onBlur={validacion} className="item-formulario form-control "/>                
            <LeyendaStyled valido={estado.valido} className="form-text msg_ok">{leyenda}</LeyendaStyled>
        </div>
  
      )
}

export default InputDate
