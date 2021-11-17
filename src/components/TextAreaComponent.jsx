import React from 'react'
import { TextStyled, LabelStyled, LeyendaStyled } from '../assets/Elements/Formularios';

export default function TextAreaComponent({estado,cambiarEstado, label,placeholder,leyenda,expresionRegular, name}) {
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
            <div style={{minHeight: "140px"}}  className="mb-3">
            <LabelStyled  valido={estado.valido} htmlFor="" className=" form-label">{label}</LabelStyled>
            <TextStyled  name={name} valido={estado.valido} type="text" value= {estado.campo} onChange={onChange} onKeyUp = {validacion} onBlur={validacion} placeholder = {placeholder} className="form-control" id=""></TextStyled>
            <LeyendaStyled valido={estado.valido}  className="form-text">{leyenda}</LeyendaStyled>
            </div>
        )
}
