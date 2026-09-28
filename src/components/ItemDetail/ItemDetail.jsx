import "./ItemDetail.css";
import { Item } from "../Item/Item";

export const ItemDetail = ({item}) => {

    return(
        <section className="container-detail">
            <h2 className="detail-title">Detalles de producto {item.nombre}</h2>
            <article className="card-detail">
                <Item {...item}>
                    <button className="addCart" >Agregar al carrito</button>
                </Item>
            </article>
        </section>
    )
}