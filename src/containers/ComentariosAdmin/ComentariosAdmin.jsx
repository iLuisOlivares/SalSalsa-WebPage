import React from "react";
import { useState, useEffect } from "react";
import ItemComentario from "./itemComentario";


function ComentariosAdmin() {

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
    <div className="m-3">
      <div className="container">
        <div style={{ minHeight: "200px" }} className="srow">
          <div className="col-12">
            <div className="">
              <div className="nav-r">
                <div className="text-light px-2 py-2 d-flex  justify-content-around filtros">
                  <h5 className="m-0">Administrar comentarios</h5>

                </div>
       
              </div>

              <div className="body-r">
               
                {
                    respuestas.map((resp) =>(

                        <ItemComentario
                        key  = {resp.id}
                        cliente = {resp.id}
                        comentario = {resp.Mensaje}
                        fecha ={resp.fecha}
                        respuestas = {respuestas}
                        cambiar = {cambiarRespuetas}
                        >
                        </ItemComentario>

                    )
                    )
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComentariosAdmin;
