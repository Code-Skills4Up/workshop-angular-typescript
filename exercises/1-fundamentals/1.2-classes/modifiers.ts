/**
 * MODIFICADORES DE ACCESO EN TYPESCRIPT
 *
 * TypeScript proporciona modificadores de acceso para controlar
 * la visibilidad de las propiedades y métodos dentro de las clases.
 */

import { logSection } from "../../../utils";


console.log('Ejecutando demo de modificadores de acceso en TypeScript...');

// ============================================================================
// 1. PUBLIC (por defecto)
// ============================================================================

logSection('1. Public', 'Las propiedades y métodos públicos son accesibles desde cualquier lugar');

class Usuario {
  // Propiedades públicas - accesibles desde cualquier lugar
  public nombre: string;
  public email: string;

  // Constructor también con modificadores
  constructor(nombre: string, email: string) {
    this.nombre = nombre;
    this.email = email;
  }

  // Método público - accesible desde cualquier lugar
  public mostrarInfo(): string {
    return `${this.nombre} (${this.email})`;
  }
}

const usuario1 = new Usuario('Ana García', 'ana@ejemplo.com');

console.log('Accediendo a propiedades públicas:');
console.log(`- usuario1.nombre: ${usuario1.nombre}`);
console.log(`- usuario1.email: ${usuario1.email}`);
console.log(`- usuario1.mostrarInfo(): ${usuario1.mostrarInfo()}`);

// Modificación de propiedades públicas
usuario1.nombre = 'Ana López';
console.log(`- Después de modificar: ${usuario1.mostrarInfo()}`);

// ============================================================================
// 2. PRIVATE
// ============================================================================

// logSection('2. Private', 'Las propiedades y métodos privados solo son accesibles dentro de la clase');

class CuentaBancaria {
  // Propiedades privadas - accesibles solo dentro de la clase
  private titular: string;
  private _saldo: number;
  private numeroCuenta: string;

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this._saldo = saldoInicial;
    // Generar número de cuenta ficticio
    this.numeroCuenta = Math.random().toString(36).substring(2, 10).toUpperCase();
  }

  // Métodos públicos para acceder a propiedades privadas
  public obtenerTitular(): string {
    return this.titular;
  }

  public obtenerSaldo(): number {
    return this._saldo;
  }

  public obtenerNumeroCuenta(): string {
    // Muestra solo los últimos 4 caracteres por seguridad
    return '****' + this.numeroCuenta.slice(-4);
  }

  // Métodos para operar con el saldo
  public depositar(monto: number): void {
    if (monto <= 0) {
      throw new Error('El monto debe ser positivo');
    }
    this._saldo += monto;
    this.registrarTransaccion('depósito', monto);
  }

  public retirar(monto: number): boolean {
    if (monto <= 0) {
      throw new Error('El monto debe ser positivo');
    }
    if (monto > this._saldo) {
      console.log('Fondos insuficientes');
      return false;
    }
    this._saldo -= monto;
    this.registrarTransaccion('retiro', monto);
    return true;
  }

  // Método privado - solo accesible dentro de la clase
  private registrarTransaccion(tipo: string, monto: number): void {
    console.log(`[${new Date().toISOString()}] ${tipo.toUpperCase()}: $${monto}`);
  }
}

const cuenta1 = new CuentaBancaria('Carlos Rodríguez', 1000);

// console.log('Accediendo a información a través de métodos públicos:');
// console.log(`- Titular: ${cuenta1.obtenerTitular()}`);
// console.log(`- Número de cuenta: ${cuenta1.obtenerNumeroCuenta()}`);
// console.log(`- Saldo: $${cuenta1.obtenerSaldo()}`);

// Operaciones
// console.log('\nRealizando operaciones:');
cuenta1.depositar(500);
// console.log(`- Saldo después de depósito: $${cuenta1.obtenerSaldo()}`);

cuenta1.retirar(200);
// console.log(`- Saldo después de retiro: $${cuenta1.obtenerSaldo()}`);

// Intentar retirar más del saldo disponible
const retiroGrande = cuenta1.retirar(2000);
// console.log(`- Retiro de $2000: ${retiroGrande ? 'exitoso' : 'fallido'}`);

// No podemos acceder directamente a propiedades privadas
// console.log(cuenta1.titular); // Error: Property 'titular' is private
// cuenta1._saldo = 10000; // Error: Property '_saldo' is private
// cuenta1.registrarTransaccion('hack', 5000); // Error: Property 'registrarTransaccion' is private

// ============================================================================
// 3. PROTECTED
// ============================================================================

// logSection('3. Protected', 'Las propiedades y métodos protegidos son accesibles dentro de la clase y sus subclases');

class Empleado {
  // Propiedades protegidas - accesibles en la clase y subclases
  protected id: number;
  protected nombre: string;
  protected salario: number;

  constructor(id: number, nombre: string, salario: number) {
    this.id = id;
    this.nombre = nombre;
    this.salario = salario;
  }

  public obtenerInfo(): string {
    return `ID: ${this.id}, Nombre: ${this.nombre}, Salario: $${this.salario}`;
  }

  // Método protegido - accesible en la clase y subclases
  protected calcularSalarioAnual(): number {
    return this.salario * 12;
  }
}

class Gerente extends Empleado {
  private departamento: string;
  private bonus: number;

  constructor(id: number, nombre: string, salario: number, departamento: string, bonus: number) {
    super(id, nombre, salario);
    this.departamento = departamento;
    this.bonus = bonus;
  }

  public obtenerInfo(): string {
    // Podemos acceder a propiedades protegidas de la clase padre
    return `ID: ${this.id}, Nombre: ${this.nombre}, Departamento: ${this.departamento}`;
  }

  // Sobrescribimos el método para incluir el bonus
  public calcularSalarioTotal(): number {
    // Podemos acceder al método protegido de la clase padre
    const salarioBase = this.calcularSalarioAnual();
    return salarioBase + this.bonus;
  }
}

const empleado1 = new Empleado(1, 'Juan Pérez', 3000);
const gerente1 = new Gerente(2, 'Laura Gómez', 5000, 'Ventas', 10000);

// console.log('Información del empleado:');
// console.log(`- ${empleado1.obtenerInfo()}`);

// console.log('\nInformación del gerente:');
// console.log(`- ${gerente1.obtenerInfo()}`);
// console.log(`- Salario total anual: $${gerente1.calcularSalarioTotal()}`);

// No podemos acceder directamente a propiedades protegidas desde fuera
// console.log(empleado1.id); // Error: Property 'id' is protected
// console.log(gerente1.salario); // Error: Property 'salario' is protected
// empleado1.calcularSalarioAnual(); // Error: Property 'calcularSalarioAnual' is protected

// ============================================================================
// 4. READONLY
// ============================================================================

// logSection('4. Readonly', 'Las propiedades de solo lectura pueden ser asignadas en el constructor pero no modificadas después');

class Configuracion {
  // Propiedades de solo lectura - no se pueden modificar después de inicializadas
  readonly appName: string;
  readonly version: string;
  readonly maxConexiones: number;

  // Propiedad que puede ser modificada
  public debug: boolean;

  constructor(appName: string, version: string, maxConexiones: number, debug: boolean) {
    this.appName = appName;
    this.version = version;
    this.maxConexiones = maxConexiones;
    this.debug = debug;
  }

  public mostrarConfiguracion(): void {
    console.log(`
      Aplicación: ${this.appName}
      Versión: ${this.version}
      Máx. Conexiones: ${this.maxConexiones}
      Modo Debug: ${this.debug ? 'Activado' : 'Desactivado'}
    `);
  }

  public activarDebug(): void {
    this.debug = true;
  }

  public desactivarDebug(): void {
    this.debug = false;
  }
}

const config = new Configuracion('MiApp', '1.0.0', 100, false);

// console.log('Configuración inicial:');
// config.mostrarConfiguracion();

// Podemos modificar propiedades que no son readonly
// config.activarDebug();
// console.log('\nDespués de activar debug:');
// config.mostrarConfiguracion();

// No podemos modificar propiedades readonly
// config.appName = 'OtraApp'; // Error: Cannot assign to 'appName' because it is a read-only property
// config.version = '2.0.0'; // Error: Cannot assign to 'version' because it is a read-only property

// ============================================================================
// 5. COMBINACIÓN DE MODIFICADORES
// ============================================================================

// logSection('5. Combinación de modificadores', 'Uso de diferentes modificadores de acceso en una misma clase');

class Producto {
  // Propiedades con diferentes modificadores
  readonly id: string;
  public nombre: string;
  public precio: number;
  private _costo: number;
  private _proveedor: string;
  protected disponible: boolean;

  constructor(id: string, nombre: string, precio: number, costo: number, proveedor: string) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this._costo = costo;
    this._proveedor = proveedor;
    this.disponible = true;
  }

  // Getters y setters para acceder a propiedades privadas
  get costo(): number {
    return this._costo;
  }

  get proveedor(): string {
    return this._proveedor;
  }

  set proveedor(nuevoProveedor: string) {
    if (nuevoProveedor.trim() === '') {
      throw new Error('El proveedor no puede estar vacío');
    }
    this._proveedor = nuevoProveedor;
  }

  // Método público
  public mostrarDetalles(): void {
    console.log(`
      ID: ${this.id}
      Nombre: ${this.nombre}
      Precio: $${this.precio}
      Disponible: ${this.disponible ? 'Sí' : 'No'}
      Margen: ${this.calcularMargen()}%
    `);
  }

  // Método protegido
  protected calcularMargen(): number {
    return Math.round(((this.precio - this._costo) / this.precio) * 100);
  }

  // Método privado
  private actualizarInventario(cantidad: number): void {
    console.log(`Actualizando inventario: ${cantidad} unidades de ${this.nombre}`);
    this.disponible = cantidad > 0;
  }

  // Método público que usa un método privado
  public vender(cantidad: number): void {
    console.log(`Vendiendo ${cantidad} unidades de ${this.nombre}`);
    this.actualizarInventario(-cantidad);
  }

  public reabastecer(cantidad: number): void {
    console.log(`Reabasteciendo ${cantidad} unidades de ${this.nombre}`);
    this.actualizarInventario(cantidad);
  }
}

class ProductoEspecial extends Producto {
  private _descuento: number;

  constructor(id: string, nombre: string, precio: number, costo: number, proveedor: string, descuento: number) {
    super(id, nombre, precio, costo, proveedor);
    this._descuento = descuento;
  }

  // Sobrescribir un método protegido
  protected calcularMargen(): number {
    // Podemos acceder a disponible porque es protegido
    if (!this.disponible) {
      return 0;
    }

    // Usamos super para llamar al método original
    const margenBase = super.calcularMargen();
    return margenBase - this._descuento;
  }

  // Método nuevo
  public aplicarDescuento(): number {
    const precioConDescuento = this.precio * (1 - this._descuento / 100);
    return parseFloat(precioConDescuento.toFixed(2));
  }
}

const laptop = new Producto('P001', 'Laptop', 999.99, 750, 'TechSupplier');
const smartphone = new ProductoEspecial('P002', 'Smartphone', 699.99, 450, 'MobileVendor', 10);

// console.log('Detalles del producto normal:');
// laptop.mostrarDetalles();

// console.log('\nAcceso a propiedades y métodos:');
// console.log(`- ID (readonly): ${laptop.id}`);
// console.log(`- Nombre (public): ${laptop.nombre}`);
// console.log(`- Costo (private con getter): ${laptop.costo}`);
// console.log(`- Proveedor (private con getter): ${laptop.proveedor}`);

// Cambiar proveedor
// laptop.proveedor = 'NewSupplier';
// console.log(`- Nuevo proveedor: ${laptop.proveedor}`);

// console.log('\nDetalles del producto especial:');
// smartphone.mostrarDetalles();
// console.log(`- Precio con descuento: $${smartphone.aplicarDescuento()}`);

// ============================================================================
// logSection('Resumen', 'Los modificadores de acceso permiten controlar la encapsulación y proteger la integridad de los datos.');
console.log('\n\n✅ Archivo de modificadores de acceso ejecutado correctamente.');
console.log('='.repeat(80) + '\n');

