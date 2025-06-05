import { useState, useEffect } from 'react';
import axios from 'axios';
import './StockComponent.css';

function StockComponent() {
    const [productos, setProductos] = useState([]);
    const [stockASumar, setStockASumar] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8080/producto")
            .then(res => setProductos(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleChange = (id, value) => {
        if (value >= 0) {
            setStockASumar({ ...stockASumar, [id]: value });
        }
    };

    const sumarStock = (id) => {
    const cantidad = parseInt(stockASumar[id]);
    if (isNaN(cantidad) || cantidad <= 0) {
        return alert("Introduce una cantidad positiva mayor que cero");
    }

    axios.put(`http://localhost:8080/producto/${id}/stock`, { stock: cantidad })
        .then(() => {
            alert("Stock sumado correctamente");
            setProductos(productos.map(p =>
                p.id === id ? { ...p, stock: p.stock + cantidad } : p
            ));
        })
        .catch(err => {
            alert(err.response?.data || "Error al sumar stock");
        });
};

const quitarStock = (id) => {
    const cantidad = parseInt(stockASumar[id]);
    if (isNaN(cantidad) || cantidad <= 0) {
        return alert("Introduce una cantidad positiva mayor que cero");
    }

    axios.put(`http://localhost:8080/producto/${id}/stock`, { stock: -cantidad })
        .then(() => {
            alert("Stock restado correctamente");
            setProductos(productos.map(p =>
                p.id === id ? { ...p, stock: p.stock - cantidad } : p
            ));
        })
        .catch(err => {
            alert(err.response?.data || "Error al restar stock");
        });
};


    return (
        <section className="stock-section">
            <h2>Gestión de Stock</h2>

            <div className="tabla-stock">
                {productos.map(producto => (
                    <div key={producto.id} className="producto-stock">
                        <p><strong>{producto.nombre}</strong> - Stock actual: {producto.stock}</p>
                        <input
                            type="number"
                            placeholder="Cantidad"
                            min="0"
                            onChange={(e) => handleChange(producto.id, e.target.value)}
                        />
                        <button onClick={() => sumarStock(producto.id)}>Añadir Stock</button>
                        <button onClick={() => quitarStock(producto.id)}>Quitar Stock</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StockComponent;
