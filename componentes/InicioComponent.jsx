import { Link } from "react-router-dom";
import imagenPrincipal from '../imagenes/geopol_mujer_policia_nacional.webp';
import aprobados from '../imagenes/aprobados.png';
import bitword from '../imagenes/bitword.png';
import online from '../imagenes/online.png';
import presencial from '../imagenes/presencial.png';
import './InicioComponent.css';
function InicioComponent(){
    return(
        <section>
            <div id='contenedor'>
                
            <div className='texto-izq'>
                <p>Disciplina, esfuerzo y constancia: las claves para convertirte en policía. En Código Azul te damos la formación que necesitas para lograrlo. ¿Estás listo?</p>
            </div>
            <div className='imagenPrincipal'>
                <img src={imagenPrincipal} className='logo-imagenPrincipal'/>
            </div>
            <div className='texto-derecha'>
                <p>Plazas limitadas para la mejor preparación. Simulacros, temario actualizado y entrenamientos físicos. ¡Inscríbete hoy en Código Azul y asegura tu plaza!</p>
            </div>
            </div>
            <div className="linea-azul"></div>
            <br></br>
            <h4>La Mejor Academia de Policía Nacional, prepárate online o de forma presencial en Madrid, Valencia, Murcia o Alicante.</h4>
            <br></br>
            <div className='formacionTipos'>
                <div className='caja'>
                    <img src={presencial}/>
                    <h5>FORMACIÓN PRESENCIAL</h5>
                    <br></br>
                    <p>Profesorado altamente cualificado, entre los que encontrarás ex-miembros del Grupo Especial de Operaciones GEO, de la Policía Nacional con los que serás formado y entrenado para afrontar todas las pruebas de tu oposición.</p>
                </div>
                <div className='caja'>
                    <img src={online}/>
                    <h5>FORMACIÓN ONLINE</h5>
                    <br></br>
                    <p>Código azul, la academia OnLine de mayor crecimiento gracias a los excelentes resultados, sólo tienes que ver los comentarios en RSS. Ofrecemos miles de tests por niveles, clases en directo semanales, psicotécnicos, ortografía, inglés, entrevista. ¡Garantíza tu éxito!.</p>
                </div>
                <div className='caja'>
                    <img src={aprobados}/>
                    <h5>ÍNDICE DE APROBADOS</h5>
                    <br></br>
                    <p>Nuestros docentes cuentan con los mayores índices de aprobado, alcanzando una media de hasta un 94% de aptos en la prueba de conocimientos. Los mejores simulacros para afrontar la fase final. Verificadas, la mayoría de las preguntas en exámenes oficiales.</p>
                </div>
                <div className='caja'>
                    <img src={bitword}/>
                    <h5>MÉTODO BIT-WORD</h5>
                    <br></br>
                    <p>Nuestro método «bit-word», basado en palabras clave, asegura seleccionar correctamente entre alternativas en exámenes oficiales, optimizando el proceso de respuesta y aumentando significativamente las posibilidades de conseguir tu apto.</p>
                </div>
            </div>
            <div className='formulario'>
                <div className='parte-izq'>
                <h3>ACADEMIA CÓDIGO AZUL</h3>
                <br></br>
                <h3>Estás a un solo paso...</h3>
                <br></br>
                <p>En Código Azul nos dedicamos plenamente a ofrecerte una formación de primer nivel, que te impulse a lograr tus aspiraciones. Para ello, hemos seleccionado minuciosamente a nuestro equipo docente.</p>
                
                <p>Al unirte a nosotros, recibirás preparación por parte de la élite de las Fuerzas y Cuerpos de Seguridad del Estado. No sólo te formaremos para conseguir tu apto, sino que te inculcaremos los valores y principios que guiarán tu camino dentro del cuerpo que elijas.</p>
                <p>Entendemos que cada aspirante tiene sus propias fortalezas y áreas de mejora. Nuestros tutores y profesores están comprometidos en proporcionar una atención personalizada, asegurando que recibas el apoyo necesario para superar cualquier obstáculo en tu preparación</p>
                <p>Estamos convencidos de la eficacia de nuestro sistema, las cifras de aptos en convocatorias anteriores nos avalan.</p>
                <p>¡Emprende tu camino con los mejores y consigue tu apto!</p>
                <Link to="/informacion">
                    <button className='boton-info'>Quiero Información</button>
                </Link>
                </div>
            </div>
        </section>
    );
}
export default InicioComponent;