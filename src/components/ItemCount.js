import {useState} from 'react';

function ItemCount(props){

    const [unidades, setUnidades]= useState(0);

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

    // const agregar = (qty) => {
    //     alert("seleccionaste" + qty + "productos");
    //     setUnidades(qty)
    //     console.log('ae agregaron' + qty)
    // }
       return(
        <>
        <div className="ItemCount">
            <button  type="button" className="btn btn-primary" onClick={increment}>+</button>
            <option className="box">{unidades}</option>
            <button  type="button" className="btn btn-primary" onClick={decrement}>-</button>
            <div>
                <button type="button" className="btn btn-success mt-3" >Agregar al Carrito</button>
            </div>
        </div>
        </>
    );
}

export default ItemCount; 