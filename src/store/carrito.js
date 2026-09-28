const CARRITO = "carrito"

export const guardarCarrito = (producto) =>{
    return localStorage.setItem(CARRITO, JSON.stringify(producto));
};

export const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem(CARRITO)) || [];
};