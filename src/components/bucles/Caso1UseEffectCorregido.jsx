import { useEffect, useState } from "react";

function Caso1UseEffectCorregido() {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    // SOLUCIÓN:
    // El efecto actualiza el estado solamente si activo es true
    // y si contador todavía es menor que 5.
    // Así se evita que el efecto se ejecute para siempre.
    if (activo && contador < 5) {
      setContador((valorActual) => valorActual + 1);
    }
  }, [activo, contador]);

  function iniciarProceso() {
    setActivo(true);
  }

  function reiniciarProceso() {
    setContador(0);
    setActivo(false);
  }

  return (
    <div className="caso-card">
      <div className="caso-etiqueta correcto">Versión corregida</div>

      <h3>Caso 1: useEffect controlado</h3>

      <p>
        Este ejemplo usa <strong>useEffect</strong>, pero evita el bucle
        infinito mediante una condición de control.
      </p>

      <div className="resultado-box">
        <p>Contador: {contador}</p>
        <p>Estado: {activo ? "Activo" : "Detenido"}</p>
      </div>

      <div className="botones-demo">
        <button onClick={iniciarProceso}>Iniciar prueba</button>
        <button onClick={reiniciarProceso}>Reiniciar</button>
      </div>

      <p className="nota">
        El contador se detiene al llegar a 5, por eso no se genera un bucle
        infinito.
      </p>
    </div>
  );
}

export default Caso1UseEffectCorregido;