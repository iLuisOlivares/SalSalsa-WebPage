//Instancias html
const boton_agregar = document.getElementById("btn__agregar");
const nombre_plato_dom = document.getElementById("o-value-plato-titulo");
const cantidad_dom = document.getElementById("id_cantidad");

//Array con la informacion de todos los platos
const platos = [
  (p1 = {
    nombre: "Combo 1 hamburguesa",
    id: 1,
    precio: 15000,
    imagen: "./assets/img/menu/img1.jpg",
    descripcion: "Combo de hamburguesa, con papas y refresco",
  }),
  (p2 = {
    nombre: "Combo 2 hamburguesa",
    id: 2,
    precio: 10000,
    imagen: "./assets/img/menu/img2.jpg",
    descripcion: "Combo de hamburguesa y papas",
  }),
  (p3 = {
    nombre: "Hamburguesa sencilla",
    id: 3,
    precio: 5000,
    imagen: "./assets/img/menu/img3.jpg",
    descripcion: "Hamburguesa con carne, tomate y demás vegetales.",
  }),
  (p4 = {
    nombre: "Combo Hot Dog",
    id: 4,
    precio: 15000,
    imagen: "./assets/img/menu/img4.jpg",
    descripcion: "Combo 1 de Hot dog y papas.",
  }),
  (p5 = {
    nombre: "Hot Dog Sencillo",
    id: 5,
    precio: 10000,
    imagen: "./assets/img/menu/img5.jpg",
    descripcion: "Hot dog sencillo con salsa.",
  }),
  (p6 = {
    nombre: "Copa de papas sencillo",
    id: 6,
    precio: 7000,
    imagen: "./assets/img/menu/img6.jpg",
    descripcion: "Copa de papas con guacamole.",
  }),
  (p7 = {
    nombre: "Papas sencillas",
    id: 7,
    precio: 5000,
    imagen: "./assets/img/menu/img7.jpg",
    descripcion: "Papas a la francesa sencilla",
  }),
  (p8 = {
    nombre: "2 Latas de Coca Cola",
    id: 8,
    precio: 7000,
    imagen: "./assets/img/menu/img8.jpg",
    descripcion: "Latas de Coca Cola, con limón y hielo",
  }),
  (p9 = {
    nombre: "Jarra con limonada",
    id: 9,
    precio: 8000,
    imagen: "./assets/img/menu/img9.jpg",
    descripcion: "Jarra con limonada de 1/2 litro.",
  }),
  (p10 = {
    nombre: "Jarra de agua",
    id: 10,
    precio: 7000,
    imagen: "./assets/img/menu/img10.jpg",
    descripcion: "Jarra de agua de 1/2 litro.",
  }),
  (p11 = {
    nombre: "Pizza Italiana",
    id: 11,
    precio: 15000,
    imagen: "./assets/img/menu/img11.jpg",
    descripcion: "Pizza Italiana de 8 porciones.",
  }),
  (p12 = {
    nombre: "Pizza personal italiana",
    id: 12,
    precio: 5000,
    imagen: "./assets/img/menu/img12.jpg",
    descripcion: "Pizza Italiana para 1 persona.",
  }),
  (p13 = {
    nombre: "Copa de helado",
    id: 13,
    precio: 3000,
    imagen: "./assets/img/menu/img13.jpg",
    descripcion: "Copa de helado de 1 sabor con uvas.",
  }),
  (p14 = {
    nombre: "Cono de helado",
    id: 14,
    precio: 4000,
    imagen: "./assets/img/menu/img14.png",
    descripcion: "Cono de helado con 2 bolas de diferentes sabores.",
  }),
];

//PRIMERA PARTE

//clase para la creacion de los objetos del carrito
class PlatoObjeto {
  //Metodo statico que me permite generar las instancias del objeto
  //desde el local storage
  static fromJson({ id, cantidad }) {
    const platoTemporal = new PlatoObjeto(id, cantidad);

    return platoTemporal;
  }

  //constructor del objeto
  constructor(id, cantidad) {
    for (const iterator of platos) {
      if (iterator.id === id) {
        this.nombre = iterator.nombre;
        this.id = iterator.id;
        this.precio = iterator.precio;
        this.imagen = iterator.imagen;
        this.cantidad = cantidad;
        this.descripcion = iterator.descripcion;
      }
    }
  }
  //Calcula el precio
  calcularPrecio() {
    return this.precio * this.cantidad;
  }
}

//Funciones

//Inicializa el array y obtiene el localStorage
const Inicializador = () => {
  //Array de productos
  console.log("Inicializado");
  const carritoLista = [];
  getLocalstorage();
};


//Agrega un objeto tipo plato al array
const AgregarPlato = (plato) => {
  for (const iterator of carritoLista) {
    if (iterator.id === plato.id) {
      iterator.cantidad = parseInt(iterator.cantidad) + plato.cantidad;
      setLocalstorage();
      return;
    }
  }
  carritoLista.push(plato);
  setLocalstorage();
};

//Obtiene el array del local storage
const getLocalstorage = () => {
  //JSON.parse() regresar un archivo JSON a objeto
  if (localStorage.getItem("Carrito")) {
    carritoLista = JSON.parse(localStorage.getItem("Carrito"));
    carritoLista = carritoLista.map((obj) => PlatoObjeto.fromJson(obj));
    return carritoLista;
  } else {
    carritoLista = [];
  }
};

//Actualiza los datos modificados en el local storage
const setLocalstorage = () => {
  //Json.stringify sirve para volver un Objeto a un string que
  //se guarda en un archivo JSON
  localStorage.setItem("Carrito", JSON.stringify(carritoLista));
};

//Muestra el carrito
const mostrarCarrito = () => {
  console.log(carritoLista);
  return carritoLista;
};

//Elimina un plato atraves del id
const eliminarPlatoId = (id) => {
  carritoLista = carritoLista.filter((plato) => plato.id != id);
  setLocalstorage();
};

//Elimina un plato atraves del nombre
const eliminarPlatoName = (nombre) => {
  carritoLista = carritoLista.filter((plato) => plato.nombre != nombre);
  setLocalstorage();
};

//Actualizar cantidad
const actualizar_cantidad = (id, nCantidad) =>{
for (const iterator of carritoLista) {
  if(iterator.id == id ){
    iterator.cantidad = nCantidad;
    setLocalstorage();
    console.log(nCantidad);
    return id;
  }
}

}

//Elimina todo el array
const eliminarCarrito = () => {
  carritoLista = [];
  setLocalstorage();
};
// Imprime en consola los valores de un elemento
const getASpecificValue = (id) => {
  console.log("El tamaño es:", JSON.parse(localStorage.getItem("Carrito"))[id]);
};


//Inicializar
Inicializador();

//Descomentar si desea eliminar el array
// eliminarCarrito();

//Listeners
//Click  boton agregar al carrito
boton_agregar.addEventListener("click", () => {

  Swal.fire({
    title: '¿Estas seguro?',
    text: `Agregarás ${cantidad_dom.value} de este producto al carrito `,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, agregar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '¡Se agregó!',
        'El producto se agrego al carrito.',
        'success'
      )
        for (const iterator of platos) {
        if (nombre_plato_dom.textContent === iterator.nombre) {
          const cantidad = parseInt(cantidad_dom.value);
          console.log(new PlatoObjeto(iterator.id, cantidad));
          AgregarPlato(new PlatoObjeto(iterator.id, cantidad));
          break;
        }
      }

      mostrarCarrito();
      cantidad_dom.value = 1;
      CloseModal();
    }
  })

  
});

  // Cerrar el modal al undir agregar carrito
function CloseModal() {
  modal.style.display = "none";
  let div = document.getElementById("o-value-plato-image");
  div.removeChild(div.lastElementChild);
}