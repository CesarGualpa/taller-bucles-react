import "./TallerBucles.css";

import Caso1UseEffectCorregido from "../components/bucles/Caso1UseEffectCorregido";
import Caso2TooManyRendersCorregido from "../components/bucles/Caso2TooManyRendersCorregido";

function TallerBucles() {
  return (
    <div className="taller-bucles-page">
      <section className="taller-header">
        <h1>Taller de Bucles Infinitos en React</h1>
        <p>
          Reproducción, análisis y corrección de errores frecuentes de
          renderizado en componentes React.
        </p>
      </section>

      <section className="bloque-explicativo">
        <h2>Objetivo del taller</h2>

        <p>
          Este proyecto contiene dos casos independientes sobre errores comunes
          de renderizado en React. Cada caso tiene una versión con error y una
          versión corregida.
        </p>

        <p>
          Las versiones con error están creadas en archivos separados, pero no se
          renderizan por defecto para evitar bloquear el navegador.
        </p>
      </section>

      <section className="casos-grid">
        <div className="caso-card error-card">
          <div className="caso-etiqueta error">Versión con error</div>

          <h3>Caso 1: Bucle infinito con useEffect</h3>

          <p>
            Archivo:
            <br />
            <code>src/components/bucles/Caso1UseEffectError.jsx</code>
          </p>

          <p>
            El error ocurre porque se actualiza el estado dentro de{" "}
            <code>useEffect</code> y ese mismo estado se encuentra en el arreglo
            de dependencias.
          </p>

          <p className="nota-error">
            No se renderiza por defecto para evitar un bucle infinito.
          </p>
        </div>

        <Caso1UseEffectCorregido />

        <div className="caso-card error-card">
          <div className="caso-etiqueta error">Versión con error</div>

          <h3>Caso 2: Too many re-renders</h3>

          <p>
            Archivo:
            <br />
            <code>src/components/bucles/Caso2TooManyRendersError.jsx</code>
          </p>

          <p>
            El error ocurre porque se ejecuta <code>setContador</code>{" "}
            directamente en el cuerpo del componente durante el renderizado.
          </p>

          <p className="nota-error">
            No se renderiza por defecto para evitar que React detenga la
            aplicación.
          </p>
        </div>

        <Caso2TooManyRendersCorregido />
      </section>
    </div>
  );
}

export default TallerBucles;