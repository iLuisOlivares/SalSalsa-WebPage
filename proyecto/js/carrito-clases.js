//Instancias html
const boton_agregar = document.getElementById("btn__agregar");
const nombre_plato_dom = document.getElementById("o-value-plato-titulo");
const cantidad_dom = document.getElementById("id_cantidad");

//Array con la informacion de todos los platos
const platos = [
  (p1 = {
    nombre: "Combo 1 hamburguesa",
    id: 1,
    precio: 10000,
    imagen: "./assets/img/menu/img1.jpg",
    descripcion: "Combo de hamburguesa, con papas y refresco",
  }),
  (p2 = {
    nombre: "Combo 2 hamburguesa",
    id: 2,
    precio: 8000,
    imagen: "./assets/img/menu/img2.jpg",
    descripcion: "Combo de hamburguesa y papas",
  }),
  (p3 = {
    nombre: "Hamburguesa sencilla",
    id: 3,
    precio: 6000,
    imagen: "./assets/img/menu/img3.jpg",
    descripcion: "Hamburguesa con carne, tomate y demás vegetales.",
  }),
  (p4 = {
    nombre: "Combo Hot Dog",
    id: 4,
    precio: 10000,
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
    precio: 10000,
    imagen: "./assets/img/menu/img6.jpg",
    descripcion: "Copa de papas con guacamole.",
  }),
  (p7 = {
    nombre: "Papas sencillas",
    id: 7,
    precio: 10000,
    imagen: "./assets/img/menu/img7.jpg",
    descripcion: "Papas a la francesa sencilla",
  }),
  (p8 = {
    nombre: "2 Latas de Coca Cola",
    id: 8,
    precio: 10000,
    imagen: "./assets/img/menu/img8.jpg",
    descripcion: "Latas de Coca Cola, con limón y hielo",
  }),
  (p9 = {
    nombre: "Jarra con limonada",
    id: 9,
    precio: 6000,
    imagen: "./assets/img/menu/img9.jpg",
    descripcion: "Jarra con limonada de 1/2 litro.",
  }),
  (p10 = {
    nombre: "Jarra de agua",
    id: 10,
    precio: 1000,
    imagen: "./assets/img/menu/img10.jpg",
    descripcion: "Jarra de agua de 1/2 litro.",
  }),
  (p11 = {
    nombre: "Pizza de Italiana",
    id: 11,
    precio: 10000,
    imagen: "./assets/img/menu/img11.jpg",
    descripcion: "Pizza Italiana de 8 porciones.",
  }),
  (p12 = {
    nombre: "Pizza personal italiana",
    id: 12,
    precio: 10000,
    imagen: "./assets/img/menu/img12.jpg",
    descripcion: "Pizza Italiana para 1 persona.",
  }),
  (p13 = {
    nombre: "Copa de helado",
    id: 13,
    precio: 10000,
    imagen: "./assets/img/menu/img1.jpg",
    descripcion: "Copa de helado de 1 sabor con uvas.",
  }),
  (p14 = {
    nombre: "Cono de helado",
    id: 14,
    precio: 10000,
    imagen: "./assets/img/menu/img1.jpg",
    descripcion: "Cono de helado con 2 bolas de diferentes sabores.",
  }),
];
//CLASES

//Clase de una lista de platos llamada carrito
class carritosList {
  constructor() {
    this.getLocalstorage();
  }

  nuevoPlato(plato) {
    for (const iterator of this.carritoLista) {
      if (iterator.id === plato.id) {
        iterator.cantidad = parseInt(iterator.cantidad) + plato.cantidad;
        this.setLocalstorage();
        return;
      }
    }
    this.carritoLista.push(plato);
    this.setLocalstorage();
  }

  eliminarPlato(id) {
    this.carritoLista = this.carritoLista.filter((plato) => plato.id != id);
    this.setLocalstorage();
  }

  eliminarCarrito() {
    this.carritoLista = [];
    this.setLocalstorage();
  }

  mostrarCarrito() {
    console.log(this.carritoLista);
    return this.carritoLista;
  }

  //Update del local storage
  setLocalstorage() {
    //Json.stringify sirve para volver un Objeto a un string que
    //se guarda en un archivo JSON
    localStorage.setItem("Carrito", JSON.stringify(this.carritoLista));
  }

  //Creacion del array
  getLocalstorage() {
    //JSON.parse() regresar un archivo JSON a objeto
    if (localStorage.getItem("Carrito")) {
      this.carritoLista = JSON.parse(localStorage.getItem("Carrito"));
      return this.carritoLista;
    } else {
      this.carritoLista = []
    }
  }

  // Imprime en consola los valores de un elemento
  getASpecificValue(id) {
    console.log(
      "El tamaño es:",
      JSON.parse(localStorage.getItem("Carrito"))[id]
    );
  }
}

//clase para la creacion de los objetos del carrito
class platoObjeto {
  constructor(id, cantidad, platos) {
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

  calcularPrecio() {
    return this.precio * this.cantidad;
  }
}

//Array de platos
const carroList = new carritosList();
//Todos 3 devuelven el array de los platos
console.log(carroList.carritoLista);  // array 
console.log(carroList.getLocalstorage()); // array
const carritoarray = carroList.mostrarCarrito() // array
console.log(carritoarray);

/* carroList.eliminarCarrito(); */
//Listeners
boton_agregar.addEventListener("click", () => {
  for (const iterator of platos) {
    if (nombre_plato_dom.textContent === iterator.nombre) {
      const cantidad = parseInt(cantidad_dom.value);
      const platillo = new platoObjeto(iterator.id, cantidad, platos);
      console.log(platillo);
      carroList.nuevoPlato(platillo);
      break;
    }
  }
  carroList.mostrarCarrito();
});
carroList.getASpecificValue(0);

boton_agregar.onclick = function () {
  modal.style.display = "none";
  // Delete the duplicate image
  let div = document.getElementById("o-value-plato-image");
  div.removeChild(div.lastElementChild);
  cantidad_dom.value = 1;
};
