import "./Item.css";

export const Item = ({nombre, descripcion, precio, imagen, categoria, children }) =>{
    return (
        <article className="cards">
            <div className="card-img">
                <img src={imagen} alt={nombre}/>
            </div>

            <div className="card-body">
                <p className="card-categ">{categoria}</p>
                
                <h3 className="card-name">{nombre}</h3>
                <p className="card-description">{descripcion}</p>
                
                <div className="price-row">
                    <p className="card-price">${precio}</p>
                    {/* <span className="old-price">$20.000</span> */}
                </div>

                <div className="card-controls">
                    {children}
                </div>
            </div>
        </article>
    )
}