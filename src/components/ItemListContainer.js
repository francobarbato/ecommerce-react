import React from 'react';
// import ItemCount from './ItemCount';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getData } from '../utils/products';
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        if(idCategory == undefined) {
            async function pedirDatos() {
                    let datosLlegando = await getData();
                    setDatos(datosLlegando)
                }
            pedirDatos() 
        } else {
        const pidiendoDatos = async () =>{
                    const llegadaDatos = await getData();
                    const elemento = llegadaDatos.filter(item => item.categoryId === parseInt(idCategory))
                    setDatos(elemento)
                }
                pidiendoDatos()
        }
        console.log(idCategory)
     },[idCategory]);

    // console.log(datos)

    return(
        <>
        <ItemList productos={datos}/>
        </>
    );
}

export default ItemListContainer;

// function ItemListContainer(props) {
//     return(
//         <>
//             <div>
//                 <p>Lista de productos</p>
//                 <h3>{props.marca}</h3>
//                 <div>{props.color}</div>
//                 <div>{props.cantidad}</div>
//                 <div>{props.stock}</div>
//                 <hr/>
//                 <ItemCount stock={props.stock} initial={1}/>
//             </div>
//         </>
//     );
// }