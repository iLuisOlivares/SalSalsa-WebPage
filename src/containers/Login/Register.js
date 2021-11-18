import React from 'react';
import "./login.css";

export default function Register() {



    return (
        <div className="formu">
            <h1 className="titulo">Registro</h1>
            <input placeholder="Usuario" className="inputFormu" />

            <input placeholder="Contraseña" className="inputFormu" />

            <input placeholder="Contraseña" className="inputFormu" />

            <label className="subTitulo">Datos importantes</label>
            <input placeholder="Nombre" className="inputFormu" />
            <input placeholder="Apellido" className="inputFormu" />
            <input placeholder="Correo Elétronico" className="inputFormu" />


            <label>
                <input
                    name="isGoing"
                    type="checkbox"
                />
                  Terminos y condiciones
            </label>
            <div>
            <div>
                <label></label>
            </div>
            <div></div>
            <button className="btn-r" >
                Registrarse
            </button>
            </div>
            <div>
                <label></label>
            </div>
            <div></div>
            <div>
                <label></label>
            </div>
            <div></div>
            <div>
                <label></label>
            </div>
            <div></div>
            
        </div>
    )
}
