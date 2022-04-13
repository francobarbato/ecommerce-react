import { useEffect, useState } from "react";
import { getData } from "../utils/products";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function pedirDatos() {
            let datosLlegando = await getData();
            setDatos(datosLlegando)
        }
        pedirDatos()
    },[]);


    return(
        <ItemDetail productos={datos}/>
    );
}

export default ItemDetailContainer();


