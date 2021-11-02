import React from 'react'
import imagen from '../assets/Img/img1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ContainerImgStyled, divContainerStyled, ImagenStyled, InputCompraStyled } from '../assets/Elements/Carrito';

function ItemsCarrito({nombre,descripcion, precio,id, cantidad, carrito,setCarrito}) {

    const eliminarItem = (id) =>{
        const lista = carrito.filter(item => item.id !== id);
        setCarrito(lista);
    }

    const validacion = (e) => {
        const lista = [];
        console.log(e.target.id);
        for (const iterator of carrito) {
            if(iterator.id == e.target.id){
                iterator.cantidad = e.target.value;
            }
            lista.push(iterator);
        }
        console.log(lista);
        setCarrito(lista);
    }


    const onChange = (id,e) =>{
        const lista = [];
        for (const iterator of carrito) {
            if(iterator.id === id){
                iterator.cantidad = e.target.value;
            }
            lista.push(iterator);
        }
        setCarrito(lista);
    }


    const modificarItem = (id,cantidad) =>{
        const lista = carrito.filter(item => item.id !== id);
        setCarrito([...carrito,]);
    }

    return (
            <divContainerStyled class="card mb-3" data-id = {id}>
                <div class="row g-0">
                    <ContainerImgStyled className="col-md-4">
                    <ImagenStyled src= {imagen} className="rounded-center" alt="..."/>
                    </ContainerImgStyled>
                    <div class="col-md-8">
                        
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">{nombre}</h5>
                                <button type="button" onClick={() => eliminarItem(id)} class="btn btn-danger ">Eliminar
                                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                </button>
                            </div>
                            <p class="card-text">{descripcion}</p>
                            <p class="card-text">{precio}</p>
                            <InputCompraStyled type="number" id={id} class="shoppingImput" onChange={validacion} value={cantidad} />
                        </div>
                    </div>
                </div>
            </divContainerStyled>

            
    )
}

export default ItemsCarrito
