import React, { Component }  from 'react';
import { useHistory } from "react-router";
import UseAuth from "../Login/auth/useAuth";
import "./login.css"

export default function Login() {

    const history = useHistory();

    const auth = UseAuth();

    const handleLogin = () =>{
        auth.login();
        history.push("/inicioAdmin");
    }


    return(
        <div>

            <div className="formu">
            <h1 className="titulo">Inicio de sesión</h1>
            <input placeholder="Usuario" className="inputFormu" />

            <input placeholder="Contraseña" className="inputFormu" />

            <div>
                <label></label>
            </div>
            <button onClick={handleLogin} className="btn-r">
                Entrar 
            </button>
            </div>
            <div>
                <label></label>
            </div>
        </div>
    )
}
