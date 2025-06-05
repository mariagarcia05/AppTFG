import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importa Axios
import './InicioSesionComponent.css';

function InicioSesionComponent() {
    const [loginData, setLoginData] = useState({
        usuario: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:8080/usuario/login", loginData);
    
            if (response.status === 200) {
                const usuario = response.data;  // Ahora esto es un objeto con los datos del usuario
                localStorage.setItem("usuario", JSON.stringify(usuario));  // Guarda el objeto completo
    
                console.log("Usuario guardado en localStorage:", usuario);
                alert("Inicio de sesión exitoso");
                navigate("/"); // Redirige a la página principal
                window.location.reload(); // Recarga la página para actualizar el estado en HeaderComponent
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Usuario o contraseña incorrectos");
        }
    };
    
    

    return (
        <section className="login-container">
            <h2>Inicio de Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" name="usuario" placeholder="Usuario" value={loginData.usuario} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="password" name="password" placeholder="Contraseña" value={loginData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Ingresar</button>
                <p className="register-link">
                    ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
                </p>
            </form>
        </section>
    );
}

export default InicioSesionComponent;
