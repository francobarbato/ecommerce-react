import React from 'react';
import Item from './Item';

export default function ItemList( {productos} ) {
    return(
        <>
        <div>
        {
            productos.map((product) => (
                <Item key={product.id} {...product}/>
            ))
        }
        </div>
        </>
    )
}