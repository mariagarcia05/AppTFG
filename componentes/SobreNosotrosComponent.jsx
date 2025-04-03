import './SobreNosotrosComponent.css';

function SobreNosotrosComponent(){
    return(
        <section>
            <h2 className='quienesSomosh2'>¿Quiénes somos?</h2>
            <div className='textoPrincipal'>
            <p>Somos la única academia fundada por exmiembros del Grupo Especial de Operaciones (G.E.O.) Esto hace que la misma lleve en su ADN el espíritu de sacrificio, la ilusión y motivación necesarias para cumplir su objetivo, que no es otro mas que ser la mejor academia para los opositores a las Fuerzas y Cuerpos de Seguridad del Estado.</p>
            <br></br>
            <p>Entendemos la importancia y la dedicación que requiere la preparación para las oposiciones a la Policía Nacional y Guardia Civil. Nuestros alumnos y opositores son el eje central de nuestra labor, su éxito nuestro objetivo y su preparación nuestra mayor responsabilidad.</p>
            <br></br>
            <p>Hemos fichado a los mejores formadores uniéndolos a nuestro equipo docente, disponiendo de la plataforma Online más moderna y completa para que te resulte fácil y ameno aprender desde casa y hemos creado el temario más completo y actualizado con la intención de ser la academia más competitiva y con mayor índice de aprobados del territorio nacional.</p>
            </div>
            <br></br>
            <div className="videoContainer">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/CQpAkF1IX_U"
                    title="Video de YouTube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <h2 className='ubicacionh2'>Ubicación</h2>
            <p>CÓDIGO AZÚL ÁVILA</p>
            <p>Avenida Juan Carlos I, 46, Ávila, España</p>
            <br></br>
            <div className="mapaContainer">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.497178429536!2d-4.7114994845951945!3d40.65047023587057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4794ecb81ed49b%3A0x42a47b2201e3c7a0!2sAvenida%20Juan%20Carlos%20I%2C%2046%2C%20Ávila%2C%20España!5e0!3m2!1ses!2ses!4v1613661595672!5m2!1ses!2ses"
                    width="300"   
                    height="200" 
                    frameBorder="0"
                    style={{border: 0}}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>

            
        </section>
    )
}
export default SobreNosotrosComponent;