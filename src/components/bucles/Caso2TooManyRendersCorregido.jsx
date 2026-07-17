import { useState } from "react";

function Caso2TooManyRendersCorregido() {
  const [contador, setContador] = useState(0);

  function aumentarContador() {
    // SOLUCIÓN:
    // El estado se actualiza solamente cuando el usuario hace clic.
    // Ya no se actualiza automáticamente durante el renderizado.
    setContador((valorActual) => valorActual + 1);
  }

  function reiniciarContador() {
    setContador(0);
  }

  return (
    <div className="caso-card">
      <div className="caso-etiqueta correcto">Versión corregida</div>

      <h3>Caso 2: Too many re-renders corregido</h3>

      <p>
        Este ejemplo evita actualizar el estado directamente durante el
        renderizado del componente.
      </p>

      <div className="resultado-box">
        <p>Contador: {contador}</p>
      </div>

      <div className="botones-demo">
        <button onClick={aumentarContador}>Aumentar</button>
        <button onClick={reiniciarContador}>Reiniciar</button>
      </div>

      <p className="nota">
        El estado solo cambia cuando ocurre un evento del usuario.
      </p>
    </div>
  );
}

export default Caso2TooManyRendersCorregido;