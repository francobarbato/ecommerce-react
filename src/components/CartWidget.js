import React from 'react';
import foto from './imagenes/carrito.png';

function CartWidget() {

    return(
        <>
            <button type="button"  className="badge text-black ms-1 rounded-pill" data-toggle="modal" data-target="#exampleModal">
                    <img src={foto} alt=""/>
                <span id="contador" className="sr-only">0</span>
            </button>
        </>
    );
}

export default CartWidget;