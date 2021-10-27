import React from "react";

function ComponentePago() {
  return (
    <div class="col-4">
      <div class=" card d-flex align-content-center ">
        <div class="card-body  ">
          <h5 class="card-title d-flex justify-content-center ">Total</h5>
          <p id="costo-total" class="d-flex justify-content-center card-text">
            0000
          </p>
          <div className=" d-flex justify-content-center  ">
            <button id="btn__traer" type="button" class=" btn btn-success ">
              Pagar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentePago;
