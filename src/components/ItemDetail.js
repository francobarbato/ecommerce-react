import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({dato}) {

    const  {  id, name, image, cost, description, stock } = dato[0]

    return(
        <>
        <div className='cards' key={id} >
           {/* <img src={image.url} alt="" className="img"/> */}
            <p>{name}</p>
            <p>${cost}</p>
            <p>{description}</p>
            <p>Unidades disponibles:{stock}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
        </>
    )
}