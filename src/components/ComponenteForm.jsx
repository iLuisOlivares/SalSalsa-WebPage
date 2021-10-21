import React from 'react'

function ComponenteForm({children}) {
    return (
        
    <div class="row gx-0 gx-lg-0 justify-content-center mb-2 mx-1 py-5">
        <div class=" shadow-lg  col-xll-3 col-xl-6 col-lg-8 px-4 py-3 px-sm-5 rounded-3">
            <form id="formulario" action="https://formspree.io/f/xqkwjage" method="POST">
                {children}
            </form>
        </div>
    </div>

    )
}

export default ComponenteForm
