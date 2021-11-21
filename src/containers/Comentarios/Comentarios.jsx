import React from 'react'
import Input from '../../components/ComponenteInput'
import { useState , useEffect} from 'react';
import ComentariosDiv from '../../components/ComentariosDiv';


const expresiones = {

    descripcion: /^[a-zA-ZÀ-ÿ\s\W]{1,}$/, // Letras y espacios, pueden llevar acentos.
}


const style1= {
    height: "500px",
	background: "#ffffff",
	overflowY: "scroll",
    wordWrap: "break-word",
}


function Comentarios() {

    const [mensaje, cambiarMensaje] = useState({ campo: "", valido: null });
    const [respuestas, cambiarRespuetas] = useState([]);

    useEffect(()=>{
        console.log('si');
        obtenerComentarios();

    }, [])

    const obtenerComentarios = async () =>{
        const data = await fetch('https://61955d6c74c1bd00176c6d13.mockapi.io/api/v1/comments');
        const resp = await data.json();
        console.log(resp);
        cambiarRespuetas(resp)

    }

    return (
        <div className="container">
            <h2 className="p-4">Comentarios</h2>

            <Input
                estado={mensaje}
                cambiarEstado={cambiarMensaje}
                label="Mensaje"
                placeholder="Deja tu mensaje"
                inputType="text"
                leyenda="Escriba un mensaje valido"
                expresionRegular={expresiones.descripcion}
              />
            <div>

                <div  className="shadow container rounded" style={style1}>

                    <div className="m-3">

                    {
                        respuestas.map(( resp) => (
                            <ComentariosDiv
                            key = {resp.id}
                            usuario = {resp.id}
                            mensaje = {resp.Mensaje}
                            fecha = {resp.fecha}
                            ></ComentariosDiv>
                        )
                        )}

            
                    </div>


                </div>

            </div>
            
        </div>
    )
}

export default Comentarios
