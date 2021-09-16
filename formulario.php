<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./css/Luis.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script   script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/34237dd665.js" crossorigin="anonymous"></script>
    <title>Contact us</title>
</head>
<body class="Contactanos">
    
    
    <!--Navbar -->
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg  py-1" id="mainNav">
        <div class="container px-4 px-lg-0">
            <a class="navbar-brand" href="#Main"> <img src="./img/logo@2x.png" alt="" width="200" height="150"></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#nosotros">Nosotros</a></li>
                    <li class="nav-item"><a class="nav-link" href="#menu">Menu</a></li>
                    <li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contactanos">Contáctanos</a></li>
                </ul>
                <form class="ps-sm-0 ps-lg-5 d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-danger" type="submit"  style="border-color:rgb(196,60,60); background-color:rgb(196,60,60);" >Search</button>
                  </form>
            </div>
        </div>
    </nav>
    
    
    <!-- contat us -->
    <section class="page-section" id="contact-us"></section>

         <!-- social bar -->
    
         <div class="social--bar">
             <a class="social-icon" href="https://www.facebook.com/Colnodo/"><i class="fab fa-facebook-square icon"></i></a>
             <a class="social-icon" href="https://www.instagram.com/colnodo/?hl=es"><i class="fab fa-instagram-square icon"></i></a>
            <a class="social-icon" href="https://twitter.com/Colnodo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fab fa-twitter-square icon"></i></a>
            <a class="social-icon" href="https://www.youtube.com/user/colnodo"><i class="fab fa-youtube-square icon"></i></a>
            
        </div>

        <div class="pt-5 container px-4 px-lg5 d-flex justify-content-center">
            <!-- description -->
            <div class="col-lg-8 col-xl-6 text-center ">
                        <h2 class="mt-0">Contactanos</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque voluptate in sed culpa facilis aliquid dolorum unde, consequatur quos exercitationem tenetur ut non ipsa rem sapiente harum distinctio est.</p>
                    </div>
                </div>
            <!-- Form -->
            <div class="row gx-0 gx-lg-0 justify-content-center mb-2 mx-1 pb-5">
                <div class=" shadow-lg  col-xll-3 col-xl-6 col-lg-8 px-4 py-3 px-sm-5">
                    <form id="formulario">

                        <!-- Seleccion motivo -->
                        <div class="mb-3 mt-4" id="grupo_select">
                            <label class="form-label">Seleccione el servicio</label>
                            <select name="select" id="select-id" class="item-formulario form-select">
                                <option selected>Seleccionar</option>
                                <option> Celebración de cumpleaños     </option>
                                <option> Aniversarios </option>
                                <option> Fiestas infantiles </option>
                                <option> Declaraciones o propuestas </option>
                                <option> Despedidas </option>
                                <option> Cena con amigos </option>
                                <option> Otro </option>
                            </select>
                            <p class="msg__input-error">*Seleccione un servicio</p>
                        </div>
                        
                        <!--  Asunto -->
                        <div class="form-floating mb-3 mt-3" id="grupo_asunto">
                            <input name="asunto" type="text" class="validated item-formulario form-control form_input" id="floatingInput" placeholder="asunto">
                            <label class="form_label" >Asunto</label>
                            <p class="msg__input-error">*Por favor escriba el asunto</p>
                            <p class="msg2__input-error">El asunto debe contener de 4 a 40 caracteres y solo puede contener numeros, letras y guion bajo</p>
                          </div>

                        <!-- Nombre completo -->
                        <div class="form-floating mb-3" id="grupo_nombre">
                            <input name = "nombre" type="text" class="item-formulario form-control" id="floatingInput" placeholder="nombre completo">
                            <label class="form_label" >Nombre completo</label>
                            <p class="msg__input-error">*Por favor escriba el nombre</p>
                            <p class="msg2__input-error">El nombre debe contener de 4 a 50 caracteres y solo puede contener numeros, letras y guion bajo</p>
                          </div>  
  
                          
                        <!-- Correo electronico -->
                        <div class="form-floating mb-3" id="grupo_correo">
                            <input type="email" name ="correo" class="item-formulario form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com">
                            <label for="floatingInput" class="form_label" >Correo electronico</label>
                            <p class="msg__input-error">*Ingrese un correo electronico valido</p>
                        </div>
                        
                        <!-- Descripcion -->
                        <div class="form mb-3" id="grupo_descripcion">
                            <label for="floatingInput" class="form_label">Descripcion</label>
                            <textarea name="descripcion" class="item-formulario form-control" id="descripcion-id" rows="3" placeholder="Expliquenos el motivo de su contacto"></textarea>
                            <p class="msg__input-error">*Por favor escriba una breve descripcion</p>
                            <p class="msg2__input-error">La descripcion no debe sobrepasar los 500 caracteres</p>
                        </div>
                        
                        <!-- checkbox -->
                        <div class="mb-3 form-check" id="grupo_check">
                            <label class="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
                            <input name="check" type="checkbox" class="item-formulario form-check-input" id="check-id">
                            <p class="msg__input-error">*Por favor acepte terminos y condiciones</p>
                        </div>
                        
                       
                        <!-- Boton enviar -->
                        <button id="button-id" type="submit" class="btn btn-danger mb-3"  style="border-color:rgb(196,60,60); background-color:rgb(196,60,60);">Enviar</button>
                    </form>
                    
                    <!-- Iconos de los alerts -->
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </symbol>
                        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </symbol>
                      </svg>


                    <!-- Alerts -->
                        <div class="d-none alert alert-danger d-flex align-items-center" id="alert-notok" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                            <div>
                            Error: No se ha enviado su mensaje
                            </div>
                        </div>

                        <div class="d-none alert alert-success d-flex align-items-center" id="alert-ok" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                            <div>
                              Enviado con exito!!
                            </div>
                        </div>
                       

                </div>

            </div>
        </div>

    </section>


    <!-- Footer -->
    <footer class="text-center text-lg-start bg-dark">
      <div class="container-fluid d-flex justify-content-center py-5">
        <button type="button" class="btn btn-dark btn-lg btn-floating mx-2">
          <i class="fab fa-facebook-f"></i>
        </button>
        <button type="button" class="btn btn-dark btn-lg btn-floating mx-2">
          <i class="fab fa-youtube"></i>
        </button>
        <button type="button" class="btn btn-dark btn-lg btn-floating mx-2">
          <i class="fab fa-instagram"></i>
        </button>
        <button type="button" class="btn btn-dark btn-lg btn-floating mx-2">
          <i class="fab fa-twitter"></i>
        </button>
      </div>
  
      <div class="text-center text-white p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2021 Copyright:
        <a class="text-white" href="">Sal&Salsa.com</a>
      </div>
      
    </footer>
    
  </div>
  <!-- End of .container -->

    <script src="./js/contact.js"></script>
       
    
</body>
</html>