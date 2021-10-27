import React from 'react'
import imagen from '../assets/Img/img1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { divContainerStyled, InputCompraStyled } from '../assets/Elements/Carrito';

function ItemsCarrito({nombre,descripcion, precio,id, cantidad}) {
    return (
            <divContainerStyled class="card mb-3" data-id = {id}>
                <div class="row g-0">
                    <div className="col-md-4">
                    <img src= {imagen} className="img-fluid rounded-center" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">{nombre}</h5>
                                <button type="button" class="btn btn-danger ">Eliminar
                                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                </button>
                            </div>
                            <p class="card-text">{descripcion}</p>
                            <p class="card-text">{precio}</p>
                            <InputCompraStyled type="number" id="id_cantidad" class="shoppingImput" value={cantidad} />
                        </div>
                    </div>
                </div>
            </divContainerStyled>

            
    )
}

export default ItemsCarrito
