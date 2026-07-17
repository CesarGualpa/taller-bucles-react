# Taller de Bucles Infinitos en React

## Descripción del proyecto

Este proyecto fue desarrollado en React con Vite para reproducir, analizar y corregir dos errores frecuentes relacionados con bucles infinitos y renderizados excesivos en React.

El proyecto contiene dos casos independientes:

1. Bucle infinito mediante `useEffect`.
2. Error `Too many re-renders`.

Cada caso incluye una versión con error y una versión corregida. Las versiones con error están creadas en archivos separados, pero no se renderizan por defecto para evitar bloquear el navegador.

## Caso 1: Bucle infinito mediante useEffect

### Archivo con error

src/components/bucles/Caso1UseEffectError.jsx