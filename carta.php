<?php include __DIR__ . '/partials/header.php'; ?>
  <body>
    <!-- Main content -->
    <main class="main-carta">
      <!-- Título del container -->
      <h2 class="o-title-menu">El menú</h2>

      <!-- El container del menú -->
      <div class="container">
        <!-- Carrosel items -->
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <!-- Lista 1 -->

                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img1.jpg"
                      class="card-img-top"
                      alt="Combo hamburguesa"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Combo 1 hamburguesa</h5>
                      <p class="card-text">
                        Combo de hamburguesa, con papas y refresco.
                      </p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(1)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img2.jpg"
                      class="card-img-top"
                      alt="Combo 2 hamburguesa"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Combo 2 hamburguesa</h5>
                      <p class="card-text">Combo de hamburguesa y papas.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(2)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img3.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Hamburguesa sencilla</h5>
                      <p class="card-text">
                        Hamburguesa con carne, tomate y demás vegetales.
                      </p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(3)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img4.jpg"
                      class="card-img-top"
                      alt="Combo Hot Dog"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Combo Hot Dog</h5>
                      <p class="card-text">Combo 1 de Hot dog y papas.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(4)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img5.jpg"
                      class="card-img-top"
                      alt="Hot Dog Sencillo"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Hot Dog Sencillo</h5>
                      <p class="card-text">Hot dog sencillo con salsa.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(5)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img6.jpg"
                      class="card-img-top"
                      alt="Copa de papas sencillo"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Copa de papas sencillo</h5>
                      <p class="card-text">Copa de papas con</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(6)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img7.jpg"
                      class="card-img-top"
                      alt="Papas sencillas"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Papas sencillas</h5>
                      <p class="card-text">Papas a la francesa sencilla</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(7)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img8.jpg"
                      class="card-img-top"
                      alt="2 Latas de Coca Cola"
                    />
                    <div class="card-body">
                      <h5 class="card-title">2 Latas de Coca Cola</h5>
                      <p class="card-text">
                        Latas de Coca Cola, con limón y hielo.
                      </p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(8)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img9.jpg"
                      class="card-img-top"
                      alt="Jarra con limonada"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Jarra con limonada</h5>
                      <p class="card-text">Jarra con limonada de 1/2 litro.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(9)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img10.jpg"
                      class="card-img-top"
                      alt="Jarra de agua"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Jarra de agua</h5>
                      <p class="card-text">Jarra de agua de 1/2 litro.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(10)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img11.jpg"
                      class="card-img-top"
                      alt="Pizza de Italiana"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Pizza de Italiana</h5>
                      <p class="card-text">Pizza Italiana con 8 porciones.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(11)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img12.jpg"
                      class="card-img-top"
                      alt="Pizza personal Italiana"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Pizza personal Italiana</h5>
                      <p class="card-text">Pizza Italiana para 1 persona.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(12)"
                      >
                        Ver detalle
                      </button>
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
                    <img
                      src="./assets/img/menu/img13.jpg"
                      class="card-img-top"
                      alt="Copa de helado"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Copa de helado</h5>
                      <p class="card-text">Copa de helado de 1 sabor con uvas.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(13)"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Item plato -->
                <div class="col">
                  <div class="card h-100">
                    <img
                      src="./assets/img/menu/img14.png"
                      class="card-img-top"
                      alt="Cono de helado"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Cono de helado</h5>
                      <p class="card-text">Cono de helado con 2 bolas de diferentes sabores.</p>
                      <!-- Trigger/Open The Modal -->
                      <button
                        type="button"
                        class="btn btn-success o-btn-style"
                        onclick="determinarPlato(14)"
                      >
                        Ver detalle
                      </button>
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
        <div id="o-value-plato-image" class="o-img-modal-container"></div>
        <!-- Open whatsapp to send a message -->
        <a href="https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@">
          <button type="button" class="btn btn-success o-btn-style" >
            Ver contacto
          </button>
        </a>
      </div>
    </div>

   


    <?php include __DIR__ . '/partials/footer.php'; ?>
