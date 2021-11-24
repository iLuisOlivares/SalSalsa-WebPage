import React from 'react'
import { useState } from 'react';
import { InputStyled, LabelStyled, LeyendaStyled } from '../../assets/Elements/Formularios';



function InputContact({obtenerComentarios, estado,cambiarEstado, label,placeholder,leyenda,expresionRegular, name}) {
    

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

    const postComentarios = async (comentario) => { await fetch('https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/comentario',{
        method: 'Post',
        body: JSON.stringify(comentario),
        headers:{
            'Content-Type': 'application/json'
        }

    });
    obtenerComentarios();
    
    }



    const onClick = () => {

   
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
       dd = '0' + dd;
      }

      if (mm < 10) {
       mm = '0' + mm;
      }

      today = mm + '/' + dd + '/' + yyyy;
      const fecha = today.toString();
        const nuevoComentario = {
          comentario: estado.campo,
          fecha: fecha,
          cliente_id: 2}
       
        postComentarios(nuevoComentario);
    }

   
  
    
  
      return (
          <div style={{minHeight: "100px"}} className="mb-0">
          <LabelStyled  valido={estado.valido} htmlFor="" className=" form-label">{label}</LabelStyled>
          <InputStyled  name={name} valido={estado.valido} type="text" value= {estado.campo} onChange={onChange} onKeyUp = {validacion} onBlur={validacion} placeholder = {placeholder} className="form-control" id=""></InputStyled>
          <LeyendaStyled valido={estado.valido}  className="form-text">{leyenda}</LeyendaStyled>
          <button onClick={() => onClick()} style={{width:"150px"}} className=" mt-0 mb-3 btn btn-danger">Enviar</button>
          </div>
      )
}

export default InputContact
