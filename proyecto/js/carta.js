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
    cantidad_dom.value = 1;
  }
};

const determinarPlato = (v) => {
  modal.style.display = "block";
  var img = document.createElement("img");

  switch (v) {  
    case 1:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[0].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[0].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[0].precio);
      img.src = platos[0].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 2:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[1].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[1].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[1].precio);
      img.src = platos[1].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 3:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[2].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[2].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[2].precio);
      img.src = platos[2].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 4:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[3].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[3].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[3].precio);
      img.src = platos[3].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 5:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[4].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[4].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[4].precio);
      img.src = platos[4].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 6:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[5].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[5].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[5].precio);
      img.src = platos[5].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 7:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[6].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[6].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[6].precio);
      img.src = platos[6].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 8:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[7].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[7].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[7].precio);
      img.src = platos[7].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 9:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[8].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[8].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[8].precio);
      img.src = platos[8].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 10:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[9].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[9].descripcion;
      document.getElementById("o-value-plato-price").innerHTML =new Intl.NumberFormat().format( platos[9].precio);
      img.src = platos[9].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 11:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[10].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[10].descripcion;
      document.getElementById("o-value-plato-price").innerHTML = new Intl.NumberFormat().format(platos[10].precio);
      img.src = platos[10].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 12:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[11].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[11].descripcion;
      document.getElementById("o-value-plato-price").innerHTML = new Intl.NumberFormat().format(platos[11].precio);
      img.src = platos[11].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 13:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[12].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[12].descripcion;
      document.getElementById("o-value-plato-price").innerHTML = new Intl.NumberFormat().format(platos[12].precio);
      img.src = platos[12].imagen;
      document.getElementById("o-value-plato-image").appendChild(img);
      break;
    case 14:
      document.getElementById("o-value-plato-titulo").innerHTML = platos[13].nombre;
      document.getElementById("o-value-plato-descripcion").innerHTML = platos[13].descripcion;
      document.getElementById("o-value-plato-price").innerHTML = new Intl.NumberFormat().format(platos[13].precio);
      img.src = platos[13].imagen;
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

