import { useState } from "react";
import axios from "axios";
import "./InformacionComponent.css";

function InformacionComponent() {
    const initialState = {
        nombre: "",
        apellidos: "",
        curso: "",
        modalidad: "",
        provincia: "",
        telefono: "",
        email: ""
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/informacion", formData);
            alert(response.data); // Mensaje de éxito
        } catch (error) {
            console.error("Error al enviar la información:", error);
            alert("Hubo un error al enviar la información.");
        }
    };

    const handleReset = () => {
        setFormData(initialState);
    };

    return (
        <section className="formulario-informacion">
            <h2 className="tituloinformacion">¡Únete a Código Azul!</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="fila">
                    <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} required />
                    <input type="text" name="apellidos" placeholder="Tus apellidos" value={formData.apellidos} onChange={handleChange} required />
                </div>
                <div className="fila">
                    <select name="curso" value={formData.curso} onChange={handleChange} required>
                        <option value="" disabled>Selecciona curso</option>
                        <option value="policia-nacional">Policía Nacional</option>
                        <option value="policia-local">Policía Local</option>
                        <option value="policia-municipal">Policía Municipal</option>
                    </select>
                    <select name="modalidad" value={formData.modalidad} onChange={handleChange} required>
                        <option value="" disabled>Modalidad</option>
                        <option value="presencial">Presencial</option>
                        <option value="online">Online</option>
                    </select>
                </div>
                <div className="fila">
                    <select name="provincia" value={formData.provincia} onChange={handleChange} required>
                        <option value="" disabled>Provincia</option>
                        <option value="madrid">Madrid</option>
                        <option value="avila">Ávila</option>
                        <option value="ciudad-real">Ciudad Real</option>
                    </select>
                    <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
                </div>
                <input type="email" name="email" placeholder="Dirección de email" className="email-input" value={formData.email} onChange={handleChange} required />
                
                <div className="botones">
                    <button type="submit" className="boton">Enviar</button>
                    <br></br>
                    <br></br>
                    <button  type="button" className="boton" onClick={handleReset}>Borrar</button>
                </div>
            </form>
        </section>
    );
}

export default InformacionComponent;
