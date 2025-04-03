import './PruebasFisicasComponent.css';
import circuito from '../imagenes/circuito.jpg';
import fuerzah from '../imagenes/fuerzah.png';
import fuerzam from '../imagenes/fuerzam.jpg';
import resistencia from '../imagenes/resistencia.jpg';



function PruebasFisicasComponent(){
    return(
        <section>
            <h2 className='fisicash2'>Pruebas físicas para Policia Nacional</h2>
            <br></br>
            <p>(Para más información:  
                <a href="/documentos/pruebas_fisicas.pdf" download="Pruebas_Fisicas.pdf">
                Descargar PDF)
                 </a>
            </p>
            <div className='contenedor1'>
                <h4>Primer ejercicio (Hombres y mujeres)</h4>
                <div className='contenido'>
                    <div className='texto'>
                        <p className='s'>Circuito de agilidad</p>
                        <p>Objetivo: Medir la agilidad de movimientos del ejecutante</p>
                    </div>
                    <div className='imagen'>
                        <img src={circuito} alt="Circuito de agilidad" />
                    </div>
                </div>
            </div>
        
            <div className="linea-azul"></div>

            <div className='contenedor1'>
                <h4>Segundo ejercicio (Hombres)</h4>
                <div className='contenido'>
                    <div className='texto'>
                        <p className='s'>Fuerza</p>
                        <p>Objetivo: Medir la fuerza resistencia de los principales músculos dorsales, flexores de los brazos y la cintura escapulo-humeral. </p>
                    </div>
                    <div className='imagen'>
                        <img src={fuerzah} alt="Circuito de agilidad" />
                    </div>
                </div>
            </div>
           
            <div className="linea-azul"></div>

            <div className='contenedor1'>
                <h4>Segundo ejercicio (Mujeres)</h4>
                <div className='contenido'>
                    <div className='texto'>
                        <p className='s'>Fuerza</p>
                        <p>Objetivo: Medir la fuerza de los principales músculos flexores de los brazos y la cintura escapulo-humeral </p>
                    </div>
                    <div className='imagen'>
                        <img src={fuerzam} alt="Circuito de agilidad" />
                    </div>
                </div>
            </div>
            
            <div className="linea-azul"></div>

            <div className='contenedor1'>
                <h4>Tercer ejercicio (Hombres y Mujeres)</h4>
                <div className='contenido'>
                    <div className='texto'>
                        <p className='s'>Resistencia</p>
                        <p>Objetivo:  Medir la resistencia orgánica de los opositores</p>
                    </div>
                    <div className='imagen'>
                        <img src={resistencia} alt="Circuito de agilidad" />
                    </div>
                </div>
            </div>
            <div className="linea-azul"></div>

            


        </section>
    );
}

export default PruebasFisicasComponent;
