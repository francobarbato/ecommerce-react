import {useState} from 'react';

function ItemCount(props){

    const [unidades, setUnidades]= useState(1);

    const increment = () =>{
        if(unidades < props.stock){

           setUnidades(unidades+1); 
        } 
    }
    const decrement = () =>{
        if(unidades > 1){

            setUnidades(unidades-1);  
        } 
    }
    const agregar = () =>{
        console.log('se agregaron' ,unidades, 'unidades');
    }
       return(
        <>
        <div className="ItemCount">
            <button  type="button" className="btn btn-primary" onClick={increment}>+</button>
            <option className="box">{unidades}</option>
            <button  type="button" className="btn btn-primary" onClick={decrement}>-</button>
            <div>
                <button type="button" className="btn btn-success mt-3" onClick={agregar}>Agregar al Carrito</button>
            </div>
        </div>
        </>
    );
}

export default ItemCount; 