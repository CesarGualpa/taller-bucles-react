import { useState } from "react";

function Caso2TooManyRendersError() {
  const [contador, setContador] = useState(0);

  // ERROR:
  // Esta actualización de estado se ejecuta directamente durante el renderizado.
  // Cada setContador provoca un nuevo render.
  // Ese nuevo render vuelve a ejecutar setContador.
  // Resultado: "Too many re-renders".
  setContador(contador + 1);

  return (
    <div>
      <h3>Caso 2 - Versión con error</h3>
      <p>Contador: {contador}</p>
    </div>
  );
}

export default Caso2TooManyRendersError;