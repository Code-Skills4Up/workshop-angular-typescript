/**
 * DESAFÍOS AVANZADOS DE FUNCIONES Y GENÉRICOS EN TYPESCRIPT
 *
 * Estos desafíos te permitirán practicar conceptos más avanzados
 * de funciones y genéricos en TypeScript.
 */

// ======================================================================
// DESAFÍO 1: Sistema de validación de formularios
// Implementa un sistema genérico para validar campos de formulario
// ======================================================================

// ❌ Código básico sin genéricos ni tipado adecuado
/*
function validar(valor, reglas) {
  const errores = [];

  for (const regla of reglas) {
    const resultado = regla(valor);
    if (!resultado.valido) {
      errores.push(resultado.mensaje);
    }
  }

  return {
    valido: errores.length === 0,
    errores: errores
  };
}

function requerido(valor) {
  return {
    valido: valor !== undefined && valor !== null && valor !== '',
    mensaje: 'Este campo es obligatorio'
  };
}

function longitudMinima(min) {
  return function(valor) {
    return {
      valido: valor.length >= min,
      mensaje: `Debe tener al menos ${min} caracteres`
    };
  };
}
*/

// ✅ Tu implementación aquí:
// TODO: Define un tipo 'ResultadoValidacion' con propiedades 'valido' (boolean) y 'mensaje' (string)

// TODO: Define un tipo 'Validador<T>' para funciones que reciban un valor de tipo T y retornen ResultadoValidacion

// TODO: Implementa una función genérica 'validar<T>' que:
// - Reciba un valor de tipo T y un array de validadores Validador<T>
// - Ejecute cada validador con el valor
// - Retorne un objeto con 'valido' (boolean) y 'errores' (array de strings)

// TODO: Implementa validadores genéricos:
// - 'requerido<T>' que verifique que el valor no sea undefined, null o string vacío
// - 'longitudMinima' que verifique que strings o arrays tengan una longitud mínima
// - 'longitudMaxima' que verifique que strings o arrays no excedan una longitud máxima
// - 'patron' que verifique que un string cumpla con un patrón regex
// - 'rango' que verifique que un número esté dentro de un rango específico

// TODO: Implementa una función de orden superior 'crearValidador<T>' que:
// - Tome una función de validación y un mensaje personalizado
// - Retorne un validador que utilice esa función y mensaje

// TODO: Define tipos específicos para validar diferentes tipos de campos:
// - ValidadorTexto para strings
// - ValidadorNumero para numbers
// - ValidadorFecha para objetos Date


// ======================================================================
// DESAFÍO 2: Composición de funciones
// Implementa utilidades para composición funcional
// ======================================================================

// ❌ Código sin tipos adecuados ni implementación completa
/*
function pipe(fn1, fn2) {
  return function(x) {
    return fn2(fn1(x));
  };
}

function compose(fn1, fn2) {
  return function(x) {
    return fn1(fn2(x));
  };
}
*/

// ✅ Tu implementación aquí:
// TODO: Implementa una función genérica 'pipe' que:
// - Tome un número variable de funciones tipadas
// - Retorne una nueva función que las ejecute en secuencia (de izquierda a derecha)
// - Maneje correctamente los tipos para cada paso

// TODO: Implementa una función genérica 'compose' que:
// - Tome un número variable de funciones tipadas
// - Retorne una nueva función que las ejecute en secuencia (de derecha a izquierda)
// - Maneje correctamente los tipos para cada paso

// TODO: Implementa funciones genéricas utilitarias:
// - 'map<T, U>' que transforme un valor de tipo T a tipo U
// - 'filter<T>' que filtre un array basado en un predicado
// - 'reduce<T, U>' que reduzca un array a un valor único
// - 'flatMap<T, U>' que aplique map y luego aplane el resultado


// ======================================================================
// DESAFÍO 3: Sistema de eventos tipado
// Implementa un sistema de eventos con tipado fuerte
// ======================================================================

// ❌ Código sin tipado adecuado
/*
class EventEmitter {
  listeners = {};

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event, ...args) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach(callback => {
      callback(...args);
    });
  }
}
*/

// ✅ Tu implementación aquí:
// TODO: Define una interfaz genérica 'EventMap' que mapee nombres de eventos a tipos de datos

// TODO: Define una clase genérica 'EventEmitter<T extends EventMap>' que:
// - Mantenga un registro tipado de listeners para cada evento
// - Permita registrar callbacks con tipado correcto según el evento (método 'on')
// - Permita emitir eventos con datos del tipo adecuado (método 'emit')
// - Incluya métodos para eliminar listeners (método 'off')
// - Soporte emisión de eventos una sola vez (método 'once')

// TODO: Implementa una interfaz 'Disposable' con un método 'dispose' para limpiar recursos

// TODO: Haz que el método 'on' retorne un objeto 'Disposable' para facilitar la limpieza

// TODO: Implementa métodos adicionales:
// - 'hasListeners' para verificar si un evento tiene listeners
// - 'listenerCount' para contar los listeners de un evento
// - 'eventNames' para obtener todos los nombres de eventos con listeners


// ======================================================================
// DESAFÍO 4: Caché genérico con políticas personalizables
// Implementa un sistema de caché con opciones configurables
// ======================================================================

// ❌ Código básico sin opciones avanzadas
/*
class Cache {
  data = {};

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
  }

  has(key) {
    return key in this.data;
  }

  delete(key) {
    delete this.data[key];
  }

  clear() {
    this.data = {};
  }
}
*/

// ✅ Tu implementación aquí:
// TODO: Define una interfaz 'CacheOptions' con propiedades como:
// - maxSize: número máximo de elementos
// - ttl: tiempo de vida de los elementos
// - onEvict: callback cuando un elemento es eliminado
// - strategy: estrategia de eliminación ('lru', 'fifo', etc.)

// TODO: Define una interfaz 'CacheItem<T>' para los elementos del caché con:
// - value: el valor almacenado
// - createdAt: cuándo se creó
// - accessedAt: cuándo se accedió por última vez
// - hits: número de veces que se ha accedido

// TODO: Implementa una clase genérica 'Cache<K, V>' que:
// - Utilice un Map para almacenar pares clave-valor tipados
// - Acepte opciones de configuración en el constructor
// - Implemente métodos get, set, has, delete, clear
// - Respete el tamaño máximo y elimine elementos según la estrategia
// - Gestione automáticamente la expiración basada en TTL
// - Actualice estadísticas de acceso para cada elemento
// - Ofrezca métodos para obtener estadísticas del caché

// TODO: Implementa diferentes estrategias de eliminación:
// - LRU (Least Recently Used)
// - FIFO (First In First Out)
// - LFU (Least Frequently Used)

// TODO: Incluye un sistema para "decorar" funciones con caché:
// - Función 'memoize' que almacene en caché los resultados de una función


// Exporta tus implementaciones para usarlas en tests
export {
  // ResultadoValidacion, Validador, validar, requerido, longitudMinima, longitudMaxima, patron, rango, crearValidador,
  // pipe, compose, map, filter, reduce, flatMap,
  // EventMap, EventEmitter, Disposable,
  // CacheOptions, Cache
};

