import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({id, image}) {
    return(
        <>
        <div className='cards' key={id} >
           <img src={image} alt="" className="img"/>
            <p><Link to='/item/id'>detalles</Link></p>
        </div>
        </>
    )
}