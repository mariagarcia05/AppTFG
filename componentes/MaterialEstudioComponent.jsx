import { useNavigate } from "react-router-dom";
import './MaterialEstudioComponent.css';
import l1 from '../imagenes/l1.webp';
import l2 from '../imagenes/l2.webp';
import l3 from '../imagenes/l3.png';
import l4 from '../imagenes/l4.png';
import l5 from '../imagenes/l5.png';
import l6 from '../imagenes/l6.webp';
import l7 from '../imagenes/l7.webp';
import l8 from '../imagenes/l8.webp';
import l9 from '../imagenes/l9.webp';

const libros = [
    { id: 1, imagen: l1, titulo: "Ascenso a Oficial de Policía 2024 – 2025", precio: 35 },
    { id: 2, imagen: l2, titulo: "Libro Resumido Oficial de Policía", precio: 85 },
    { id: 3, imagen: l3, titulo: "Simulacros Policía Nacional Vol.3", precio: 25 },
    { id: 4, imagen: l4, titulo: "Simulacros Policía Nacional Vol.2", precio: 25 },
    { id: 5, imagen: l5, titulo: "Simulacros Policía Nacional Vol.1", precio: 85 },
    { id: 6, imagen: l6, titulo: "Material Escala Ejecutiva", precio: 250 },
    { id: 7, imagen: l7, titulo: "Material Guardia Civil", precio: 180 },
    { id: 8, imagen: l8, titulo: "Material Policía Nacional", precio: 180 },
    { id: 9, imagen: l9, titulo: "Temario Policía Nacional 2025", precio: 160 }
];

function MaterialEstudioComponent() {
    const navigate = useNavigate();

    const handleCompra = (libro) => {
        navigate("/resumen", { state: { libro } });
    };

    return (
        <section>
            <h2 className="h2Temario">Temario</h2>
            <div className='contenedor-principal'>
                {libros.map((libro) => (
                    <div className='libro' key={libro.id}>
                        <img src={libro.imagen} alt={libro.titulo} />
                        <p>{libro.titulo}</p>
                        {/* <p><strong>Precio:</strong> {libro.precio.toFixed(2)}€</p> */}
                        <button className='botonLibro' onClick={() => handleCompra(libro)}>Comprar</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MaterialEstudioComponent;
