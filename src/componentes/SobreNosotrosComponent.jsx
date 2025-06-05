import './SobreNosotrosComponent.css';

function SobreNosotrosComponent() {
    return (
        <section className="sobre-nosotros-container">
            <header className="header-section">
                <h2 className="titulo-qnsomos">¿Quiénes somos?</h2>
                <p className="descripcion">
                    Somos la única academia fundada por exmiembros del Grupo Especial de Operaciones (G.E.O.),
                    con el objetivo de formar a los mejores opositores para las Fuerzas y Cuerpos de Seguridad del Estado.
                </p>
            </header>

            <section className="contenido-seccion">
                <div className="texto-principal">
                    <p>
                        Entendemos la importancia y la dedicación que requiere la preparación para las oposiciones
                        a la Policía Nacional y Guardia Civil. Nuestros alumnos son el eje central de nuestra labor
                        y su éxito nuestra mayor responsabilidad.
                    </p>
                    <p>
                        Contamos con los mejores formadores, una plataforma online moderna, y el temario más completo
                        y actualizado, buscando ser la academia más competitiva del territorio nacional.
                    </p>
                </div>
            </section>

            {/* Sección de Video y Ubicación en la misma línea */}
            <section className="video-ubicacion-seccion">
                <div className="video-container">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/CQpAkF1IX_U"
                        title="Video de YouTube"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="ubicacion-container">
                    <h2 className="ubicacion-titulo">Ubicación</h2>
                    <p className="direccion">CÓDIGO AZÚL ÁVILA</p>
                    <p>Avenida Juan Carlos I, 46, Ávila, España</p>
                    <div className="mapa-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.497178429536!2d-4.7114994845951945!3d40.65047023587057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4794ecb81ed49b%3A0x42a47b2201e3c7a0!2sAvenida%20Juan%20Carlos%20I%2C%2046%2C%20Ávila%2C%20España!5e0!3m2!1ses!2ses!4v1613661595672!5m2!1ses!2ses"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ borderRadius: "15px" }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </section>
            <section className="reseñas-seccion">
            <h3 className="reseñas-titulo">Lo que dicen nuestros alumnos</h3>
            <div className="reseñas-contenedor">
                <div className="reseña">
                    <p className="reseña-texto">“Gracias a esta academia conseguí mi plaza en la Policía Nacional. Profesores de 10.”</p>
                    <p className="reseña-autor">— Laura G.</p>
                </div>
            <div className="reseña">
                <p className="reseña-texto">“La preparación física y teórica es excelente. Muy recomendable.”</p>
                <p className="reseña-autor">— Miguel R.</p>
            </div>
            <div className="reseña">
                <p className="reseña-texto">“Una experiencia inolvidable. Me sentí apoyado desde el primer día.”</p>
                <p className="reseña-autor">— Andrés M.</p>
            </div>
    </div>
</section>

        </section>
    );
}

export default SobreNosotrosComponent;
