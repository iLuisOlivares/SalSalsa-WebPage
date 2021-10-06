<?php include __DIR__ . '/partials/header.php'; ?>

<h2 class="o-title-carrito">Carrito de compra</h2>

<!-- Contenedor de los items -->
<main class="o-carrito-container">
    <section>
        <div id="container-list" >
            
        </div>

        <a href="carta.php"><button type="button" class="botones o-btn-bottom-carrito">Continuar comprando</button></a>
    </section>

    <!-- Contenedor para pagar todo -->
    <aside class="o-aside-carrito">
        <!-- falta arreglar el width en el @media -->
            <div class="card o-fix-pay-carrito">
                <div class="card-body">
                    <h5 class="card-title">Total</h5>
                    <!-- Cambiar el valor al total de todas  -->
                    <p id="costo-total" class="card-text">Error</p>
                    <button id="btn__traer" type="button" class="btn btn-success o-btn-style">
                        Pagar ahora
                    </button>
                </div>
            </div>
    </aside>
</main>

<?php include __DIR__ . '/partials/footer.php'; ?>       
