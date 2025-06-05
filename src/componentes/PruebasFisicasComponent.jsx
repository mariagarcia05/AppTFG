import './PruebasFisicasComponent.css';
import circuito from '../imagenes/circuito.jpg';
import fuerzah from '../imagenes/fuerzah.png';
import fuerzam from '../imagenes/fuerzam.jpg';
import resistencia from '../imagenes/resistencia.jpg';

function PruebasFisicasComponent() {
    return (
        <section className="pruebas-fisicas">
            <h2 className="titulo">Pruebas físicas para Policía Nacional</h2>
            <p className="pdf-link">
                (Para más información:&nbsp;
                <a href="/documentos/pruebas_fisicas.pdf" download="Pruebas_Fisicas.pdf">
                    Descargar PDF
                </a>
                )
            </p>

            <div className="card">
                <h4>Primer ejercicio (Hombres y Mujeres)</h4>
                <div className="contenido">
                    <div className="texto">
                        <h5>Circuito de agilidad</h5>
                        <p>Objetivo: Medir la agilidad de movimientos del ejecutante.</p>
                    </div>
                    <img src={circuito} alt="Circuito de agilidad" className="imagen" />
                </div>
            </div>

            <div className="card">
                <h4>Segundo ejercicio (Hombres)</h4>
                <div className="contenido">
                    <div className="texto">
                        <h5>Fuerza</h5>
                        <p>Objetivo: Medir la fuerza resistencia de los principales músculos dorsales, flexores de los brazos y la cintura escapulo-humeral.</p>
                    </div>
                    <img src={fuerzah} alt="Fuerza hombres" className="imagen" />
                </div>
            </div>

            <div className="card">
                <h4>Segundo ejercicio (Mujeres)</h4>
                <div className="contenido">
                    <div className="texto">
                        <h5>Fuerza</h5>
                        <p>Objetivo: Medir la fuerza de los principales músculos flexores de los brazos y la cintura escapulo-humeral.</p>
                    </div>
                    <img src={fuerzam} alt="Fuerza mujeres" className="imagen" />
                </div>
            </div>

            <div className="card">
                <h4>Tercer ejercicio (Hombres y Mujeres)</h4>
                <div className="contenido">
                    <div className="texto">
                        <h5>Resistencia</h5>
                        <p>Objetivo: Medir la resistencia orgánica de los opositores.</p>
                    </div>
                    <img src={resistencia} alt="Resistencia" className="imagen" />
                </div>
            </div>
        </section>
    );
}

export default PruebasFisicasComponent;
