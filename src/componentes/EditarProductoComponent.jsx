import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditarProductoComponent.css';

const EditarProducto = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const producto = location.state?.libro;

  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
  });

  const [imagen, setImagen] = useState(null); //aquí se guarda la imagen seleccionada

  useEffect(() => {
    if (producto) {
      setForm({
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        stock: producto.stock
      });
    } else {
      alert("No se encontró el producto para editar");
      navigate('/');
    }
  }, [producto, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Añadir los campos normales
    for (const key in form) {
      formData.append(key, form[key]);
    }

    // Añadir la imagen si se seleccionó
    if (imagen) {
      formData.append("imagen", imagen);
    }

    try {
      await axios.put(`http://localhost:8080/producto/${producto.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Producto actualizado correctamente');
      navigate('/materialEstudio');
    } catch (err) {
      console.error(err);
      alert('Error al actualizar el producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="editarProducto-container" encType="multipart/form-data">
      <h2>Editar Producto</h2>

      <label>Nombre:</label>
      <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />

      <label>Descripción:</label>
      <textarea name="descripcion" value={form.descripcion} onChange={handleChange} required />

      <label>Precio:</label>
      <input type="number" step="0.01" name="precio" value={form.precio} onChange={handleChange} required />

      <label>Stock:</label>
      <input type="number" name="stock" value={form.stock} onChange={handleChange} required />

      <label>Seleccionar nueva imagen:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      <div className="editarProducto-botones">
        <button type="submit" className="botonGuardar">Guardar</button>
        <button type="button" className="botonCancelar" onClick={() => navigate(-1)}>Cancelar</button>
      </div>
    </form>
  );
};

export default EditarProducto;
