/**
 * EJERCICIOS PRÁCTICOS DE TYPESCRIPT - FUNCIONES Y GENÉRICOS
 *
 * Completa los ejercicios siguiendo las instrucciones en los comentarios.
 */

// ======================================================================
// EJERCICIO 1: Anotaciones de tipo en funciones
// Define correctamente los tipos de las funciones
// ======================================================================

// TODO: Define una función 'calcularPrecioTotal' que:
// - Reciba un precio base (number), un porcentaje de impuesto (number) y un booleano indicando si hay descuento
// - Si hay descuento, reste un 10% al precio antes de aplicar impuestos
// - Aplique el porcentaje de impuesto al precio (después del posible descuento)
// - Retorne el precio total como number con 2 decimales

/*
// Ejemplo de uso:
console.log(calcularPrecioTotal(100, 21, false)); // 121.00
console.log(calcularPrecioTotal(100, 21, true));  // 108.90
*/


// TODO: Define una función 'formatearNombre' que:
// - Reciba nombre (string), apellido (string) y un parámetro opcional 'capitalizar' (boolean)
// - Si capitalizar es true, devuelva el nombre y apellido con la primera letra en mayúscula
// - Si capitalizar es false o no se proporciona, devuelva todo en minúsculas
// - El valor por defecto de capitalizar debe ser false

/*
// Ejemplo de uso:
console.log(formatearNombre('juan', 'PÉREZ'));          // "juan pérez"
console.log(formatearNombre('ana', 'garcía', true));    // "Ana García"
*/


// ======================================================================
// EJERCICIO 2: Funciones como parámetros y retorno
// Implementa funciones que reciben o retornan otras funciones
// ======================================================================

// TODO: Define un tipo 'Operacion' para funciones que reciben dos números y retornan un número

// TODO: Define cuatro funciones (suma, resta, multiplicacion, division) que implementen este tipo

// TODO: Implementa una función 'calculadora' que:
// - Reciba dos números y una función de tipo 'Operacion'
// - Aplique la operación a los números
// - Retorne el resultado

/*
// Ejemplo de uso:
console.log(calculadora(10, 5, suma));            // 15
console.log(calculadora(10, 5, resta));           // 5
console.log(calculadora(10, 5, multiplicacion));  // 50
console.log(calculadora(10, 5, division));        // 2
*/


// ======================================================================
// EJERCICIO 3: Función genérica básica
// Implementa una función que trabaje con múltiples tipos
// ======================================================================

// TODO: Crea una función genérica 'obtenerPrimero' que:
// - Reciba un array de cualquier tipo
// - Retorne el primer elemento del array, o undefined si el array está vacío
// - Debe funcionar con arrays de cualquier tipo: números, strings, objetos, etc.

/*
// Ejemplo de uso:
console.log(obtenerPrimero([1, 2, 3]));               // 1
console.log(obtenerPrimero(["a", "b", "c"]));         // "a"
console.log(obtenerPrimero<boolean>([]));             // undefined
*/


// ======================================================================
// EJERCICIO 4: Restricciones de tipo genérico
// Implementa una función genérica con restricciones
// ======================================================================

// TODO: Define una interfaz 'ConNombre' que tenga una propiedad 'nombre' de tipo string

// TODO: Crea una función genérica 'saludar' que:
// - Reciba un objeto de tipo T que extienda de 'ConNombre'
// - Retorne un string con el formato "¡Hola, {nombre}!"

/*
// Ejemplo de uso:
const persona = { nombre: "Laura", edad: 28 };
const producto = { nombre: "Laptop", precio: 1200 };
console.log(saludar(persona));   // "¡Hola, Laura!"
console.log(saludar(producto));  // "¡Hola, Laptop!"

// Esto no debería compilar:
// saludar({ precio: 100 });    // Error: falta la propiedad 'nombre'
*/


// ======================================================================
// EJERCICIO 5: Clases genéricas
// Implementa una clase genérica para gestionar una colección
// ======================================================================

// TODO: Crea una clase genérica 'Coleccion<T>' que:
// - Tenga una propiedad privada 'items' que sea un array de tipo T
// - Tenga un método 'agregar' que reciba un item y lo agregue a la colección
// - Tenga un método 'obtener' que reciba un índice y retorne el item en esa posición
// - Tenga un método 'buscar' que reciba una función de predicado y retorne todos los items que cumplan la condición
// - Tenga una propiedad de solo lectura 'cantidad' que devuelva el número de items

/*
// Ejemplo de uso:
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const productos = new Coleccion<Producto>();
productos.agregar({ id: 1, nombre: "Teléfono", precio: 500 });
productos.agregar({ id: 2, nombre: "Tablet", precio: 800 });
productos.agregar({ id: 3, nombre: "Laptop", precio: 1200 });

console.log(productos.cantidad);  // 3
console.log(productos.obtener(1)); // { id: 2, nombre: "Tablet", precio: 800 }

const caros = productos.buscar(p => p.precio > 700);
console.log(caros);  // [{ id: 2, nombre: "Tablet", precio: 800 }, { id: 3, nombre: "Laptop", precio: 1200 }]
*/


// Exporta las funciones y clases que has creado para usarlas en los tests
export {
  // calcularPrecioTotal,
  // formatearNombre,
  // Operacion,
  // suma, resta, multiplicacion, division,
  // calculadora,
  // obtenerPrimero,
  // ConNombre,
  // saludar,
  // Coleccion
};

