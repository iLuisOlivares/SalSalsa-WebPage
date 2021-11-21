import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";





function ItemComentario({cliente,comentario ,fecha,respuestas,cambiar}) {    


    
  const eliminarItem = (id) => {
    const lista = respuestas.filter((item) => item.id !== id);
    eliminarComentarios(cliente)
    console.log(lista);
    if(lista !== ''){
      cambiar(lista);
    }else{
      cambiar([]);
    }
    };

    
    const eliminarComentarios = async(id) =>{
        const resp = await fetch("https://61955d6c74c1bd00176c6d13.mockapi.io/api/v1/comments/"+ id,{
        method: 'DELETE'
        }
        );
        return(resp.ok) ? 'Borrado':'No se elimino';
    
      }

        return (
    
            <div style = {{backgroundColor: "rgba(28, 27, 29, 0.836)"}}className="conte text-light">
    
            <div className="d-flex justify-content-around">
            <p className="m-2 ">Cliente: {cliente}</p>

            <p className="m-2 fw-lighter fw-lighter">{fecha}</p>
                <button onClick={()=>{eliminarItem(cliente)}} className="m-2 btn btn-danger">   <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
            
            <div style={{backgroundColor:"#f1eded"}} className=" text-dark d-flex justify-content-around">
    
            <p className="m-0 p-3">{comentario}</p>    
    
            </div>
    
        </div>
    
        )




}

export default ItemComentario
