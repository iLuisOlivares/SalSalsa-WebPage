import React from 'react'

function CheckElement() {
    return (
        <div class="mb-3 form-check" id="">
        <label class="form-check-label" htmlFor="check">Acepto términos y condiciones</label>
        <input name="check" type="checkbox" class="item-formulario form-check-input" id="check"/>
        <p class="form-text">Por favor acepte términos y condiciones</p>
        </div>
    )
}

export default CheckElement
