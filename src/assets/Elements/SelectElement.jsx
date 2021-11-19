import React from 'react';
import { LabelStyled} from './Formularios';

function SelectElement() {
    return (
            <div className="mb-4 " id="grupo_select">
                <LabelStyled className="form-label ">Seleccione el servicio</LabelStyled>
                <select  defaultValue="Reunion" name="select" id="select-id" className="item-formulario form-select">
                    <option> Reunion</option>
                    <option> Celebración de cumpleaños </option>
                    <option> Aniversarios </option>
                    <option> Fiestas infantiles </option>
                    <option> Declaraciones o propuestas </option>
                    <option> Despedidas </option>
                    <option> Cena con amigos </option>
                    <option> Otro </option>
                </select>
            </div>
    )
}

export default SelectElement
