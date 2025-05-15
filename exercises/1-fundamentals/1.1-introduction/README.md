# Introducción a TypeScript

Esta sección te introduce a los fundamentos de TypeScript y por qué es beneficioso usarlo con Angular.

## ¿Qué es TypeScript?

TypeScript es un superconjunto de JavaScript que añade tipado estático y otras características a JavaScript. Fue desarrollado por Microsoft y se compila a JavaScript puro, por lo que puede ejecutarse en cualquier navegador o entorno que soporte JavaScript.

## ¿Por qué usar TypeScript con Angular?

- **Detección temprana de errores**: El sistema de tipos ayuda a encontrar errores durante el desarrollo, no en tiempo de ejecución
- **Mejor herramientas de desarrollo**: Autocompletado, navegación y refactorización mejorados
- **Código más mantenible**: Las interfaces y tipos hacen que el código sea más autodocumentado
- **Angular está escrito en TypeScript**: Aprovechar el mismo lenguaje facilita la comprensión del framework

## Contenido de esta sección

- `types.ts` - Ejemplos de tipos básicos y anotaciones
- `interfaces.ts` - Interfaces y tipos personalizados
- `start.ts` - Ejercicios para practicar lo aprendido
- `HINTS.md` - Sugerencias para completar los ejercicios

## Instrucciones

1. Revisa primero los archivos `types.ts` e `interfaces.ts` para familiarizarte con la sintaxis básica
2. Abre `start.ts` y completa los ejercicios siguiendo las instrucciones en los comentarios
3. Compila y ejecuta tus soluciones para verificar que funcionan correctamente
4. Si te quedas atascado, consulta `HINTS.md` para obtener pistas
5. Una vez completados los ejercicios básicos, intenta resolver los desafíos en `challenges.ts`

## Compilación y ejecución

Para compilar un archivo TypeScript:

```bash
# Instalar TypeScript si aún no lo tienes
npm install -g typescript

# Compilar un archivo
tsc types.ts

# Compilar y ejecutar en un solo paso con ts-node
npx ts-node types.ts
```

## Recursos adicionales

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript en 5 minutos](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Playground de TypeScript](https://www.typescriptlang.org/play)
