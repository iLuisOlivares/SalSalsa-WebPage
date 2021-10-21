import React from 'react'

function SelectElement() {
    return (
            <div className="mb-3 mt-4" id="grupo_select">
                <label className="form-label ">Seleccione el servicio</label>
                <select defaultValue="Seleccionar" name="select" id="select-id" className="item-formulario form-select">
                    <option>Seleccionar</option>
                    <option> Celebración de cumpleaños </option>
                    <option> Aniversarios </option>
                    <option> Fiestas infantiles </option>
                    <option> Declaraciones o propuestas </option>
                    <option> Despedidas </option>
                    <option> Cena con amigos </option>
                    <option> Otro </option>
                </select>
                <p className="form-text">Seleccione un servicio</p>
            </div>
    )
}

export default SelectElement
