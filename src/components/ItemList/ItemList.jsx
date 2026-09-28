import { Link } from "react-router-dom";
import {Item} from "../Item/Item"
import "./ItemList.css";
export const ItemList = ({productos}) => {
    // if(!productos.length){
    //     return <p>No hay productos</p>
    // }

    return(
        <div className="grid-products">
            {(!productos.length)? <p>No hay produtos</p> : productos.map( product => (
                <Link style={{textDecoration:"none"}} to={`/producto/${product.id}`} key={product.id}>
                    <Item {...product}/>
                </Link>))}
        </div>
    )
    
}