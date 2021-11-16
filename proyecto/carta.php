<?php include __DIR__ . '/partials/header.php'; ?>

<body>
  <!-- Main content -->
  <main class="main-carta">
    <!-- Título del container -->
    <h2 class="o-title-menu">El menú</h2>

    <!-- El container del menú -->
    <div class="container">
      <!-- Carrosel items -->
      <div id="carouselExampleIndicators" class="carousel slide o-fix">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <!-- Lista 1 -->

              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img1.jpg" alt="Combo hamburguesa" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Combo 1 hamburguesa</h5>
                      <p class="card-text">Combo de hamburguesa, con papas y refresco.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">

                      <button type="button" class="botones" onclick="determinarPlato(1)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img2.jpg" class="card-img-top" alt="Combo 2 hamburguesa" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Combo 2 hamburguesa</h5>
                      <p class="card-text">Combo de hamburguesa, papas y sin refresco.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(2)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img3.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Hamburguesa sencilla</h5>
                      <p class="card-text">
                        Hamburguesa con carne, tomate y vegetales.
                      </p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(3)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img4.jpg" class="card-img-top" alt="Combo Hot Dog" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Combo Hot Dog</h5>
                      <p class="card-text">Combo 1 de Hot dog y papas.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(4)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img5.jpg" class="card-img-top" alt="Hot Dog Sencillo" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Hot Dog Sencillo</h5>
                      <p class="card-text">Hot dog sencillo con salsa.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(5)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img6.jpg" class="card-img-top" alt="Copa de papas sencillo" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Copa de papas sencillo</h5>
                      <p class="card-text">Copa de papas con guacamole.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(6)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img7.jpg" class="card-img-top" alt="Papas sencillas" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Papas sencillas</h5>
                      <p class="card-text">Papas a la francesa sencilla</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(7)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img8.jpg" class="card-img-top" alt="2 Latas de Coca Cola" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">2 Latas de Coca Cola</h5>
                      <p class="card-text">Latas de Coca Cola, con limón y hielo.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(8)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img9.jpg" class="card-img-top" alt="Jarra con limonada" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Jarra con limonada</h5>
                      <p class="card-text">Jarra con limonada de 1/2 litro.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(9)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img10.jpg" class="card-img-top" alt="Jarra de agua" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Jarra de agua</h5>
                      <p class="card-text">Jarra de agua de 1/2 litro.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(10)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img11.jpg" class="card-img-top" alt="Pizza Italiana" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Pizza de Italiana</h5>
                      <p class="card-text">Pizza Italiana con 8 porciones.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(11)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img12.jpg" class="card-img-top" alt="Pizza personal Italiana" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Pizza personal Italiana</h5>
                      <p class="card-text">Pizza Italiana para 1 persona.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(12)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- close -->
            </div>
          </div>
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <!-- Lista 2 -->

              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img13.jpg" class="card-img-top" alt="Copa de helado" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Copa de helado</h5>
                      <p class="card-text">Copa de helado de 1 sabor con uvas.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(13)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item plato -->
              <div class="col">
                <div class="card h-100">
                  <img src="./assets/img/menu/img14.png" class="card-img-top" alt="Cono de helado" />
                  <div class="card-body">
                    <div class="informacion p-2">
                      <h5 class="card-title">Cono de helado</h5>
                      <p class="card-text">Cono de helado con 2 bolas de diferentes sabores.</p>
                    </div>
                    <!-- Trigger/Open The Modal -->
                    <div class="d-flex justify-content-around align-items-center pb-2 pt-3">
                      <button type="button" class="botones" onclick="determinarPlato(14)">
                        Agregar al carrito <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- close -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Link to download the menu -->
  <div class="o-menu-doc">
    <a href="./assets/doc/Menu_Completo.pdf" download="menu">Descarga el Menú completo aquí</a>
  </div>

  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <h1 id="o-value-plato-titulo">Título del plato</h1>
      <!-- <span id="o-value-plato">num</span> -->
      <p id="o-value-plato-descripcion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        aspernatur excepturi error temporibus odit, quod alias fuga. Corporis
        ipsa veniam qui ipsam rem atque voluptate nihil vero? Libero, illo
        totam.
      </p>
      <div class="d-flex justify-content-center">
        <div id="o-value-plato-image" class="img-thumbnail rounded o-img-modal-container" style=" width: 720px "></div>

      </div>
      <div class="o-information-cost">
        <!-- Precio -->
        <p>Precio</p>
        <span id="o-value-plato-price">Error</span>
        <section class="o-style-btn-add-carrito">
          <!-- Open whatsapp to send a message -->
          <button type="button" class="botones" onclick="location.href='https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@'">
            Ver contacto
          </button>
          <button id="btn__agregar" type=button class="botones">
            Agregar al carrito <i class="fas fa-shopping-cart"></i>
          </button>
          <input type="number" id="id_cantidad" class="shoppingImput" value=1 style="max-width: 3rem;border: 2px solid rgba(182, 6, 6, 0.8); border-radius: 5px; margin-left: 1px" min=1>
          </input>
          <section>
      </div>
      </a>
    </div>
  </div>

  <?php include __DIR__ . '/partials/footer.php'; ?>