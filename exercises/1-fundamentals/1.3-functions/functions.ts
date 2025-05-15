/**
 * FUNCIONES EN TYPESCRIPT
 *
 * TypeScript enriquece las funciones de JavaScript con anotaciones de tipo
 * para los parámetros y el valor de retorno, haciendo el código más robusto.
 */

import { logSection } from "../../../utils";

console.log('Ejecutando demo de funciones en TypeScript...\n');
console.log('Las funciones en TypeScript permiten definir tipos para los parámetros');
console.log('y valores de retorno, mejorando la seguridad de tipos y la documentación.');

// ============================================================================
// 1. Anotaciones de tipo básicas en funciones
// ============================================================================

logSection('1. Anotaciones de tipo básicas', 'Especificando tipos de parámetros y retorno');

// Función con tipos básicos
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(`sumar(5, 3) = ${sumar(5, 3)}`);

// Función que no devuelve valor (void)
function saludar(nombre: string): void {
  console.log(`¡Hola, ${nombre}!`);
}

saludar('Ana');

// Función con parámetros de múltiples tipos
function formatearValor(valor: string | number): string {
  if (typeof valor === 'number') {
    return valor.toFixed(2);
  }
  return valor.toUpperCase();
}

console.log(`formatearValor(42.1234) = ${formatearValor(42.1234)}`);
console.log(`formatearValor("typescript") = ${formatearValor("typescript")}`);

// ============================================================================
// 2. Parámetros opcionales y valores por defecto
// ============================================================================

logSection('2. Parámetros opcionales y valores por defecto', 'Flexibilidad en la definición de funciones');

// Parámetros opcionales (con ?)
function crearMensaje(texto: string, firma?: string): string {
  if (firma) {
    return `${texto}\n- ${firma}`;
  }
  return texto;
}

console.log(crearMensaje('Hola mundo'));
console.log(crearMensaje('Saludos cordiales', 'El equipo de TypeScript'));

// Parámetros con valores por defecto
function configurarAplicacion(
  nombre: string,
  version: string = '1.0.0',
  debug: boolean = false
): void {
  console.log(`Iniciando ${nombre} v${version}, modo debug: ${debug ? 'activado' : 'desactivado'}`);
}

configurarAplicacion('MiApp');
configurarAplicacion('OtraApp', '2.1.3');
configurarAplicacion('DebugApp', '1.2.0', true);

// ============================================================================
// 3. Rest parameters (número variable de argumentos)
// ============================================================================

logSection('3. Rest parameters', 'Funciones con número variable de argumentos');

// Función con rest parameter (recibe un número variable de argumentos)
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(`sumarTodos(1, 2) = ${sumarTodos(1, 2)}`);
console.log(`sumarTodos(1, 2, 3, 4, 5) = ${sumarTodos(1, 2, 3, 4, 5)}`);

// Combinando parámetros regulares con rest parameters
function registrarActividad(
  usuario: string,
  accion: string,
  ...detalles: string[]
): void {
  console.log(`[${usuario}] realizó ${accion}`);

  if (detalles.length > 0) {
    console.log(`Detalles adicionales: ${detalles.join(', ')}`);
  }
}

registrarActividad('usuario123', 'login');
registrarActividad('admin', 'borrar-archivo', 'documento.txt', 'ubicación: /usuarios');

// ============================================================================
// 4. Funciones como tipos
// ============================================================================

logSection('4. Funciones como tipos', 'Definir tipos para funciones y usarlas como parámetros');

// Definir un tipo de función
type OperacionMatematica = (a: number, b: number) => number;

// Funciones que cumplen con este tipo
const suma: OperacionMatematica = (a, b) => a + b;
const resta: OperacionMatematica = (a, b) => a - b;
const multiplicacion: OperacionMatematica = (a, b) => a * b;
const division: OperacionMatematica = (a, b) => a / b;

// Función que recibe una función como parámetro
function calcular(a: number, b: number, operacion: OperacionMatematica): number {
  return operacion(a, b);
}

console.log(`calcular(10, 5, suma) = ${calcular(10, 5, suma)}`);
console.log(`calcular(10, 5, resta) = ${calcular(10, 5, resta)}`);
console.log(`calcular(10, 5, multiplicacion) = ${calcular(10, 5, multiplicacion)}`);
console.log(`calcular(10, 5, division) = ${calcular(10, 5, division)}`);

// ============================================================================
// 5. Sobrecarga de funciones
// ============================================================================

logSection('5. Sobrecarga de funciones', 'Múltiples firmas para una función');

// Sobrecarga de funciones
function convertir(valor: string): number;
function convertir(valor: number): string;
function convertir(valor: boolean): string;
function convertir(valor: string | number | boolean): string | number {
  if (typeof valor === 'string') {
    return parseFloat(valor) || 0;
  }
  else if (typeof valor === 'number') {
    return valor.toString();
  }
  return valor ? 'verdadero' : 'falso';
}

console.log(`convertir("42") = ${convertir("42")} (${typeof convertir("42")})`);
console.log(`convertir(100) = ${convertir(100)} (${typeof convertir(100)})`);
console.log(`convertir(true) = ${convertir(true)}`);

// ============================================================================
// 6. Funciones flecha (arrow functions)
// ============================================================================

logSection('6. Funciones flecha', 'Sintaxis concisa de ES6 con tipado TypeScript');

// Función normal
function multiplicarNormal(a: number, b: number): number {
  return a * b;
}

// Función flecha equivalente
const multiplicarFlecha = (a: number, b: number): number => a * b;

console.log(`multiplicarNormal(6, 7) = ${multiplicarNormal(6, 7)}`);
console.log(`multiplicarFlecha(6, 7) = ${multiplicarFlecha(6, 7)}`);

// Función flecha con múltiples líneas
const generarSaludo = (nombre: string, titulo: string = ''): string => {
  const tituloStr = titulo ? `${titulo} ` : '';
  return `Estimado/a ${tituloStr}${nombre}, un placer saludarle.`;
};

console.log(generarSaludo('Carlos'));
console.log(generarSaludo('Dra. Martínez', 'Dra.'));

// ============================================================================
// 7. Funciones asíncronas
// ============================================================================

logSection('7. Funciones asíncronas', 'Funciones que devuelven Promises con tipado');

// Función asíncrona que devuelve una promesa tipada
async function obtenerDatos(id: number): Promise<{id: number, nombre: string}> {
  // Simulación de una petición a una API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        nombre: `Usuario ${id}`
      });
    }, 1000);
  });
}

// Uso de la función asíncrona
console.log('Solicitando datos...');
obtenerDatos(123).then(usuario => {
  console.log(`Datos recibidos: ${JSON.stringify(usuario)}`);
});

// Función para demostrar manejo de errores tipado
async function validarUsuario(id: number): Promise<boolean> {
  if (id <= 0) {
    throw new Error('ID inválido');
  }

  const usuario = await obtenerDatos(id);
  return usuario.nombre.length > 0;
}

// Este ejemplo mostraría un error que será capturado
validarUsuario(-1)
  .then(valido => console.log(`Usuario válido: ${valido}`))
  .catch(error => console.log(`Error: ${error.message}`));

// ============================================================================
console.log('\n\n✅ Archivo de funciones en TypeScript ejecutado correctamente.');
console.log('='.repeat(80) + '\n');
