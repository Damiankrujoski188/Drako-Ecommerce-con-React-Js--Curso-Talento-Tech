import { useState } from "react";
import "../Footer/Footer.css";

export const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");


    function openModalByContent(content){
        setModalOpen(true);
        setModalContent(content)
    }

    return(
        <footer className="footer">
            <div className="container-brand">
                Drako.<span>Store</span>
            </div>

            <nav className="footer-nav">
                <ul className="footer-nav-items">
                    <li className="if-link" onClick={() => openModalByContent("quienes")}>🏪<span>¿Quienes Somos?</span>›</li>
                    <li className="if-link"onClick={() => openModalByContent("preguntas")} >❓<span>Preguntas Frecuentes</span>›</li>
                </ul>  
            </nav>
            <div style={{fontSize:"12px",color:"var(--muted)", marginBottom:"10px"}}>
                Sin pago online · Pagas al recibir · Buenos Aires CABA
            </div>
            <div style={{color:"var(--gray3)"}}>
                © 2026 · Todos los derechos reservado · Damian Luna · Proyecto hecho en Talento Tech 
            </div>

            <div className={`tf-overlay ${modalOpen ? "tf-overlay-open": ""}`}>
                <div className="tf-modal">
                    <div className="tf-header"><button onClick={() => setModalOpen(false)}>✕</button></div>
                    {modalContent === "quienes" &&(
                        <div className="tf-body">   
                            <h4 className="tf-h">🏪 Quiénes somos</h4>
                            <p className="tf-p">Somos <strong>Drako.Store</strong> una tienda de ropa deportiva importada de alta calidad, enfocados en la moda
                            deportiva de ultima generacion. Tenemos muchas variedades de ropa y pensamos seguir consiguiendo lo ultimo del mercado.
                            <strong> Trabajamos con STOCK y fotos reales. No vendemos lo que no tenemos</strong></p>
                            <h4 className="tf-h">🛒 Como operamos</h4>
                            <p className="tf-p">Operamos 100% online. Elegis las prendas que mas te gusten dentro de la pagina, haces tu pedido por WhatsApp y te lo llevamos
                            a tu puerta en CABA - Buenos Aires. <strong>Sin pago online. Pagas cuando recibis</strong>
                            </p>
                        </div>
                    )}    

                    {modalContent === "preguntas" && (
                        <div className="tf-body">   
                            <h4 className="tf-h">❓¿Cuándo pago?</h4>
                            <p className="tf-p">Pagás en <strong>efectivo</strong> cuando recibís el pedido. No pedimos adelanto ni transferencia previa.</p>
                            <h4 className="tf-h">❓¿Puedo pedir más de un producto?</h4>
                            <p className="tf-p">Sí, podés agregar varios al carrito y confirmar todo junto. El envío es un único costo de $8.500 sin importar la cantidad.</p>
                            <h4 className="tf-h">❓¿Tienen local físico?</h4>
                            <p className="tf-p">No. Operamos 100% online con entrega a domicilio en CABA, GBA y La Plata.</p>
                            <h4 className="tf-h">❓¿A qué hora responden?</h4>
                            <p className="tf-p">Respondemos de <strong>lunes a sábado de 9 a 21hs</strong>. Los domingos puede demorar un poco más.</p>
                            <h4 className="tf-h">❓¿Coordinan el horario de entrega?</h4>
                            <p className="tf-p">Sí, coordinamos mañana o tarde por WhatsApp antes de salir. No hacemos entregas sin confirmar.</p>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    )
}