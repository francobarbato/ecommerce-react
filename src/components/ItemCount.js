import {useState} from 'react';

function ItemCount({stock, initial, cantidad, terminar}){
    // poner cantidad seleccionada de productos

    const [unidades, setUnidades]= useState(initial);

    const increment = () =>{
        if(unidades < stock){

           setUnidades(unidades + 1); 
        } 
    }
    const decrement = () =>{
        if(unidades > initial+1){

            setUnidades(unidades - 1);  
        } 
    }

       return(
        <>
        <div className="ItemCount">
            <button  type="button" className="btn btn-primary" onClick={increment}>+</button>
            <option className="box">{unidades}</option>
            <button  type="button" className="btn btn-primary" onClick={decrement}>-</button>
            <div>
                 <button onClick={() => {
                    terminar() 
                    cantidad(unidades) 
                }} class="btn btn-info">
                    Agregar al carrito</button> 
            </div>
        </div>
        </>
    );
}

export default ItemCount; 