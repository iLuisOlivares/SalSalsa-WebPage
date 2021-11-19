import React from 'react'
import { LabelStyled} from './Formularios';

function CheckElement({estado,cambiarEstado}) {

    const onChangeTerminos = (e) =>{
        cambiarEstado(e.target.checked);
    }

    return (
        <div className="mt-2 mb-3 form-check" id="">
        <LabelStyled className="form-check-label" htmlFor="check">Acepto términos y condiciones</LabelStyled>
        <input name="check" checked={estado} onChange={onChangeTerminos} type="checkbox" className="item-formulario form-check-input" id="check"/>
        </div>
    )
}

export default CheckElement
