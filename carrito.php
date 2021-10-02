<?php include __DIR__ . '/partials/header.php'; ?>


<h2 class="o-title-carrito">Carrito de compra</h2>


<?php
    /* Carga los datos */
    $employees = array('John', 'Michelle');
   
    // $data = getLocalstorage();
    // $data = JSON.parse(localStorage.getItem("Carrito")).length;
?>

<!-- Contenedor de los items -->
<main>
    <div class="container">
    
        <section class="row lista-compra">
            <div id="container-list" class="col-12 col-lg-8">
                <!-- Empieza el bucle, el cual recorre el array-->
                <?php foreach ($employees as $employee) { ?>
                    <!-- Item -->
                    <!-- <div class="card mb-3 o-fix-card-carrito" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="./assets/img/menu/img1.jpg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <section class="o-item-delete-style">
                                        <h5 class="card-title">Titulo</h5>
                                        <button type="button" class="btn btn-danger" onclick="alert('¿Estas seguro de eliminar este producto?')">Eliminar
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </section>
                                    <p class="card-text">Combo de hamburguesa, papas y sin refresco.</p>
                                    <p class="card-text">$9.999</p>
                                    <input type="number" id="id_cantidad" class="shoppingImput" value=1 style="max-width: 3rem;border: 2px solid rgba(182, 6, 6, 0.8); border-radius: 5px; margin-left: 1px" min=1 />
                                </div>
                            </div>
                        </div>
                    </div> -->
                <?php }  ?>
            </div>
            <!-- Contenedor para pagar todo -->
        <div class="col-12 col-lg-4 d-flex  justify-content-center align-items-start">
            <!-- falta arreglar el width en el @media -->
                <div class="card o-fix-pay-carrito">
                    <div class="card-body">
                        <h5 class="card-title">Total</h5>
                        <!-- Cambiar el valor al total de todas  -->
                        <p id="costo-total" class="card-text">$80.000</p>
                        <button id="btn__traer" type="button" class="btn btn-success o-btn-style">
                            Pagar ahora
                        </button>
                    </div>
                </div>
        </div>
        </section>
        <a href="carta.php"><button type="button" class="botones o-btn-bottom-carrito">Continuar comprando</button></a>

    
    
    
            <!-- form para enviar la información al cliente y al dueño pueden borrarlo si se utiliza de otra forma-->
            <form method="post" action="">
    
            </form>
    
    </main>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>       
