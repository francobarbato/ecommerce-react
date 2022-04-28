import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({ dato }) {

    const  { name, image, cost, description, stock } = dato

    const [itemCount, setItemCount ] = useState(0);

    const test = useContext(CartContext)

    const agregar = (qty) => {
        alert("seleccionaste " + qty + " productos");
        setItemCount(qty);
        test.addToCart(item);
    }

    return(
        <>
        <div className='cards'>
           <img src={image} alt="" className="img"/>
            <p>{name}</p>
            <p>${cost}</p>
            <p>{description}</p>
            {
                itemCount === 0
             ? <ItemCount stock={stock} initial={itemCount} onAdd={agregar} />
             : <Link to='/Cart'><button type="button" class="btn btn-warning">ver en el cart</button></Link>
            }
            
        </div>
        </>
    )
}