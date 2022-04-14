// import React from 'react';
// // import ItemCount from './ItemCount';
// import { useEffect, useState } from 'react'
// import { getData } from '../utils/products';
// import ItemList from './ItemList'

// const ItemListContainer = () => {
//     const [datos, setDatos] = useState([]);

//     useEffect(() => {
//         async function pedirDatos() {
//             let datosLlegando = await getData();
//             setDatos(datosLlegando)
//         }
//         pedirDatos()
//     },[]);

//     // console.log(datos)

//     return(
//         <>
//         <ItemList productos={datos}/>
//         </>
//     );
// }

// export default ItemListContainer;

// // function ItemListContainer(props) {
// //     return(
// //         <>
// //             <div>
// //                 <p>Lista de productos</p>
// //                 <h3>{props.marca}</h3>
// //                 <div>{props.color}</div>
// //                 <div>{props.cantidad}</div>
// //                 <div>{props.stock}</div>
// //                 <hr/>
// //                 <ItemCount stock={props.stock} initial={1}/>
// //             </div>
// //         </>
// //     );
// // }