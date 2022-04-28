import {useState} from 'react';

function ItemCount({stock=1 , initial=0, onAdd}){
    // poner cantidad seleccionada de productos

    const [unidades, setUnidades]= useState(0);

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
                {
                    stock && unidades
                ? <button onClick={() => onAdd(unidades)} >agregar al carrito</button>
                : <button type="button" class="btn btn-info">Agregar al Carrito</button>   
                }
            </div>
        </div>
        </>
    );
}

export default ItemCount; 