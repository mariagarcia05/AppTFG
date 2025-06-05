import { useEffect, useState } from "react";
import './MaterialEstudioComponent.css';

function HistorialComponent() {
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (usuario && usuario.id) {
            fetch(`http://localhost:8080/historial/${usuario.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Historial real:", data);
                    setCompras(data);
                })
                .catch(error => console.error("Error al obtener historial:", error));
        }
    }, []);

    return (
        <section>
            <h2 className="h2Temario">Historial de Compras</h2>
            {compras.length === 0 ? (
                <p>No hay compras registradas.</p>
            ) : (
                <div className='contenedor-principal'>
                    {compras.map((compra, index) => (
                        <div className='libro' key={index}>
                            <img
                                src={compra.producto.imagen_url ? `http://localhost:8080${compra.producto.imagen_url}` : "https://via.placeholder.com/150"}
                                alt={compra.producto.nombre}
                                className="imagenProducto"
                            />

                            <p><strong>Comprado por:</strong> {compra.nombre} {compra.apellido}</p>
                            <p><strong>Teléfono:</strong> {compra.telefono}</p>
                            <p><strong>Producto:</strong> {compra.producto.nombre}</p>
                            <p><strong>Precio:</strong> {compra.producto.precio} €</p>
                            <p><strong>Cantidad:</strong> {compra.cantidad}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default HistorialComponent;