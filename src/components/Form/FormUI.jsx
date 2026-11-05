import "./FormUI.css";

export const FormUI = ({onChange, onSubmit, onReset, errors, formData, enviado}) => {
     return (
            <section class= "contact">
                <div className="contact-container">
                    <div className="form-header">
                        <h2>Contacto</h2>
                        <p>Complete con tus datos para poder comunicarte con nosotros</p>
                    </div>

                    <form class="form-contact"  onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={onChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname">Apellido</label>
                            <input
                                type="text"
                                id="lastname" 
                                name="lastname" 
                                value={formData.lastname} 
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={onChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                type="text"
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={onChange} 
                            />
                        </div>

                        <div className="form-actions">
                            <button className="btn btn-submit" type="submit">Enviar</button>
                            <button className="btn btn-reset" onClick={onReset} type="button">Resetear</button>
                        </div>
                        
                        {Object.values(errors).length > 0 && (
                            <div className="form-errors">
                                {Object.values(errors).map((error,index) => (
                                    <p key={index}>* {error}</p>
                                ))}
                            </div>
                        )}

                        {enviado && (
                            <div className="modal-success">
                                <div className="modal-content">
                                    <h5><b>¡Envio Exitoso!</b></h5>
                                    <p>Gracias por comunicarte. Tu mensaje se ha enviado correctamente</p>
                                </div>
                            
                            </div>
                        )}
                    </form>
                </div>
            </section>

     )
}