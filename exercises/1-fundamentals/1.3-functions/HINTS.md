# Pistas para los ejercicios de Funciones y Genéricos

## Ejercicio 1: Anotaciones de tipo en funciones

- Define los tipos de los parámetros y el tipo de retorno explícitamente
- Usa parámetros opcionales con el símbolo `?` o parámetros por defecto con `=`
- Implementa la lógica siguiendo los requisitos paso a paso
- Usa `toFixed(2)` para formatear números con 2 decimales
- Para capitalizar texto, usa `charAt(0).toUpperCase() + texto.slice(1).toLowerCase()`

```typescript
function calcularPrecioTotal(precioBase: number, porcentajeImpuesto: number, tieneDescuento: boolean): number {
  // Aplicar descuento si corresponde
  let precio = tieneDescuento ? precioBase * 0.9 : precioBase;

  // Aplicar impuesto
  precio = precio * (1 + porcentajeImpuesto / 100);

  // Devolver con 2 decimales
  return parseFloat(precio.toFixed(2));
}

function formatearNombre(nombre: string, apellido: string, capitalizar: boolean = false): string {
  if (capitalizar) {
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
    return `${nombre} ${apellido}`;
  }
  return `${nombre.toLowerCase()} ${apellido.toLowerCase()}`;
}
```

## Ejercicio 2: Funciones como parámetros y retorno

- Define un alias de tipo para la función con `type`
- Especifica los tipos de parámetros y retorno en la definición del tipo
- Para cada operación, implementa una función que cumpla con el tipo definido
- En la función `calculadora`, utiliza el tipo definido para el parámetro de función

```typescript
type Operacion = (a: number, b: number) => number;

const suma: Operacion = (a, b) => a + b;
const resta: Operacion = (a, b) => a - b;
const multiplicacion: Operacion = (a, b) => a * b;
const division: Operacion = (a, b) => a / b;

function calculadora(a: number, b: number, operacion: Operacion): number {
  return operacion(a, b);
}
```

## Ejercicio 3: Función genérica básica

- Define una función con un parámetro de tipo `<T>`
- Usa este tipo para el array de entrada y el valor de retorno
- Implementa la lógica para devolver el primer elemento o undefined
- Puedes usar destructuring para simplificar la implementación

```typescript
function obtenerPrimero<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;

  // Alternativa con destructuring:
  // const [primero] = array;
  // return primero;
}
```

## Ejercicio 4: Restricciones de tipo genérico

- Define una interfaz con la propiedad requerida
- Usa la restricción `extends` para limitar los tipos aceptados por la función genérica
- Accede a la propiedad requerida en la implementación

```typescript
interface ConNombre {
  nombre: string;
}

function saludar<T extends ConNombre>(objeto: T): string {
  return `¡Hola, ${objeto.nombre}!`;
}
```

## Ejercicio 5: Clases genéricas

- Define una clase con un parámetro de tipo `<T>`
- Usa este tipo para el array interno y en los métodos
- Implementa cada método según los requisitos
- Usa un getter para la propiedad de solo lectura
- Para el método `buscar`, usa la función filter con un predicado tipado

```typescript
class Coleccion<T> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  obtener(indice: number): T | undefined {
    return this.items[indice];
  }

  buscar(predicado: (item: T) => boolean): T[] {
    return this.items.filter(predicado);
  }

  get cantidad(): number {
    return this.items.length;
  }
}
```

## Desafío 1: Sistema de validación de formularios

- Define interfaces para los resultados de validación y los validadores
- Implementa la función genérica de validación que acepte diferentes tipos
- Crea validadores específicos usando funciones y tipos genéricos
- Implementa la función de orden superior para crear validadores personalizados

## Desafío 2: Composición de funciones

- Usa parámetros rest (`...args`) para capturar un número variable de funciones
- Define tipos de función genéricos que manejen transformaciones de tipos
- Implementa pipe para evaluación de izquierda a derecha
- Implementa compose para evaluación de derecha a izquierda
- Usa funciones de orden superior para implementar map, filter, etc.

## Desafío 3: Sistema de eventos tipado

- Define un mapa de eventos que asocie nombres de eventos con sus tipos de datos
- Implementa una clase genérica que use este mapa para tipar adecuadamente los callbacks
- Usa tipos indexados y genéricos para garantizar que los eventos reciban los datos correctos
- Implementa métodos adicionales manteniendo el tipado correcto

## Desafío 4: Caché genérico con políticas personalizables

- Define interfaces para opciones de configuración y elementos del caché
- Implementa una clase genérica que acepte dos parámetros de tipo: K para claves y V para valores
- Usa Map para almacenar datos con tipos correctos
- Implementa cada estrategia de eliminación como una clase separada
- Usa genéricos para crear una función de memoización tipada
