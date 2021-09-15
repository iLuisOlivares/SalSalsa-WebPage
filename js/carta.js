

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function(num) {
//   modal.style.display = "block";
//   
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function determinarPlato(v) {
  modal.style.display = "block";
  // document.getElementById("o-value-plato").innerHTML = v;

  if(v == 1){
    document.getElementById("o-value-plato-titulo").innerHTML = "Combo 1 hamburguesa";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Combo de hamburguesa, con papas y refresco";
  } else if(v == 2) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Combo 2 hamburguesa";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Combo de hamburguesa y papas";
  } else if(v == 3) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Hamburguesa sencilla";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Hamburguesa con carne, tomate y demás vegetales.";
  } else if(v == 4) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Combo Hot Dog";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Combo 1 de Hot dog y papas.";
  } else if(v == 5) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Hot Dog Sencillo";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Hot dog sencillo con salsa.";
  } else if(v == 6) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Copa de papas sencillo";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Copa de papas con";
  } else if(v == 7) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Papas sencillas";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Papas a la francesa sencilla";
  } else if(v == 8) {
    document.getElementById("o-value-plato-titulo").innerHTML = "2 Latas de Coca Cola";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Latas de Coca Cola, con limón y hielo";
  } else if(v == 9) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Jarra con limonada";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Jarra con limonada de 1/2 litro.";
  } else if(v == 10) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Jarra de agua";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Jarra de agua de 1/2 litro.";
  } else if(v == 11) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Pizza de Italiana";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Pizza Italiana con 8 porciones.";
  } else if(v == 12) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Pizza personal Italiana";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Pizza Italiana para 1 persona.";
  } else if(v == 13) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Copa de helado";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Copa de helado de 1 sabor con uvas.";
  } else if(v == 14) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Cono de helado";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Cono de helado con 2 bolas de diferentes sabores.";
  }
  

}

const data = {
  plato1 : {
      titulo : "Primero plato",
      descripcion : "Primero plato del menu",
  },
  plato2 : {
      titulo :  "Segundo plato",
      descripcion : "Primero plato del menu",
  }
};
