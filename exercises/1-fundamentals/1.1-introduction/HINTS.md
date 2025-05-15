# Pistas para los ejercicios de TypeScript

## Ejercicios básicos (start.ts)

### Ejercicio 1: Tipos básicos

- Para variables simples, usa los tipos primitivos: `string`, `number`, `boolean`
- Para arrays, puedes usar la notación `tipo[]` o `Array<tipo>`
- Para tuplas (arrays con una estructura fija), usa la notación `[tipo1, tipo2, ...]`
- Para objetos, puedes definir la estructura en línea usando `{ prop1: tipo1, prop2: tipo2 }`

```typescript
let username: string = "user123";
let userAge: number = 25;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "swimming", "coding"];
let userCoordinates: [number, number] = [40.7128, -74.0060];
let userProfile: { id: number, email: string, isPremium: boolean } = {
  id: 1,
  email: "user@example.com",
  isPremium: false
};
```

### Ejercicio 2: Funciones con tipos

- Define el tipo de cada parámetro seguido por dos puntos
- Define el tipo de retorno después de los paréntesis, antes de la llave de apertura
- Para parámetros opcionales, usa el símbolo `?`
- Para parámetros con valores por defecto, asigna el valor después del tipo

```typescript
function calculateTotal(price: number, quantity: number, discount: number): number {
  const subtotal = price * quantity;
  const total = subtotal - (subtotal * discount / 100);
  return total;
}

const formatName = (firstName: string, lastName: string, includeMiddle: boolean = false, middleName?: string): string => {
  if (includeMiddle && middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
};
```

### Ejercicio 3: Interfaces

- Define las interfaces con la palabra clave `interface` seguida del nombre en PascalCase
- Para propiedades anidadas, puedes definir tipos anidados o interfaces separadas
- Las propiedades opcionales se marcan con `?`

```typescript
interface ProductSpecs {
  cpu: string;
  ram: string;
  storage: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  specs: ProductSpecs;
}

const laptop: Product = {
  id: "P001",
  name: "MacBook Pro",
  price: 1299.99,
  category: "Electronics",
  inStock: true,
  specs: {
    cpu: "M1 Pro",
    ram: "16GB",
    storage: "512GB"
  }
};

interface UserPreferences {
  theme: string;
  notifications: boolean;
}

interface User {
  id: number;
  username: string;
  email: string;
  preferences: UserPreferences;
  roles: string[];
}

const currentUser: User = {
  id: 1,
  username: "johndoe",
  email: "john@example.com",
  preferences: {
    theme: "dark",
    notifications: true
  },
  roles: ["user", "editor"]
};
```

### Ejercicio 4: Unión e Intersección de tipos

- Para uniones, usa el operador `|` entre tipos: `string | number`
- Para intersecciones, usa el operador `&` entre tipos: `Type1 & Type2`
- Puedes usar `type` para crear alias de tipos complejos

```typescript
type ID = string | number;

// Ejemplo de uso:
const numericId: ID = 12345;
const stringId: ID = "ABC-12345";

interface BasicAddress {
  street: string;
  city: string;
  zipCode: string;
}

interface ContactInfo {
  email: string;
  phone: string;
}

type CustomerInfo = BasicAddress & ContactInfo;

// Ejemplo de uso:
const customer: CustomerInfo = {
  street: "123 Main St",
  city: "Boston",
  zipCode: "02108",
  email: "customer@example.com",
  phone: "555-123-4567"
};
```

### Ejercicio 5: Genéricos básicos

- Los genéricos se definen con `<T>` donde T es un nombre de tipo que se especificará más tarde
- Puedes usar cualquier nombre para tu tipo genérico, pero T, U, V son convenciones comunes
- Esto permite crear funciones y clases que trabajan con múltiples tipos manteniendo el tipado

```typescript
function firstElement<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const strings = ["hello", "world"];
console.log(firstElement(numbers)); // 1
console.log(firstElement(strings)); // "hello"
console.log(firstElement([])); // undefined
```
