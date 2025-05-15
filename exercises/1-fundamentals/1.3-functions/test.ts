/**
 * Tests para las implementaciones de funciones y genéricos
 *
 * Este archivo contiene pruebas automatizadas para verificar
 * que tus implementaciones en start.ts y challenges.ts
 * cumplan con los requisitos especificados.
 */

import { describe, it, expect } from 'vitest';

// Importamos las implementaciones del archivo start.ts
// Descomenta a medida que vayas implementando los ejercicios
import {
  // calcularPrecioTotal,
  // formatearNombre,
  // Operacion,
  // suma, resta, multiplicacion, division,
  // calculadora,
  // obtenerPrimero,
  // ConNombre,
  // saludar,
  // Coleccion
} from './start';

// Importamos las implementaciones del archivo challenges.ts
// Descomenta a medida que vayas implementando los desafíos
/*
import {
  // ResultadoValidacion, Validador, validar, requerido, longitudMinima, longitudMaxima, patron, rango, crearValidador,
  // pipe, compose, map, filter, reduce, flatMap,
  // EventMap, EventEmitter, Disposable,
  // CacheOptions, Cache
} from './challenges';
*/

// ======================================================================
// Tests para ejercicios básicos (start.ts)
// ======================================================================

describe('Funciones y Genéricos Básicos', () => {
  describe('Ejercicio 1: Anotaciones de tipo en funciones', () => {
    // Test para calcularPrecioTotal
    it('debe calcular el precio total correctamente', () => {
      if (typeof calcularPrecioTotal !== 'undefined') {
        expect(calcularPrecioTotal(100, 21, false)).toBe(121);
        expect(calcularPrecioTotal(100, 21, true)).toBe(108.9);
      } else {
        pending('La función calcularPrecioTotal no está implementada');
      }
    });

    // Test para formatearNombre
    it('debe formatear nombres correctamente', () => {
      if (typeof formatearNombre !== 'undefined') {
        expect(formatearNombre('juan', 'PÉREZ')).toBe('juan pérez');
        expect(formatearNombre('ana', 'garcía', true)).toBe('Ana García');
      } else {
        pending('La función formatearNombre no está implementada');
      }
    });
  });

  describe('Ejercicio 2: Funciones como parámetros y retorno', () => {
    it('debe implementar operaciones matemáticas correctamente', () => {
      if (typeof suma !== 'undefined' && typeof resta !== 'undefined' &&
          typeof multiplicacion !== 'undefined' && typeof division !== 'undefined') {
        expect(suma(5, 3)).toBe(8);
        expect(resta(5, 3)).toBe(2);
        expect(multiplicacion(5, 3)).toBe(15);
        expect(division(6, 3)).toBe(2);
      } else {
        pending('Las operaciones matemáticas no están implementadas');
      }
    });

    it('debe implementar la calculadora correctamente', () => {
      if (typeof calculadora !== 'undefined' && typeof suma !== 'undefined') {
        expect(calculadora(10, 5, suma)).toBe(15);
        expect(calculadora(10, 5, resta)).toBe(5);
        expect(calculadora(10, 5, multiplicacion)).toBe(50);
        expect(calculadora(10, 5, division)).toBe(2);
      } else {
        pending('La función calculadora no está implementada');
      }
    });
  });

  describe('Ejercicio 3: Función genérica básica', () => {
    it('debe obtener el primer elemento de un array', () => {
      if (typeof obtenerPrimero !== 'undefined') {
        expect(obtenerPrimero([1, 2, 3])).toBe(1);
        expect(obtenerPrimero(['a', 'b', 'c'])).toBe('a');
        expect(obtenerPrimero([])).toBeUndefined();
      } else {
        pending('La función obtenerPrimero no está implementada');
      }
    });
  });

  describe('Ejercicio 4: Restricciones de tipo genérico', () => {
    it('debe implementar la interfaz ConNombre y función saludar', () => {
      if (typeof saludar !== 'undefined') {
        const persona = { nombre: 'Laura', edad: 28 };
        const producto = { nombre: 'Laptop', precio: 1200 };

        expect(saludar(persona)).toBe('¡Hola, Laura!');
        expect(saludar(producto)).toBe('¡Hola, Laptop!');
      } else {
        pending('La función saludar no está implementada');
      }
    });
  });

  describe('Ejercicio 5: Clases genéricas', () => {
    it('debe implementar la clase Coleccion correctamente', () => {
      if (typeof Coleccion !== 'undefined') {
        // @ts-ignore - La clase puede no estar definida aún
        const numeros = new Coleccion<number>();
        numeros.agregar(1);
        numeros.agregar(2);
        numeros.agregar(3);

        expect(numeros.cantidad).toBe(3);
        expect(numeros.obtener(1)).toBe(2);
        expect(numeros.buscar(n => n > 2)).toEqual([3]);

        // Prueba con objetos
        interface Producto {
          id: number;
          nombre: string;
          precio: number;
        }

        // @ts-ignore - La clase puede no estar definida aún
        const productos = new Coleccion<Producto>();
        productos.agregar({ id: 1, nombre: 'Teléfono', precio: 500 });
        productos.agregar({ id: 2, nombre: 'Tablet', precio: 800 });
        productos.agregar({ id: 3, nombre: 'Laptop', precio: 1200 });

        expect(productos.cantidad).toBe(3);
        expect(productos.obtener(1)?.nombre).toBe('Tablet');

        const caros = productos.buscar(p => p.precio > 700);
        expect(caros.length).toBe(2);
        expect(caros[0].nombre).toBe('Tablet');
        expect(caros[1].nombre).toBe('Laptop');
      } else {
        pending('La clase Coleccion no está implementada');
      }
    });
  });
});

// ======================================================================
// Tests para desafíos avanzados (challenges.ts)
// ======================================================================

// Descomenta estos tests a medida que vayas implementando los desafíos

/*
describe('Desafío 1: Sistema de validación de formularios', () => {
  it('debe validar correctamente los valores', () => {
    // Valores para validar
    const nombreUsuario = 'user123';
    const passwordCorta = 'abc';
    const passwordValida = 'Secret123';
    const email = 'test@example.com';
    const emailInvalido = 'not-an-email';

    // Validadores
    const validadoresNombre = [requerido(), longitudMinima(5)];
    const validadoresPassword = [requerido(), longitudMinima(8), patron(/^(?=.*[A-Z])(?=.*\d)/g, 'Debe contener mayúsculas y números')];
    const validadoresEmail = [requerido(), patron(/^\S+@\S+\.\S+$/, 'Email inválido')];

    // Pruebas
    const resultadoNombre = validar(nombreUsuario, validadoresNombre);
    expect(resultadoNombre.valido).toBe(true);

    const resultadoPasswordCorta = validar(passwordCorta, validadoresPassword);
    expect(resultadoPasswordCorta.valido).toBe(false);
    expect(resultadoPasswordCorta.errores.length).toBeGreaterThan(0);

    const resultadoPasswordValida = validar(passwordValida, validadoresPassword);
    expect(resultadoPasswordValida.valido).toBe(true);

    const resultadoEmail = validar(email, validadoresEmail);
    expect(resultadoEmail.valido).toBe(true);

    const resultadoEmailInvalido = validar(emailInvalido, validadoresEmail);
    expect(resultadoEmailInvalido.valido).toBe(false);
  });

  it('debe permitir crear validadores personalizados', () => {
    const validadorNumerico = crearValidador<number>(
      (valor) => !isNaN(valor) && valor > 0,
      'Debe ser un número positivo'
    );

    const resultadoPositivo = validar(42, [validadorNumerico]);
    expect(resultadoPositivo.valido).toBe(true);

    const resultadoNegativo = validar(-5, [validadorNumerico]);
    expect(resultadoNegativo.valido).toBe(false);
  });
});

describe('Desafío 2: Composición de funciones', () => {
  it('debe implementar pipe correctamente', () => {
    const doble = (x: number) => x * 2;
    const suma5 = (x: number) => x + 5;
    const toString = (x: number) => `El número es ${x}`;

    const pipeline = pipe(doble, suma5, toString);
    expect(pipeline(10)).toBe('El número es 25');
  });

  it('debe implementar compose correctamente', () => {
    const doble = (x: number) => x * 2;
    const suma5 = (x: number) => x + 5;
    const toString = (x: number) => `El número es ${x}`;

    const composicion = compose(toString, suma5, doble);
    expect(composicion(10)).toBe('El número es 25');
  });

  it('debe implementar map, filter y reduce', () => {
    const numeros = [1, 2, 3, 4, 5];

    const duplicados = map(numeros, n => n * 2);
    expect(duplicados).toEqual([2, 4, 6, 8, 10]);

    const pares = filter(numeros, n => n % 2 === 0);
    expect(pares).toEqual([2, 4]);

    const suma = reduce(numeros, (acc, n) => acc + n, 0);
    expect(suma).toBe(15);
  });
});

describe('Desafío 3: Sistema de eventos tipado', () => {
  it('debe manejar eventos con tipos correctos', () => {
    interface MisMensajes {
      'usuario:login': { id: number, username: string };
      'usuario:logout': { id: number };
      'notificacion': string;
    }

    const emitter = new EventEmitter<MisMensajes>();

    // Verificar registración de eventos
    const loginHandler = jest.fn();
    const notificacionHandler = jest.fn();

    emitter.on('usuario:login', loginHandler);
    emitter.on('notificacion', notificacionHandler);

    // Emitir eventos
    emitter.emit('usuario:login', { id: 1, username: 'user123' });
    emitter.emit('notificacion', 'Nuevo mensaje recibido');

    // Verificar que los handlers se llamaron con los argumentos correctos
    expect(loginHandler).toHaveBeenCalledWith({ id: 1, username: 'user123' });
    expect(notificacionHandler).toHaveBeenCalledWith('Nuevo mensaje recibido');

    // Verificar que el método off funciona
    emitter.off('usuario:login', loginHandler);
    emitter.emit('usuario:login', { id: 2, username: 'user456' });

    // El handler no debería ser llamado una segunda vez
    expect(loginHandler).toHaveBeenCalledTimes(1);
  });
});

describe('Desafío 4: Caché genérico con políticas personalizables', () => {
  it('debe almacenar y recuperar valores correctamente', () => {
    const cache = new Cache<string, number>();

    cache.set('item1', 42);
    expect(cache.has('item1')).toBe(true);
    expect(cache.get('item1')).toBe(42);

    cache.delete('item1');
    expect(cache.has('item1')).toBe(false);
  });

  it('debe respetar las opciones de tamaño máximo', () => {
    const cache = new Cache<string, number>({
      maxSize: 2,
      strategy: 'fifo'
    });

    cache.set('item1', 1);
    cache.set('item2', 2);
    cache.set('item3', 3); // Debería eliminar item1

    expect(cache.has('item1')).toBe(false);
    expect(cache.has('item2')).toBe(true);
    expect(cache.has('item3')).toBe(true);
  });

  it('debe implementar TTL correctamente', () => {
    jest.useFakeTimers();

    const cache = new Cache<string, number>({
      ttl: 1000 // 1 segundo
    });

    cache.set('item1', 1);
    expect(cache.has('item1')).toBe(true);

    // Avanzar el tiempo 2 segundos
    jest.advanceTimersByTime(2000);

    // El ítem debería haber expirado
    expect(cache.has('item1')).toBe(false);

    jest.useRealTimers();
  });
});
*/

// Exportamos los tests para que puedan ser ejecutados
export default { describe, it, expect };
