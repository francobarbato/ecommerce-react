import { createContext, useState } from 'react';


export const CartContext = createContext(0);



export const CartContextProvider = ({children}) => {

const [ cartList, setCartList ] = useState([]);

// para borrar todos los productos set a un array vacio
// opereitor para que no se pisen los productos en el carrito
// para uno usar filter

const onAdd = (item) => {
    setCartList([
        ...cartList,
        item
    ]);
}

// const removeCart = () => {
//     setCartList([]);
// }

    return(
        <CartContext.Provider value={{cartList, onAdd}}>
            {children}
        </CartContext.Provider>
    );
}