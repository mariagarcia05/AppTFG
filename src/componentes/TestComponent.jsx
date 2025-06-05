import React, { useState } from 'react';
import './TestComponent.css';

const preguntas = [
  {
    id: 1,
    pregunta: '¿Cuál es la capital de España?',
    opciones: { a: 'Madrid', b: 'Barcelona', c: 'Valencia' },
    correcta: 'a'
  },
  {
    id: 2,
    pregunta: '¿Qué cuerpo pertenece al Ministerio del Interior?',
    opciones: { a: 'Policía Nacional', b: 'Guardia Urbana', c: 'Bomberos' },
    correcta: 'a'
  },
  {
    id: 3,
    pregunta: '¿Cuál es la velocidad máxima en ciudad?',
    opciones: { a: '50 km/h', b: '30 km/h', c: '60 km/h' },
    correcta: 'a'
  },
  {
    id: 4,
    pregunta: '¿Qué documento es obligatorio en un coche?',
    opciones: { a: 'Permiso de conducir', b: 'Factura de compra', c: 'Carnet escolar' },
    correcta: 'a'
  },
  {
    id: 5,
    pregunta: '¿Quién es el presidente del Gobierno en 2025?',
    opciones: { a: 'Pedro Sánchez', b: 'Alberto Núñez Feijóo', c: 'Yolanda Díaz' },
    correcta: 'a'
  },
  {
    id: 6,
    pregunta: '¿Qué fuerza tiene competencia en puertos y aeropuertos?',
    opciones: { a: 'Guardia Civil', b: 'Policía Nacional', c: 'Policía Local' },
    correcta: 'b'
  },
  {
    id: 7,
    pregunta: '¿En qué año se fundó la Policía Nacional?',
    opciones: { a: '1824', b: '1924', c: '1978' },
    correcta: 'a'
  },
  {
    id: 8,
    pregunta: '¿Qué arma utiliza habitualmente la Policía Nacional?',
    opciones: { a: 'Glock 17', b: 'Beretta 92', c: 'Sig Sauer P226' },
    correcta: 'a'
  },
  {
    id: 9,
    pregunta: '¿Qué color lleva el uniforme habitual?',
    opciones: { a: 'Negro', b: 'Azul marino', c: 'Gris' },
    correcta: 'b'
  },
  {
    id: 10,
    pregunta: '¿Cuál es el teléfono de emergencias?',
    opciones: { a: '091', b: '061', c: '112' },
    correcta: 'c'
  }
];

function TestComponent() {
  const [correcciones, setCorrecciones] = useState({});
  const [respuestas, setRespuestas] = useState({});
  const [nota, setNota] = useState(null);

  const handleChange = (e, id) => {
    setRespuestas({
      ...respuestas,
      [id]: e.target.value
    });
  };

  const corregirTest = () => {
    let correctas = 0;
    const nuevaCorreccion = {};

    preguntas.forEach(({ id, correcta }) => {
      const esCorrecta = respuestas[id] === correcta;
      if (esCorrecta) correctas++;
      nuevaCorreccion[id] = esCorrecta;
    });

    const notaCalculada = (correctas / preguntas.length) * 10;
    setNota(notaCalculada.toFixed(1));
    setCorrecciones(nuevaCorreccion);
  };

  const preguntasIzquierda = preguntas.slice(0, 5);
  const preguntasDerecha = preguntas.slice(5, 10);

  return (
    <div className="test-container">
      <h2>Test Policía Nacional</h2>

      <div className="preguntas-row">
        <div className="preguntas-col">
          {preguntasIzquierda.map(({ id, pregunta, opciones }) => (
            <div key={id} className="pregunta">
              <p><strong>{id}. {pregunta}</strong></p>
              <div className="opciones">
                {Object.entries(opciones).map(([key, texto]) => (
                  <label key={key}>
                    <input
                      type="radio"
                      name={`pregunta-${id}`}
                      value={key}
                      checked={respuestas[id] === key}
                      onChange={e => handleChange(e, id)}
                    />
                    {key.toUpperCase()}. {texto}
                  </label>
                ))}
              </div>
              {correcciones[id] !== undefined && (
                <p style={{
                  marginTop: '8px',
                  fontWeight: 'bold',
                  color: correcciones[id] ? '#3c763d' : '#a94442'
                }}>
                  {correcciones[id]
                    ? '✅ Correcta'
                    : `❌ Incorrecta (Respuesta correcta: ${preguntas.find(p => p.id === id).correcta.toUpperCase()})`}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="preguntas-col">
          {preguntasDerecha.map(({ id, pregunta, opciones }) => (
            <div key={id} className="pregunta">
              <p><strong>{id}. {pregunta}</strong></p>
              <div className="opciones">
                {Object.entries(opciones).map(([key, texto]) => (
                  <label key={key}>
                    <input
                      type="radio"
                      name={`pregunta-${id}`}
                      value={key}
                      checked={respuestas[id] === key}
                      onChange={e => handleChange(e, id)}
                    />
                    {key.toUpperCase()}. {texto}
                  </label>
                ))}
              </div>
              {correcciones[id] !== undefined && (
                <p style={{
                  marginTop: '8px',
                  fontWeight: 'bold',
                  color: correcciones[id] ? '#3c763d' : '#a94442'
                }}>
                  {correcciones[id]
                    ? '✅ Correcta'
                    : `❌ Incorrecta (Respuesta correcta: ${preguntas.find(p => p.id === id).correcta.toUpperCase()})`}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <button className="boton-corregir" onClick={corregirTest}>Corregir</button>

      {nota !== null && (
        <div className={`resultado ${nota < 5 ? 'incorrecto' : ''}`}>
          Tu nota es: {nota} / 10
        </div>
      )}
    </div>
  );
}

export default TestComponent;
