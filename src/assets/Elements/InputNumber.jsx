import React from 'react'
import { InputStyled, LabelStyled, LeyendaStyled } from './Formularios'

function InputNumber({estado,cambiarEstado, label,leyenda,name}) {

    const validacion = (e) => {
      
        if(e.target.validity.valid === true){
        cambiarEstado('true');
        }else if(e.target.validity.rangeOverflow === true || e.target.validity.rangeUnderflow === true){
        cambiarEstado('false');
      }
    }

    return(
        <div className="mb-3">
            <LabelStyled valido={estado} htmlFor="" className="form_label">{label}</LabelStyled>
            <InputStyled name={name} valido={estado} type="number" defaultValue ="1" min="1" max="30" className="item-formulario form-control" onChange={validacion} onKeyUp = {validacion} onBlur={validacion} id=""/>                
            <LeyendaStyled valido={estado} classNames="form-text msg_ok">{leyenda}</LeyendaStyled>
        </div>
      )
      
}

export default InputNumber
