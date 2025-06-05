import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importa Axios
import './RegistroComponent.css';

function RegistroComponent() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        correo: '',
        usuario: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const telefonoRegex = /^[0-9]{9}$/;
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!telefonoRegex.test(formData.telefono)) {
            alert("El teléfono debe tener 9 dígitos numéricos.");
            return;
        }
    
        if (!correoRegex.test(formData.correo)) {
            alert("El correo electrónico no es válido.");
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:8080/usuario", formData);
    
            if (response.status === 200) {
                alert("Registro exitoso");
                setFormData({ nombre: '', apellidos: '', telefono: '', correo: '', usuario: '', password: '' });
            }
        } catch (error) {
            console.error("Error:", error);
    
            if (error.response) {
                if (error.response.status === 400 && error.response.data.message) {
                    alert(`${error.response.data.message}`);
                } else {
                    alert(`Error en el registro: ${error.response.data.message || JSON.stringify(error.response.data)}`);
                }
            } else if (error.request) {
                console.error("No se recibió respuesta del servidor", error.request);
                alert("No se recibió respuesta del servidor");
            } else {
                console.error("Error al configurar la solicitud", error.message);
                alert(`Error: ${error.message}`);
            }
        }
    };
    
    
    
    return (
        <section className="registro-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="text" name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="email" name="correo" placeholder="Correo Electrónico" value={formData.correo} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="text" name="usuario" placeholder="Usuario" value={formData.usuario} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Registrarse</button>
                <p className="login-link">
                    ¿Ya tienes cuenta? <Link to="/inicioSesion">Inicia sesión</Link>
                </p>
            </form>
        </section>
    );
}

export default RegistroComponent;
