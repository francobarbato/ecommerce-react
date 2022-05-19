import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({ dato }) {

    const  { name, image, cost, description, stock } = dato

    const [itemCount, setItemCount ] = useState(1);
    const [finish, setFinish] = useState(false)

    const terminar = () => {
        setFinish(true)
    } 

    const { onAdd } = useContext(CartContext)

    const agregar = () => {

        onAdd({...dato, itemCount});
    }

    return(
        <>
        <div className='cards'>
           <img src={image} alt="" className="img"/>
            <p>{name}</p>
            <p>${cost}</p>
            <p>{description}</p>
            {
                !finish &&
                <ItemCount stock={stock} initial={itemCount} cantidad={setItemCount} terminar={terminar} />
            }
            {
                finish &&
                <Link to='/Cart' type="button" className="btn btn-warning" onClick={agregar}>Ver en el carrito</Link>
            }
            
        </div>
        </>
    )
}