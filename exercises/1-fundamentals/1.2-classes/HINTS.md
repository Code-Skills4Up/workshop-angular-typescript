# Pistas para los ejercicios de Clases y Objetos

## Ejercicio 1: Clase básica

- Define la clase con la palabra clave `class` seguida del nombre (Libro)
- Declara todas las propiedades requeridas con sus tipos al inicio de la clase
- Crea un constructor que inicialice las propiedades, usando un valor por defecto para `disponible`
- Implementa los métodos requeridos con sus tipos de retorno apropiados
- Usa `this` para acceder a las propiedades dentro de los métodos

```typescript
class Libro {
  // Propiedades
  titulo: string;
  autor: string;
  añoPublicacion: number;
  disponible: boolean;

  constructor(titulo: string, autor: string, añoPublicacion: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.añoPublicacion = añoPublicacion;
    this.disponible = true; // valor por defecto
  }

  // Métodos...
}
```

## Ejercicio 2: Constructor acortado

- Usa modificadores de acceso (public, private, protected) en los parámetros del constructor
- TypeScript automáticamente creará y asignará las propiedades
- Asegúrate de mantener los mismos nombres y tipos de propiedades
- Usa un valor por defecto para la propiedad `activo`

```typescript
class EstudianteModerno {
  constructor(
    public nombre: string,
    public edad: number,
    public cursos: string[] = [],
    public activo: boolean = true
  ) {}

  // Métodos...
}
```

## Ejercicio 3: Herencia

- Define la clase base `Producto` primero con todas sus propiedades y métodos
- Usa la palabra clave `extends` para crear las clases derivadas
- Utiliza `super` en el constructor de las clases derivadas para llamar al constructor de la clase base
- Sobrescribe métodos usando la misma firma (nombre y parámetros) que en la clase base
- Para usar modificador `readonly`, agrégalo antes del tipo de la propiedad

```typescript
class Producto {
  constructor(
    public readonly id: string,
    public nombre: string,
    public precio: number
  ) {}

  // Métodos...
}

class ProductoDigital extends Producto {
  constructor(
    id: string,
    nombre: string,
    precio: number,
    public formato: string
  ) {
    super(id, nombre, precio); // Llamada al constructor de la clase base
  }

  // Sobrescribir métodos...
}
```

## Ejercicio 4: Modificadores de acceso

- Usa `private` o el prefijo `_` para las propiedades que deban ser encapsuladas
- Usa `readonly` para propiedades que no deben cambiar después de la inicialización
- Define métodos públicos para interactuar con las propiedades privadas
- Implementa validaciones en los métodos que modifican el estado interno

```typescript
class CuentaBancaria {
  private _saldo: number;
  private _movimientos: string[];

  constructor(
    public titular: string,
    public readonly numeroCuenta: string,
    saldoInicial: number = 0
  ) {
    this._saldo = saldoInicial;
    this._movimientos = [];
  }

  // Métodos públicos y privados...
}
```

## Ejercicio 5: Getters y Setters

- Define propiedades privadas con el prefijo `_`
- Usa `get` para crear getters que devuelvan valores calculados o validados
- Implementa lógica de validación en los métodos que modifican el estado
- Usa siempre `this` para acceder a las propiedades dentro de la clase

```typescript
class CarritoCompras {
  private _items: Array<{ id: string, nombre: string, precio: number, cantidad: number }> = [];
  private _totalItems: number = 0;

  get totalItems(): number {
    return this._totalItems;
  }

  get total(): number {
    return this._items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  }

  // Otros métodos...
}
```

## Desafíos avanzados

### Desafío 1: Sistema de gestión de empleados

- Usa la palabra clave `abstract` para la clase base y los métodos abstractos
- Los métodos abstractos no tienen implementación en la clase base
- Cada clase derivada debe proporcionar una implementación para cada método abstracto
- Usa `protected` para las propiedades que deben ser accesibles solo desde la clase y sus subclases

### Desafío 2: Sistema de formas geométricas con interfaces

- Define primero la interfaz `Forma` con todos los métodos requeridos
- Implementa una clase abstracta que implemente la interfaz parcialmente
- Cada clase concreta debe extender la clase abstracta e implementar los métodos pendientes
- Usa `Math.PI` para los cálculos con círculos y fórmulas matemáticas apropiadas para cada forma

### Desafío 3: Sistema de biblioteca con genéricos

- Usa `<T>` para definir clases genéricas que pueden trabajar con diferentes tipos
- Implementa primero la interfaz `Prestable` con todos los métodos requeridos
- Para la clase `Coleccion<T>`, implementa métodos que operen sobre un array de tipo T
- Asegúrate de que las clases específicas (`Libro`, `Revista`, etc.) implementen correctamente la interfaz

### Desafío 4: Implementación de patrones de diseño

- Para el Singleton: usa un miembro estático privado para almacenar la instancia única
- Define un método estático `getInstance()` que cree la instancia si no existe o devuelva la existente
- Para el Factory Method: define una interfaz común y diferentes implementaciones
- Crea una clase factory con un método que devuelva la implementación adecuada según los parámetros

## Tips generales para clases en TypeScript

- Usa PascalCase para nombres de clases (Ej: `ProductoDigital`)
- Usa camelCase para nombres de propiedades y métodos (Ej: `calcularImpuesto()`)
- Comienza los nombres de propiedades privadas con guion bajo (Ej: `_saldo`)
- Mantén las responsabilidades de cada clase bien definidas y limitadas
- Prefiere composición sobre herencia cuando sea posible
- Evita clases excesivamente grandes o con demasiadas responsabilidades
- Documenta clases complejas y métodos importantes con comentarios

