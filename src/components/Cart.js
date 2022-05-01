import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';


const Carts = () => {
    const { cartList } = useContext(CartContext);

// poner length y crear card
//(length > 0 &&) si es mayor a 0 deberia mostrar el map

    return(
       <>
       <h2>Mis productos</h2>
       <hr/>
       {
           cartList.map(item =>(
               <CartItem key={item.id} item={item}/>
           ))
       }
       </>
    );
}

export default Carts;
