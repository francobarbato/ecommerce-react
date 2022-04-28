import React, { useContext } from 'react';
import { CartContext } from './CartContext';


const Carts = () => {
    const test = useContext(CartContext);
// poner length y crear card
    return(
       <>
       <h2>Mis productos</h2>
       <hr/>
       {
           test.cartList.length > 0 && (
               <div>
                   {
                       test.cartList.map(item => 
                        <div>
                            <img src={item.image} alt="" className="img"/>
                            <p>{item.name}</p>
                            <p>${item.cost}</p>
                        </div>
                        )
                   }
               </div>
           )
       }
       </>
    );
}

export default Carts;
