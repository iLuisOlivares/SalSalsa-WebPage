//SEGUNDA PARTE
//Instancias HTML
const div_list = document.querySelector("#container-list");
const costo = document.getElementById("costo-total");

const crearListHtml = ({ nombre,id, cantidad, precio, imagen, descripcion }) => {
  const html = `<div class="card mb-3 o-fix-card-carrito" data-id = '${id}'>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src= ${imagen} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <section class="o-item-delete-style">
                                <h5 class="card-title">${nombre}</h5>
                                <button type="button" class="btn btn-danger">Eliminar
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </section>
                            <p class="card-text">${descripcion}</p>
                            <p class="card-text">${new Intl.NumberFormat().format(precio)}</p>
                            <input type="number" id="id_cantidad" class="shoppingImput" value='${cantidad}' style="max-width: 3rem;border: 2px solid rgba(182, 6, 6, 0.8); border-radius: 5px; margin-left: 1px" min=1 />
                        </div>
                    </div>
                </div>
            </div>`;

  //createElement crea una nueva etiqueta HTML
  const div = document.createElement("div");
  //con el innerHTML se puede integras bloques de codigo a una etiqueta HTML
  div.innerHTML = html;
  //append sirve para agregar una etiqueta dentro de otra
  div_list.append(div.firstElementChild);

  return div;
};


//Funcion que actualiza el precio
const actualizar_precio = () =>{
  //Inicializar en 0
  let precio_total = 0;
  for (const iterator of carritoLista) {
    precio_total =  iterator.calcularPrecio() + precio_total;
    console.log(precio_total);    
  }
  costo.innerText = new Intl.NumberFormat().format(precio_total);
}

//Funcion que muestra array en el dom
carritoLista.forEach((element) => {
  crearListHtml(element);
  console.log(element);
  
});
actualizar_precio();

//Listeners
div_list.addEventListener('click', (e) =>{
  
  const target = e.target.localName;
  console.log(target);

  if(target == 'button'){
    const targetElement = (e.target.parentElement.parentElement.parentElement.parentElement.parentElement); //div
    //Get attribute nos ayuda a sacar el valor de los atributos HTML(ej data-*)
    const targetId = targetElement.getAttribute('data-id');
    
    /* API de sweet Alert */
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Elimaras el producto del carrito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Se eliminó!',
          'El producto ha sido eliminado.',
          'success'
        )
        /* Elimina el producto del carrito */
        eliminarPlatoId(targetId);
        actualizar_precio();
        div_list.removeChild(targetElement);
      }
    })
  }

  if(target == 'input'){
    const targetElement2 = e.target.parentElement.parentElement.parentElement.parentElement;
    const targetID = targetElement2.getAttribute('data-id');
    const targetValue = e.explicitOriginalTarget.value;
    actualizar_cantidad(targetID,targetValue);
    actualizar_precio();
  }

});