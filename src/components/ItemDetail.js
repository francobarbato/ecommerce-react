import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({dato}) {

    const  { name, image, cost, description, stock } = dato

    // console.log(dato)

    return(
        <>
        <div className='cards'>
           <img src={image} alt="" className="img"/>
            <p>{name}</p>
            <p>${cost}</p>
            <p>{description}</p>
            <p>Unidades disponibles:{stock}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
        </>
    )
}