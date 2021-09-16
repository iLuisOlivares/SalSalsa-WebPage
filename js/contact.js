//Variables Html
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll(".item-formulario");
const text = document.querySelector("#descripcion-id");
const select = document.getElementById("select-id");
const check = document.getElementById("check-id");
const submit = document.getElementById("button-id");
const alert_ok = document.getElementById("alert-ok");
const alert_notok = document.getElementById("alert-notok");

//Expresiones regulares
const expresiones = {
  comprobacion: /^[a-zA-ZÀ-ÿ\s\W]{1,}$/,
  asunto: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,50}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  // telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  descripcion: /^[a-zA-ZÀ-ÿ\s\W]{0,}$/, // Letras y espacios, pueden llevar acentos.
};

//Objeto campos
const campos = {
  select: false,
  asunto: false,
  nombre: false,
  correo: false,
  descripcion: false,
  check: false,
};

//funciones

//Mensaje de comprobacion
const msg = (elemento, tipo) => {
  if (campos[elemento]) {
    document
      .querySelector(`#grupo_${elemento} .msg${tipo}__input-error`)
      .classList.remove(`msg${tipo}__input-error-activo`);
  } else {
    document
      .querySelector(`#grupo_${elemento} .msg${tipo}__input-error`)
      .classList.add(`msg${tipo}__input-error-activo`);
  }
};

//Comprobacion general
const comprobacion = (expresion, event, elemento, tipo) => {
  if (expresion.test(event.target.value)) {
    campos[elemento] = true;
  } else {
    campos[elemento] = false;
  }

  msg(elemento, tipo);
};

//Comprueba elemento en el nos encontramos
const validacion = (event) => {
  switch (event.target.name) {
    case "select":
      if (select.value == "Seleccionar") {
        campos["select"] = false;
      } else {
        campos["select"] = true;
      }
      msg("select", "");
      break;
    case "asunto":
      comprobacion(expresiones.comprobacion, event, "asunto", "");
      comprobacion(expresiones.asunto, event, "asunto", "2");
      break;
    case "nombre":
      comprobacion(expresiones.comprobacion, event, "nombre", "");
      comprobacion(expresiones.nombre, event, "nombre", "2");

      break;
    case "correo":
      comprobacion(expresiones.correo, event, "correo", "");
      break;
    case "descripcion":
      comprobacion(expresiones.comprobacion, event, "descripcion", "");
      comprobacion(expresiones.descripcion, event, "descripcion", "2");
      break;

    case "check":
      if (!check.checked) {
        campos["check"] = false;
      } else {
        campos["check"] = true;
      }
      msg("check", "");
      break;
  }
};


//Listeners
//La diferencia entre inputs y formulario es que uno es un arreglo y la etiqueta form original
console.log(inputs);
console.log(formulario);

//Listener de inputs que hace referencia a cada item del formulario guardado en forma de lista/array
inputs.forEach((input) => {
  input.addEventListener("keyup", validacion);
  input.addEventListener("blur", validacion);
});

//Listener del formulario en general
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); //No enviar los datos
  console.log(campos);
  if ( campos.asunto && campos.nombre && campos.descripcion && campos.correo && check.checked && campos.select) 
  {

    alert_notok.classList.add("d-none");
    alert_ok.classList.remove("d-none");

    setTimeout(function(){ 

      //Resetear formulario
      formulario.reset();
      for(const key in campos){
        campos[key] = false;
        alert_ok.classList.add("d-none");
      }}, 6000);
    //Reset del form
    

  } else {
    alert_ok.classList.add("d-none");
    alert_notok.classList.remove("d-none");
    
    //Aviso de datos que faltan
    for (const key in campos) {
      if (!campos[key]) {
        msg(key, "");
      }
    }
  }
});
