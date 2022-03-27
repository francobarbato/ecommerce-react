import React from 'react';
import foto from './imagenes/carrito.png';

function Cart() {
    return(
        <>
            <button type="button"  class="badge text-black ms-1 rounded-pill" data-toggle="modal" data-target="#exampleModal">
                    {/* <img src={foto} alt=""/> */}
                    <img src={foto} alt=""/>
                <span id="contador" class="sr-only">0</span>
            </button>
        </>
    );
}

export default Cart;