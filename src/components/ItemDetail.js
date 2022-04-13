import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({ id, name, image, cost, description, stock}) {
    return(
        <>
        <div className='cards' key={id} >
           <img src={image.url} alt="" className="img"/>
            <p>{name}</p>
            <p>${cost}</p>
            <p>{description}</p>
            <p>Unidades disponibles:{stock}</p>
            {/* <ItemCount/> */}
        </div>
        </>
    )
}