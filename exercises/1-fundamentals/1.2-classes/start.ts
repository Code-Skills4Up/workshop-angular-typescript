/**
 * EJERCICIOS PRÁCTICOS DE TYPESCRIPT - CLASES Y OBJETOS
 *
 * Completa los ejercicios siguiendo las instrucciones en los comentarios.
 */

// ======================================================================
// EJERCICIO 1: Clase básica
// Define una clase Libro con propiedades y métodos para una biblioteca
// ======================================================================

// TODO: Define una clase 'Libro' con:
// - Propiedades: titulo (string), autor (string), añoPublicacion (number), disponible (boolean)
// - Constructor que reciba valores iniciales para cada propiedad (excepto disponible, que debería ser true por defecto)
// - Método 'prestar()' que cambie disponible a false y devuelva un mensaje
// - Método 'devolver()' que cambie disponible a true y devuelva un mensaje
// - Método 'mostrarInfo()' que devuelva un string con toda la información del libro


/*
const libro1 = new Libro('1984', 'George Orwell', 1949);
console.log(libro1.mostrarInfo());
console.log(libro1.prestar());
console.log(libro1.disponible); // false
console.log(libro1.devolver());
console.log(libro1.disponible); // true
*/

// ======================================================================
// EJERCICIO 2: Constructor acortado
// Redefine la clase Estudiante usando la sintaxis de constructor acortado
// ======================================================================

// Esta clase está escrita de forma estándar
class Estudiante {
  nombre: string;
  edad: number;
  cursos: string[];

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.cursos = [];
  }

  inscribirCurso(curso: string): void {
    this.cursos.push(curso);
    console.log(`${this.nombre} se ha inscrito en ${curso}`);
  }

  mostrarCursos(): string {
    return `${this.nombre} está inscrito en: ${this.cursos.join(', ')}`;
  }
}

// TODO: Redefine la clase Estudiante usando el constructor acortado con modificadores de acceso
// Añade también una propiedad "activo" que sea booleana y por defecto sea true
// El resto de la funcionalidad debe mantenerse igual


// ======================================================================
// EJERCICIO 3: Herencia
// Crea una jerarquía de clases para una tienda en línea
// ======================================================================

// TODO: Define una clase base 'Producto' con:
// - Propiedades: id (readonly string), nombre (string), precio (number)
// - Constructor que inicialice estas propiedades
// - Método 'calcularImpuesto()' que devuelva el 21% del precio
// - Método 'mostrarDetalle()' que devuelva un string con la información

// TODO: Define una clase 'ProductoDigital' que extienda a 'Producto' con:
// - Propiedad adicional: formato (string) - "pdf", "mp3", etc.
// - Constructor que inicialice todas las propiedades, incluidas las heredadas
// - Sobrescribe el método 'calcularImpuesto()' para que devuelva el 10% del precio
// - Sobrescribe el método 'mostrarDetalle()' para incluir el formato

// TODO: Define una clase 'ProductoFisico' que extienda a 'Producto' con:
// - Propiedades adicionales: peso (number) y dimensiones (string)
// - Constructor que inicialice todas las propiedades
// - Método adicional 'calcularCostoEnvio()' que devuelva 5 + (peso * 0.1)
// - Sobrescribe el método 'mostrarDetalle()' para incluir las nuevas propiedades


// ======================================================================
// EJERCICIO 4: Modificadores de acceso
// Implementa una clase para gestionar una cuenta bancaria
// ======================================================================

// TODO: Define una clase 'CuentaBancaria' con:
// - Propiedades PRIVADAS: _saldo (number), _movimientos (array de strings)
// - Propiedad PÚBLICA Y READONLY: numeroCuenta (string)
// - Propiedad PÚBLICA: titular (string)
// - Constructor que inicialice el titular, numeroCuenta y opcionalmente el saldo inicial (0 por defecto)
// - Método PÚBLICO 'depositar(cantidad: number)' que añada la cantidad al saldo y registre el movimiento
// - Método PÚBLICO 'retirar(cantidad: number)' que reste la cantidad si hay suficiente saldo y registre el movimiento
// - Método PÚBLICO 'verSaldo()' que devuelva el saldo actual
// - Método PÚBLICO 'verMovimientos()' que devuelva una copia del array de movimientos
// - Método PRIVADO 'registrarMovimiento(tipo: string, cantidad: number)' que añada un nuevo movimiento al array

// ======================================================================
// EJERCICIO 5: Getters y Setters
// Implementa una clase para manejar un carrito de compras
// ======================================================================

// TODO: Define una clase 'CarritoCompras' con:
// - Propiedad PRIVADA: _items (array de objetos con propiedades id, nombre, precio y cantidad)
// - Propiedad PRIVADA: _totalItems (number)
// - Constructor que inicialice el array de items vacío y totalItems a 0
// - GETTER para 'totalItems' que devuelva _totalItems
// - GETTER para 'items' que devuelva una copia del array _items
// - GETTER para 'total' que calcule y devuelva el precio total del carrito (suma de precio * cantidad)
// - MÉTODO para 'agregarItem(id, nombre, precio, cantidad)' que añada un item al carrito
// - MÉTODO para 'eliminarItem(id)' que elimine un item del carrito
// - MÉTODO para 'vaciarCarrito()' que elimine todos los items
// - MÉTODO para 'actualizarCantidad(id, cantidad)' que actualice la cantidad de un item

// Exporta las clases que has creado para que puedan ser utilizadas en los tests
export {
  // Libro,
  Estudiante,
  // ... otras clases que hayas creado
};

