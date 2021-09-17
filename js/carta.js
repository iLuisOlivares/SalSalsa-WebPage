// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  // Delete the duplicate image
  let div = document.getElementById('o-value-plato-image');
  div.removeChild(div.lastElementChild);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    let div = document.getElementById('o-value-plato-image');
    div.removeChild(div.lastElementChild);
  }
}

function determinarPlato(v) {
  modal.style.display = "block";
  var img = document.createElement("img");
  
  if(v == 1){
    document.getElementById("o-value-plato-titulo").innerHTML = "Combo 1 hamburguesa";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Combo de hamburguesa, con papas y refresco";
    img.src = 'http://localhost/proyecto/assets/img/menu/img1.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 2) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Combo 2 hamburguesa";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Combo de hamburguesa y papas";
    // var img = document.createElement("img");
    img.src = 'http://localhost/proyecto/assets/img/menu/img2.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 3) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Hamburguesa sencilla";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Hamburguesa con carne, tomate y demás vegetales.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img3.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 4) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Combo Hot Dog";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Combo 1 de Hot dog y papas.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img4.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 5) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Hot Dog Sencillo";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Hot dog sencillo con salsa.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img5.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 6) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Copa de papas sencillo";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Copa de papas con guacamole.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img6.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 7) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Papas sencillas";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Papas a la francesa sencilla";
    img.src = 'http://localhost/proyecto/assets/img/menu/img7.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 8) {
    document.getElementById("o-value-plato-titulo").innerHTML = "2 Latas de Coca Cola";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Latas de Coca Cola, con limón y hielo";
    img.src = 'http://localhost/proyecto/assets/img/menu/img8.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 9) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Jarra con limonada";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Jarra con limonada de 1/2 litro.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img9.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 10) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Jarra de agua";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Jarra de agua de 1/2 litro.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img10.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 11) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Pizza de Italiana";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Pizza Italiana con 8 porciones.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img11.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 12) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Pizza personal Italiana";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Pizza Italiana para 1 persona.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img12.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 13) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Copa de helado";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Copa de helado de 1 sabor con uvas.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img13.jpg';
    document.getElementById("o-value-plato-image").appendChild(img);
  } else if(v == 14) {
    document.getElementById("o-value-plato-titulo").innerHTML = "Cono de helado";
    document.getElementById("o-value-plato-descripcion").innerHTML = "Cono de helado con 2 bolas de diferentes sabores.";
    img.src = 'http://localhost/proyecto/assets/img/menu/img14.png';
    document.getElementById("o-value-plato-image").appendChild(img);
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
