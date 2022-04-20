import React, { useState } from 'react';
import { Link, Button } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({ dato }) {

    const  { name, image, cost, description, stock } = dato

    const [itemCount, setItemCount ] = useState(0);

    const agregar = (qty) => {
        alert("seleccionaste" + qty + "productos");
        setItemCount(qty)
        console.log(qty)
    }

    return(
        <>
        <div className='cards'>
           <img src={image} alt="" className="img"/>
            <p>{name}</p>
            <p>${cost}</p>
            <p>{description}</p>
            <p>Unidades disponibles:{stock}</p>
            {/* sobre escribir lo que esta en item count para usar el boton y crear el componente para el boton carrito */}
            {
                itemCount === 0
             ? <ItemCount stock={stock} initial={itemCount} onClick={agregar} />
             : <Link to='/Cart'>ver en el cart</Link>   
            }
            
        </div>
        </>
    )
}