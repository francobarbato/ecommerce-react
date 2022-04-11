import React from 'react';

export default function Item({id, name, cost, description, image, stock}) {
    console.log(id, name, cost, description, image, stock)
    return(
        <>
        <div className='cards' key={id} >
           <img src={image} alt=""/>
            <p>{name}</p>
            <p>${cost}</p>
            <p>{description}</p>
            <p>Unidades disponibles:{stock}</p>
        </div>
        </>
    )
}