import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ResumenCompra.css";

function ResumenCompraComponent() {
  const location = useLocation();
  const { libro } = location.state; 

  const [cantidad, setCantidad] = useState(1);
  const [domicilio, setDomicilio] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [precioTotal, setPrecioTotal] = useState(libro.precio);
  const [mensaje, setMensaje] = useState(""); 
  const [esError, setEsError] = useState(false);

  useEffect(() => {
    setPrecioTotal(libro.precio * cantidad);
  }, [cantidad, libro.precio]);

  const handleCompra = async (e) => {
    e.preventDefault();
  
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario || !usuario.id) {  
      setMensaje("Debes iniciar sesión para realizar la compra.");
      setEsError(true);
      return;
    }
    if (!libro || !libro.id) {
      setMensaje("Error: El producto no tiene un ID válido.");
      setEsError(true);
      return;
    }
    
  
    const compraData = {
      cantidad,
      domicilio,
      metodoPago,
      usuario: { id: usuario.id }, 
      producto: {
        id: libro.id,
        nombre: libro.titulo,
        precio: libro.precio,
        stock: libro.stock,
      },
    };
    console.log("Datos que se envían al servidor:", compraData); 
  
    try {
      const response = await fetch("http://localhost:8080/historial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compraData),
      });
  
       if (!response.ok) {
      const errorText = await response.text(); // Intentar leer el mensaje del servidor
      throw new Error(`Error en la compra: ${response.status} - ${errorText}`);
    }
  
      const data = await response.json();
  
      if (!data.message) {
        throw new Error("Respuesta del servidor inválida.");
      }
  
      setMensaje(data.message);
      setEsError(data.message.toLowerCase().includes("error"));
    } catch (error) {
      setMensaje(error.message || "Error al realizar la compra. Intenta nuevamente.");
      setEsError(true);
      console.error("Error en la compra:", error);
    }
  };
  

  return (
    <section>
      <h2 className="titulo">Resumen de la Compra</h2>
      <form onSubmit={handleCompra} className="resumen-compra">
        <div className="producto-info">
       <img src={`http://localhost:8080${libro.imagen_url}`} alt={libro.titulo || libro.nombre} />
          <div>
          <h3>{libro.titulo || libro.nombre}</h3>
          <p><strong>Precio:</strong> {libro.precio.toFixed(2)}€</p>
          </div>
        </div>

        <div className="compra-detalles">
          <div>
            <label>Cantidad:</label>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
              min="1"
            />
          </div>
          <div>
            <label>Domicilio de Envío:</label>
            <input
              type="text"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              placeholder="Introduce tu dirección"
              required
            />
          </div>
          <div>
            <label>Método de Pago:</label>
            <select value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)} required>
              <option value="">Seleccionar...</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta">Tarjeta</option>
              <option value="Transferencia">Transferencia</option>
            </select>
          </div>
          <div>
            <p className="total"><strong className="totalp">Total:</strong> {precioTotal.toFixed(2)}€</p>
          </div>
        </div>

        {mensaje && <p className={esError ? "error" : "exito"}>{mensaje}</p>}

        <button type="submit" className="btn-compra">
          Confirmar Compra
        </button>
      </form>
    </section>
  );
}

export default ResumenCompraComponent;
