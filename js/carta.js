
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  // Delete the duplicate image
  let div = document.getElementById("o-value-plato-image");
  div.removeChild(div.lastElementChild);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    let div = document.getElementById("o-value-plato-image");
    div.removeChild(div.lastElementChild);
  }
};

const determinarPlato = (v) => {
  modal.style.display = "block";
  var img = document.createElement("img");
  console.log(platos);

  switch (v) {  
    case 1:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_1.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_1.descripcion;
      img.src = platos.plato_1.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 2:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_2.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_2.descripcion;
      img.src = platos.plato_2.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 3:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_3.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_3.descripcion;
      img.src = platos.plato_3.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 4:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_4.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_4.descripcion;
      img.src = platos.plato_4.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 5:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_5.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_5.descripcion;
      img.src = platos.plato_5.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 6:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_6.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_6.descripcion;
      img.src = platos.plato_6.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 7:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_7.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_7.descripcion;
      img.src = platos.plato_7.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 8:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_8.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_8.descripcion;
      img.src = platos.plato_8.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 9:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_9.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_9.descripcion;
      img.src = platos.plato_9.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 10:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_10.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_10.descripcion;
      img.src = platos.plato_10.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 11:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_11.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_11.descripcion;
      img.src = platos.plato_11.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 12:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_12.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_12.descripcion;
      img.src = platos.plato_12.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 13:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_13.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_13.descripcion;
      img.src = platos.plato_13.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 14:
      document.getElementById("o-value-plato-titulo").innerHTML = platos.plato_13.nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos.plato_13.descripcion;
      img.src = platos.plato_14.imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
  }
}

const data = {
  plato1: {
    titulo: "Primero plato",
    descripcion: "Primero plato del menu",
  },
  plato2: {
    titulo: "Segundo plato",
    descripcion: "Primero plato del menu",
  },
};
