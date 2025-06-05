import { useNavigate } from "react-router-dom";
import './MaterialEstudioComponent.css';

import { useEffect, useState } from 'react';



function MaterialEstudioComponent() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    fetch("http://localhost:8080/producto")
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.error("Error al cargar productos:", err));
    }   , []);

    const navigate = useNavigate();
    const [esAdmin, setEsAdmin] = useState(false);

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (usuario && usuario.usuario === "admin") {
            setEsAdmin(true);
        }
    }, []);
    

    const handleCompra = (libro) => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (!usuario) {
            alert("Debes iniciar sesión para realizar la compra.");
            return;
        }

        const compra = {
            cantidad: 1,
            producto: { id: libro.id },
            usuario: { id: usuario.id }
        };

        fetch("http://localhost:8080/historial", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(compra)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            navigate("/historial");
        })
        .catch(error => {
            console.error("Error al realizar la compra:", error);
            alert("Error al realizar la compra.");
        });
    };

    const handleGestionStock = () => {
        navigate("/stock");
    };
    const handleAñadirProducto = () => {
        navigate("/añadirProducto");
    };

    const handleEliminar = (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este producto?")) return;

    fetch(`http://localhost:8080/producto/${id}`, {
        method: "DELETE"
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudo eliminar el producto");
        }
        // Eliminar el producto del estado para actualizar la vista
        setProductos(productos.filter(producto => producto.id !== id));
        alert("Producto eliminado correctamente.");
    })
    .catch(error => {
        console.error("Error al eliminar el producto:", error);
        alert("Hubo un error al eliminar el producto.");
    });
};


    return (
        <section>
            <h2 className="h2Temario">Temario</h2>
            {esAdmin && (
                <div className="stock-container">
                    <button className="botonStock" onClick={handleGestionStock}>Gestionar stock</button>
                </div>
                
            )}
            <br></br>
            {esAdmin && (
                <div className="añadirProducto-container">
                    <button className="botonAñadirProducto" onClick={handleAñadirProducto}>Añadir Producto</button>
                </div>
                
            )}
            <br></br>
            {localStorage.getItem("usuario") && (
                <div className="historial-container">
                    <button className="botonHistorial" onClick={() => navigate("/historial")}>
                        Ver historial de compras
                    </button>
                </div>
            )}
            <div className='contenedor-principal'>
                {productos.map((libro) => (
                    <div className='libro' key={libro.id}>
                    <img src={`http://localhost:8080${libro.imagen_url}`} alt={libro.nombre} />
                        <p>{libro.nombre}</p>
                        <button className='botonLibro' onClick={() => navigate("/resumen", { state: { libro } })}>
                        Comprar
                        </button>
                        <br></br>
                        {esAdmin && (
                            <button
                                className="botonEliminar"
                                onClick={() => handleEliminar(libro.id)}
                            >
                            Eliminar
                            </button>
                        )}
                        {esAdmin &&(
                            <button className='botonLibro' onClick={() => navigate("/editar", { state: { libro } })}>
                        Editar
                        </button>
                        )}
                        
                        <br></br>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MaterialEstudioComponent;
