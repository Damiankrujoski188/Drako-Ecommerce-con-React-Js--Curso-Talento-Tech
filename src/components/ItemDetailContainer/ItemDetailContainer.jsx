import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./ItemDetailContainer.css"
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { idItem } = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [error, setErrors ] = useState(null);
    const [loading, setLoading ] = useState(true);

    useEffect(()=>{
        //Resetear los estados para volver a renderizar si se elijio otro producto detalle relacionado
        // setItemDetail(null);
        // setLoading(true)
        // setErrors(null)

        fetch("/data/productos.json")
            .then( res =>{ 
                if(!res.ok){
                    throw new Error("Error al obtener el detalle de producto");
                }

                return res.json();
            })

            .then((data) =>{
                let item = data.find((prod) => String(prod.id) === String(idItem) )
                if(!item) {
                    console.log(data);
                    console.log("Id",idItem);
                    throw new Error("Elemento no encontrado");
                }
                
                return setItemDetail(item);
            }) 
            .catch(error => setErrors(error.message))
            .finally(() => setLoading(false))
    },[idItem]);


    if(loading) return <p>Cargando detalles del producto</p>;
    if(error) return <p>{error}</p>;


    return(
        <main>
            <ItemDetail item={itemDetail}/>
        </main>
    )


}