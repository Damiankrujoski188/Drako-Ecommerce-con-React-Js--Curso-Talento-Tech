import "../Footer/Footer.css"

export const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container-brand">
                Darko.<span>Store</span>
            </div>

            <nav className="footer-nav">
                <ul className="footer-nav-items">
                    <li className="if-link">🏪<span>¿Quienes Somos?</span>›</li>
                    <li className="if-link">🚚<span>Envios y Zonas</span>›</li>
                    <li className="if-link">🔄<span>Cambios de taller</span>›</li>
                    <li className="if-link">❓<span>Preguntas Frecuentes</span>›</li>
                    <li className="if-link" style={{gridColumn: "1/-1"}}>📄<span>Terminos y condiciones</span>›</li>
                </ul>  
            </nav>
            <div style={{fontSize:"10px",color:"#555", marginBottom:"10px"}}>
                Sin pago online · Pagas al recibir · Para que te quedes tranquilo 😌 · CABA · Buenos Aires
            </div>
            <div style={{color:"#2a2a2a"}}>
                © 2026 · Todos los derechos reservado · Developer @Dev_Damian_Krujoski
            </div>
            
        </footer>
    )
}