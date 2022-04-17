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
                    const elemento = llegadaDatos.filter(item => item.id == idItem)
                    setDatos(elemento)
                }
                pidiendoDatos()
        console.log(idItem)
    },[idItem]);


    return(
        <ItemDetail dato={datos}/>
    );
}

export default ItemDetailContainer;


