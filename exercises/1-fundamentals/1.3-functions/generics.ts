/**
 * GENÉRICOS EN TYPESCRIPT
 *
 * Los genéricos permiten crear componentes reutilizables que pueden
 * trabajar con diferentes tipos de datos, manteniendo la seguridad de tipos.
 */

import { logSection } from "../../../utils";

console.log('Ejecutando demo de genéricos en TypeScript...\n');
console.log('Los genéricos permiten crear componentes flexibles que trabajan');
console.log('con múltiples tipos, manteniendo la seguridad de tipo completa.');

// ============================================================================
// 1. Función genérica básica
// ============================================================================

logSection('1. Función genérica básica', 'Creando funciones que trabajan con cualquier tipo');

// Función sin genéricos (solo funciona con arrays de strings)
function primerElementoString(array: string[]): string | undefined {
  return array.length > 0 ? array[0] : undefined;
}

// Función genérica (funciona con cualquier tipo de array)
function primerElemento<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

// Ejemplo de uso con diferentes tipos
const numeros = [1, 2, 3, 4, 5];
const nombres = ["Ana", "Carlos", "Berta"];
const booleanos = [true, false, true];

console.log(`primerElemento(numeros) = ${primerElemento(numeros)}`);
console.log(`primerElemento(nombres) = ${primerElemento(nombres)}`);
console.log(`primerElemento(booleanos) = ${primerElemento(booleanos)}`);

// Array vacío
const vacio: number[] = [];
console.log(`primerElemento(vacio) = ${primerElemento(vacio)}`);

// ============================================================================
// 2. Múltiples parámetros de tipo
// ============================================================================

logSection('2. Múltiples parámetros de tipo', 'Usando varios tipos genéricos en una función');

// Función con múltiples parámetros de tipo
function combinar<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const combinacion1 = combinar<string, number>("edad", 30);
const combinacion2 = combinar<boolean, string[]>(true, ["rojo", "verde", "azul"]);

console.log(`combinar("edad", 30) = ${JSON.stringify(combinacion1)}`);
console.log(`combinar(true, ["rojo", "verde", "azul"]) = ${JSON.stringify(combinacion2)}`);

// La inferencia de tipos funciona automáticamente
const combinacion3 = combinar(42, "respuesta"); // Tipo inferido: [number, string]
console.log(`combinar(42, "respuesta") = ${JSON.stringify(combinacion3)}`);

// ============================================================================
// 3. Restricciones genéricas (extends)
// ============================================================================

logSection('3. Restricciones genéricas', 'Limitando los tipos que pueden usarse');

// Función genérica con restricción
function obtenerLongitud<T extends { length: number }>(item: T): number {
  return item.length;
}

const longitudString = obtenerLongitud("TypeScript");
const longitudArray = obtenerLongitud([1, 2, 3, 4]);
const longitudObjeto = obtenerLongitud({ length: 10, nombre: "objeto" });

console.log(`obtenerLongitud("TypeScript") = ${longitudString}`);
console.log(`obtenerLongitud([1, 2, 3, 4]) = ${longitudArray}`);
console.log(`obtenerLongitud({ length: 10, nombre: "objeto" }) = ${longitudObjeto}`);

// Esto daría error porque number no tiene propiedad length
// const longitudNumero = obtenerLongitud(123);

// ============================================================================
// 4. Interfaces genéricas
// ============================================================================

logSection('4. Interfaces genéricas', 'Creando contratos reutilizables con diferentes tipos');

// Interfaz genérica
interface Contenedor<T> {
  valor: T;
  fecha: Date;
  mostrar(): string;
}

// Implementación para número
class ContenedorNumerico implements Contenedor<number> {
  constructor(public valor: number) {}

  get fecha(): Date {
    return new Date();
  }

  mostrar(): string {
    return `Valor numérico: ${this.valor.toFixed(2)}`;
  }
}

// Implementación para string
class ContenedorTexto implements Contenedor<string> {
  constructor(public valor: string, public fecha: Date = new Date()) {}

  mostrar(): string {
    return `Texto: "${this.valor}" (registrado: ${this.fecha.toLocaleDateString()})`;
  }
}

const contenedorNumero = new ContenedorNumerico(123.456);
const contenedorTexto = new ContenedorTexto("Hola Mundo");

console.log(contenedorNumero.mostrar());
console.log(contenedorTexto.mostrar());

// ============================================================================
// 5. Clases genéricas
// ============================================================================

logSection('5. Clases genéricas', 'Implementando clases que trabajan con diferentes tipos');

// Clase genérica de lista
class ListaGenerica<T> {
  private elementos: T[] = [];

  agregar(elemento: T): void {
    this.elementos.push(elemento);
  }

  obtenerElemento(indice: number): T | undefined {
    if (indice >= 0 && indice < this.elementos.length) {
      return this.elementos[indice];
    }
    return undefined;
  }

  get longitud(): number {
    return this.elementos.length;
  }

  filtrar(condicion: (elemento: T) => boolean): T[] {
    return this.elementos.filter(condicion);
  }
}

// Lista de números
const listaNumeros = new ListaGenerica<number>();
listaNumeros.agregar(10);
listaNumeros.agregar(20);
listaNumeros.agregar(30);
listaNumeros.agregar(40);

console.log(`Elementos en la lista de números: ${listaNumeros.longitud}`);
console.log(`Elemento en índice 2: ${listaNumeros.obtenerElemento(2)}`);
console.log(`Números mayores que 25: ${listaNumeros.filtrar(n => n > 25)}`);

// Lista de objetos
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const listaProductos = new ListaGenerica<Producto>();
listaProductos.agregar({ id: 1, nombre: "Laptop", precio: 999.99 });
listaProductos.agregar({ id: 2, nombre: "Teléfono", precio: 499.99 });
listaProductos.agregar({ id: 3, nombre: "Tablet", precio: 299.99 });

console.log(`\nProductos en la lista: ${listaProductos.longitud}`);
const productosBaratos = listaProductos.filtrar(p => p.precio < 500);
console.log("Productos con precio menor a 500:");
productosBaratos.forEach(p => console.log(`- ${p.nombre}: $${p.precio}`));

// ============================================================================
// 6. Tipos utilitarios genéricos
// ============================================================================

logSection('6. Tipos utilitarios genéricos', 'Tipos predefinidos para transformar otros tipos');

// Tipo original
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

// Uso de Readonly<T>
type UsuarioInmutable = Readonly<Usuario>;

const usuario1: UsuarioInmutable = {
  id: 1,
  nombre: "Ana",
  email: "ana@ejemplo.com",
  activo: true
};

// Esto daría error porque las propiedades son de solo lectura
// usuario1.nombre = "Ana García";

// Uso de Partial<T>
type UsuarioParcial = Partial<Usuario>;

function actualizarUsuario(id: number, datosActualizados: UsuarioParcial): Usuario {
  // Simulación: buscar el usuario original
  const usuarioOriginal: Usuario = {
    id: id,
    nombre: "Usuario Original",
    email: "original@ejemplo.com",
    activo: true
  };

  // Combinar el original con las actualizaciones
  return { ...usuarioOriginal, ...datosActualizados };
}

const usuarioActualizado = actualizarUsuario(1, {
  nombre: "Nombre Actualizado",
  activo: false
});

console.log("Usuario actualizado:");
console.log(usuarioActualizado);

// Uso de Pick<T, K> y Omit<T, K>
type CredencialesUsuario = Pick<Usuario, 'email' | 'id'>;
type DatosPublicos = Omit<Usuario, 'email' | 'id'>;

const credenciales: CredencialesUsuario = {
  id: 2,
  email: "usuario@ejemplo.com"
};

const datosPublicos: DatosPublicos = {
  nombre: "Usuario Público",
  activo: true
};

console.log("\nCredenciales:", credenciales);
console.log("Datos públicos:", datosPublicos);

// ============================================================================
// 7. Genéricos predeterminados
// ============================================================================

logSection('7. Genéricos predeterminados', 'Especificando valores por defecto para parámetros de tipo');

// Interfaz con tipo genérico predeterminado
interface Respuesta<T = string> {
  datos: T;
  estado: number;
  mensaje: string;
}

// Usando el tipo predeterminado (string)
const respuestaTexto: Respuesta = {
  datos: "Operación completada",
  estado: 200,
  mensaje: "OK"
};

// Especificando un tipo diferente
const respuestaNumero: Respuesta<number> = {
  datos: 42,
  estado: 200,
  mensaje: "OK"
};

// Usando un tipo complejo
const respuestaObjeto: Respuesta<{id: number, roles: string[]}> = {
  datos: {
    id: 101,
    roles: ["admin", "user"]
  },
  estado: 200,
  mensaje: "OK"
};

console.log("Respuesta con datos de texto:", respuestaTexto);
console.log("Respuesta con datos numéricos:", respuestaNumero);
console.log("Respuesta con datos de objeto:", respuestaObjeto);

// ============================================================================
console.log('\n\n✅ Archivo de genéricos en TypeScript ejecutado correctamente.');
console.log('='.repeat(80) + '\n');

