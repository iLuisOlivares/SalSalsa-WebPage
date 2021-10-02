//SEGUNDA PARTE
//Instancias HTML
const div_list = document.querySelector("#container-list");
const costo = document.getElementById("costo-total");

const crearListHtml = ({ nombre, cantidad, precio, imagen, descripcion }) => {
  const html = `<div class="card mb-3 o-fix-card-carrito"> 
                  <div class="row g-0">
                      <div class="col-md-4">
                        <img src= ${imagen} class="img-fluid rounded-start" alt="Imagen de la compra">
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <section class="o-item-delete-style">
                                  <h5 class="card-title">${nombre}</h5>
                                  <button type="button" class="btn btn-danger" onclick="alert('¿Estas seguro de eliminar este producto?')">Eliminar
                                      <i class="fas fa-trash-alt"></i>
                                  </button>
                              </section>
                              <p class="card-text">${descripcion}</p>
                              <p class="card-text">${precio}</p>
                              <input type="number" id="id_cantidad" class="shoppingImput" value=${cantidad} style="max-width: 3rem;border: 2px solid rgba(182, 6, 6, 0.8); border-radius: 5px; margin-left: 1px" min=1 />
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

//Inicializar en 0
let precio_total = 0;
carritoLista.forEach((element) => {
  crearListHtml(element);
  console.log(element);
  precio_total =  element.calcularPrecio(); + precio_total;
  console.log(precio_total);
});

costo.innerText = new Intl.NumberFormat().format(precio_total);


for (const iterator of carritoLista) {
  // const costo_final = 0;
  // costo_final = costo_final + iterator.calcularPrecio();
  // console.log(costo_final);
}
