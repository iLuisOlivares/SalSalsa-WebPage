import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const hoy = new Date()
const minFecha = hoy.toISOString().split('T')[0];
const hora = hoy.getHours() + ':' + hoy.getMinutes();

function ComponenteInput({label,placeholder,inputType,leyenda}) {
 
    if({inputType}.inputType === "number"){
    return(
      <div className="mb-3">
          <label htmlFor="" className="form_label">{label}</label>
          <input type={inputType} defaultValue = {1} min={1} className="item-formulario form-control" id=""/>                
          <p class="form-text">{leyenda}</p>
      </div>
    )
  }
  else if({inputType}.inputType === "date"){
    return(
      <div className="form mb-3" id="grupo_fecha">
          <label htmlFor="" className="form_label">{label}</label>
          <input type={inputType} min={minFecha} defaultValue={minFecha} className="item-formulario form-control mb-2 "/>                
          <p className="form-text">{leyenda}</p>
      </div>

    )
  }else if({inputType}.inputType === "time"){
    return(

      <div className="form mb-3" id="grupo_hora">
          <label htmlFor="" className="form_label">{label}</label>
          <input type={inputType}  name="hora"  defaultValue={hora}  className="item-formulario form-control" id="" />                
          <p className="form-text">{leyenda}</p>
      </div>
    )
  }else{
    return (
        <div className="mb-3">
        <label htmlFor="" className=" form-label">{label}</label>
        <input type={inputType} placeholder = {placeholder} className="form-control" id=""/>
        <div id="" className="form-text">{leyenda}</div>
        </div>
    )
  }
}

export default ComponenteInput
