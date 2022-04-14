import { useEffect, useState } from "react";
import { getData } from "../utils/products";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [datos, setDatos] = useState([]);

    const pedirDatos = async () =>{
        const datosLlegando = await getData();
        const elemento = datosLlegando.shift()
        setDatos(elemento)
    }

    useEffect(() => {
        // async function pedirDatos() {
        //     let datosLlegando = await getData();
        //     setDatos(datosLlegando)
        // }
        pedirDatos()
    },[]);




    return(
        <ItemDetail dato={datos}/>
    );
}

export default ItemDetailContainer;


