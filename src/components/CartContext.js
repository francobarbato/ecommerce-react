import { createContext, useState } from 'react';


export const CartContext = createContext();



export const CartContextProvider = ({children}) => {

const {cartList, setCartList} = useState([]);

// para borrar todos los productos set a un array vacio

const addToCart = (item) => {
    setCartList([
        ...cartList,
        item
    ]);
}

    return(
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}