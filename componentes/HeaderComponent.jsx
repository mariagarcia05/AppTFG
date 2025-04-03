import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../imagenes/Logo.png';
import './HeaderComponent.css';

function HeaderComponent() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem("usuario");
    
        console.log("Datos en localStorage:", usuarioGuardado); // 🔹 Depuración
    
        if (usuarioGuardado) {
            try {
                const datosUsuario = JSON.parse(usuarioGuardado);
                console.log("Usuario recuperado:", datosUsuario); // 🔹 Depuración
    
                if (datosUsuario && datosUsuario.usuario) {
                    setUsuario(datosUsuario.usuario); // Ahora sí se mostrará el nombre
                } else {
                    console.warn("No se encontró el campo 'usuario' en localStorage.");
                }
            } catch (error) {
                console.error("Error al parsear usuario:", error);
            }
        }
    }, []);
    
    

    const handleLogout = () => {
        localStorage.removeItem("usuario"); // Elimina el usuario del localStorage
        setUsuario(null);
        window.location.href = "/"; // Redirige a la página principal
    };

    return (
        <header>
            <Link to="/inicioSesion">
                <img src={logo} alt="Logo principal" className="logo-img" />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/sobreNosotros">Sobre nosotros</Link></li>
                    <li><Link to="/pruebasFisicas">Pruebas físicas</Link></li>
                    <li><Link to="/materialEstudio">Material de estudio</Link></li>
                </ul>
            </nav>

            {usuario && ( // 🔹 Solo muestra esto si hay un usuario autenticado
                <div className="usuario-info">
                    <span>Hola, {usuario}</span>
                    <button className='cerrarSesion' onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}
        </header>
    );
}

export default HeaderComponent;
