import { useEffect, useState } from "react";

function Caso1UseEffectError() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // ERROR:
    // Esta actualización cambia el estado.
    // Como "contador" está en las dependencias,
    // el efecto se vuelve a ejecutar cada vez que contador cambia.
    // Resultado: bucle infinito.
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h3>Caso 1 - Versión con error</h3>
      <p>Contador: {contador}</p>
    </div>
  );
}

export default Caso1UseEffectError;