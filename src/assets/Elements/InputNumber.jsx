import React from 'react'
import { InputStyled, LabelStyled, LeyendaStyled } from './Formularios'

function InputNumber({estado,cambiarEstado, label,leyenda,name}) {

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
        <div style={{minHeight: "100px"}} className="mb-0">
            <LabelStyled valido={estado.valido} htmlFor="" className="form-label">{label}</LabelStyled>
            <InputStyled name={name} valido={estado.valido} type="number" defaultValue ="1" min="1" max="30" className="item-formulario form-control" onChange={validacion} onKeyUp = {validacion} onBlur={validacion} id=""/>                
            <LeyendaStyled valido={estado.valido} classNames="form-text msg_ok">{leyenda}</LeyendaStyled>
        </div>
      )
      
}

export default InputNumber
