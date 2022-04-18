import { useEffect, useState } from "react";
import { getData } from "../utils/products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [datos, setDatos] = useState([]);
    const {idItem} = useParams();

    useEffect(() => {
        const pidiendoDatos = async () =>{
                    const llegadaDatos = await getData();
                    const elemento = llegadaDatos.find(item => item.id === parseInt(idItem))
                    setDatos(elemento)
                }
                pidiendoDatos()
        console.log(datos)
    },[idItem]);


    return(
        <ItemDetail dato={datos}/>
    );
}

export default ItemDetailContainer;


