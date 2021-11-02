import React from 'react';
import { InputStyled, LabelStyled, LeyendaStyled } from '../assets/Elements/Formularios';



function ComponenteInput({estado,cambiarEstado, label,placeholder,leyenda,expresionRegular}) {

  const onChange = (e) =>{
    cambiarEstado({...estado, campo: e.target.value});}

  const validacion = () =>{
    if(expresionRegular ){
      if(expresionRegular.test(estado.campo)){
        console.log('Correcto');
        cambiarEstado({...estado, valido: 'true'});
      
      }else{
        console.log('Incorrecto');
        cambiarEstado({...estado, valido: 'false'});
        
      }
    }
  }

    return (
        <div className="mb-3">
        <LabelStyled  valido={estado.valido} htmlFor="" className=" form-label">{label}</LabelStyled>
        <InputStyled  name={label} valido={estado.valido} type="text" value= {estado.campo} onChange={onChange} onKeyUp = {validacion} onBlur={validacion} placeholder = {placeholder} className="form-control" id=""></InputStyled>
        <LeyendaStyled valido={estado.valido}  className="form-text">{leyenda}</LeyendaStyled>
        </div>
    )
  
}

export default ComponenteInput
