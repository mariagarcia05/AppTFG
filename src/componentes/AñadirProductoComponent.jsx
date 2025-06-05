import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AñadirProductoComponent.css';

function AñadirProductoComponent() {
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
    });

    const [imagen, setImagen] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setImagen(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const precio = parseFloat(producto.precio);
        const stock = parseInt(producto.stock);

        if (precio < 0 || stock < 0) {
            alert("El precio y el stock no pueden ser negativos.");
            return;
        }

        const formData = new FormData();
    formData.append("nombre", producto.nombre);
    formData.append("descripcion", producto.descripcion);
    formData.append("precio", producto.precio);
    formData.append("stock", producto.stock);
    formData.append("imagen", imagen);

    fetch("http://localhost:8080/producto", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(() => {
        alert("Producto añadido correctamente.");
        navigate("/materialEstudio");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("No se pudo guardar el producto.");
    });
    };

    return (
        <div className="formularioProducto">
            <h2>Añadir nuevo producto</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
                <textarea name="descripcion" placeholder="Descripción" onChange={handleChange} required />
                <input type="number" name="precio" placeholder="Precio" step="0.01" min="0" onChange={handleChange} required />
                <input type="number" name="stock" placeholder="Stock" min="0" onChange={handleChange} required />
                <input type="file" name="imagen" onChange={handleImageChange} required />
                <button type="submit">Añadir producto</button>
            </form>
        </div>
    );
}

export default AñadirProductoComponent;
