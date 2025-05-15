/**
 * DESAFÍOS AVANZADOS DE PROGRAMACIÓN ORIENTADA A OBJETOS EN TYPESCRIPT
 *
 * Estos desafíos te permitirán practicar conceptos más avanzados de POO.
 */

// ======================================================================
// DESAFÍO 1: Sistema de gestión de empleados
// Implementa un sistema de clases para administrar diferentes tipos de empleados
// ======================================================================

// ❌ Código incompleto
/*
class Empleado {
  constructor(id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.salarioBase = 0;
  }

  nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
}
*/

// ✅ Tu implementación aquí:
// TODO: Implementa una clase abstracta 'Empleado' con:
// - Propiedades: id (readonly), nombre, apellido
// - Propiedades protegidas: salarioBase
// - Método abstracto: calcularSalario(): number
// - Método: nombreCompleto(): string

// TODO: Implementa una clase 'EmpleadoTiempoCompleto' que extienda 'Empleado':
// - Propiedades adicionales: beneficios (porcentaje adicional)
// - Implementar calcularSalario(): número que devuelva salarioBase + (salarioBase * beneficios / 100)

// TODO: Implementa una clase 'EmpleadoPorHoras' que extienda 'Empleado':
// - Propiedades adicionales: horasTrabajadas, tarifaPorHora
// - Implementar calcularSalario(): número que devuelva horasTrabajadas * tarifaPorHora

// TODO: Implementa una clase 'Gerente' que extienda 'EmpleadoTiempoCompleto':
// - Propiedades adicionales: bono
// - Sobrescribir calcularSalario(): que incluya el salario base con beneficios y el bono adicional


// ======================================================================
// DESAFÍO 2: Sistema de formas geométricas con interfaces
// Usa interfaces y clases para crear un sistema de formas geométricas
// ======================================================================

// ❌ Estructura actual sin tipado adecuado
/*
interface Forma {
  calcularArea();
  calcularPerimetro();
}

class Circulo implements Forma {
  constructor(radio) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.radio;
  }
}
*/

// ✅ Tu implementación aquí:
// TODO: Define una interfaz 'Forma' con:
// - Métodos: calcularArea(): number, calcularPerimetro(): number, toString(): string

// TODO: Define una clase abstracta 'FormaBase' que implemente 'Forma':
// - Propiedad: nombre (string)
// - Implementa toString(): string para mostrar el nombre y tamaño
// - Mantiene abstractos los otros métodos

// TODO: Implementa clases para 'Circulo', 'Rectangulo' y 'Triangulo' que extiendan 'FormaBase':
// - Circulo: radio (number)
// - Rectángulo: ancho (number), alto (number)
// - Triángulo: ladoA, ladoB, ladoC (number)
// - Cada clase debe implementar los métodos de cálculo correctamente

// TODO: Implementa una clase 'GrupoFormas' que:
// - Almacene varias formas en un array
// - Método para añadir una forma
// - Método para calcular el área total
// - Método para encontrar la forma con mayor perímetro
// - Método para listar todas las formas por nombre y área


// ======================================================================
// DESAFÍO 3: Sistema de biblioteca con genéricos
// Implementa un sistema de biblioteca usando clases y genéricos
// ======================================================================

// ❌ Código sin genéricos ni tipado adecuado
/*
class Coleccion {
  constructor() {
    this.items = [];
  }

  agregar(item) {
    this.items.push(item);
  }

  buscar(criterio) {
    return this.items.filter(item =>
      item.titulo.includes(criterio) ||
      item.descripcion.includes(criterio)
    );
  }
}
*/

// ✅ Tu implementación aquí:
// TODO: Define una interfaz 'Prestable' con:
// - Métodos: prestar(): boolean, devolver(): boolean, estaPrestado(): boolean

// TODO: Implementa una clase genérica 'Coleccion<T>' para gestionar cualquier tipo de elemento:
// - Propiedad: items (array de T)
// - Métodos para añadir, eliminar, buscar y filtrar elementos

// TODO: Define una clase 'Elemento' base con:
// - Propiedades: id, titulo, descripcion, fechaCreacion
// - Método: mostrarInfo(): string

// TODO: Implementa clases 'Libro', 'Revista' y 'DVD' que extiendan 'Elemento' e implementen 'Prestable':
// - Libro: autor, isbn, páginas
// - Revista: editorial, número, periodicidad
// - DVD: director, duración, clasificación

// TODO: Implementa una clase 'Biblioteca' que:
// - Utilice instancias de 'Coleccion<T>' para manejar distintos tipos de elementos
// - Métodos para:
//   - Añadir elementos a cada colección
//   - Buscar elementos por título
//   - Prestar/devolver elementos
//   - Mostrar elementos prestados
//   - Generar un informe general


// ======================================================================
// DESAFÍO 4: Implementación de patrones de diseño
// Implementa los patrones Singleton y Factory Method en un sistema de logs
// ======================================================================

// ❌ Código básico sin patrones de diseño
/*
class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    console.log(message);
    this.logs.push(message);
  }
}

const logger = new Logger();
*/

// ✅ Tu implementación aquí:
// TODO: Implementa el patrón Singleton en una clase 'Logger':
// - Debe tener una instancia única accesible globalmente
// - Métodos para log, warn, error e info
// - Debe registrar los mensajes con nivel, timestamp y etiqueta

// TODO: Implementa el patrón Factory Method para crear diferentes "targets" de logs:
// - Define una interfaz 'LogTarget' con método log(message, level)
// - Implementa clases 'ConsoleLogger', 'FileLogger', 'DatabaseLogger'
// - Crea una clase 'LoggerFactory' que devuelva el target apropiado según configuración

// TODO: Extiende el sistema con:
// - Capacidad de definir niveles mínimos de log
// - Capacidad de enviar a múltiples targets a la vez (Composite)
// - Formateadores de mensaje intercambiables (Strategy)


// Exporta tus clases para usar en tests
export {
  // Empleado, EmpleadoTiempoCompleto, EmpleadoPorHoras, Gerente,
  // Forma, FormaBase, Circulo, Rectangulo, Triangulo, GrupoFormas,
  // Prestable, Coleccion, Elemento, Libro, Revista, DVD, Biblioteca,
  // Logger, LogTarget, ConsoleLogger, FileLogger, LoggerFactory
};
