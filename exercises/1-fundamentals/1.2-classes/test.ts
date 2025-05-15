/**
 * Tests para las implementaciones de clases y objetos
 *
 * Este archivo contiene pruebas automatizadas para verificar
 * que tus implementaciones en start.ts y challenges.ts
 * cumplan con los requisitos especificados.
 */

import { describe, it, expect } from 'vitest';

// Importamos las implementaciones del archivo start.ts
import {
  Producto,
  Carrito,
  Usuario,
  Administrador
} from './start';

// Importamos las implementaciones del archivo challenges.ts
// Descomenta a medida que vayas implementando
/*
import {
  Empleado,
  EmpleadoTiempoCompleto,
  EmpleadoPorHoras,
  Gerente,
  Forma,
  FormaBase,
  Circulo,
  Rectangulo,
  Triangulo,
  GrupoFormas
} from './challenges';
*/

// ======================================================================
// Tests para ejercicios básicos (start.ts)
// ======================================================================

describe('Clases Básicas', () => {
  describe('Clase Producto', () => {
    it('debe crear un producto con propiedades correctas', () => {
      const producto = new Producto(1, 'Laptop', 999.99, 10);
      expect(producto.id).toBe(1);
      expect(producto.nombre).toBe('Laptop');
      expect(producto.precio).toBe(999.99);
      expect(producto.stock).toBe(10);
    });

    it('debe permitir actualizar el stock', () => {
      const producto = new Producto(1, 'Laptop', 999.99, 10);
      producto.actualizarStock(15);
      expect(producto.stock).toBe(15);
    });

    it('debe aplicar descuento correctamente', () => {
      const producto = new Producto(1, 'Laptop', 1000, 10);
      expect(producto.aplicarDescuento(20)).toBe(800);
    });

    it('debe formatear el precio correctamente', () => {
      const producto = new Producto(1, 'Laptop', 999.99, 10);
      expect(producto.mostrarPrecioFormateado()).toMatch(/\$999\.99/);
    });
  });

  describe('Clase Carrito', () => {
    it('debe iniciar con un array vacío de productos', () => {
      const carrito = new Carrito();
      expect(carrito.productos).toHaveLength(0);
    });

    it('debe agregar productos correctamente', () => {
      const carrito = new Carrito();
      const producto = new Producto(1, 'Laptop', 999.99, 10);
      carrito.agregarProducto(producto, 2);
      expect(carrito.productos).toHaveLength(1);
      expect(carrito.productos[0].producto).toBe(producto);
      expect(carrito.productos[0].cantidad).toBe(2);
    });

    it('debe calcular el total correctamente', () => {
      const carrito = new Carrito();
      carrito.agregarProducto(new Producto(1, 'Laptop', 1000, 10), 2);
      carrito.agregarProducto(new Producto(2, 'Mouse', 50, 20), 1);
      expect(carrito.calcularTotal()).toBe(2050);
    });

    it('debe eliminar productos correctamente', () => {
      const carrito = new Carrito();
      const producto1 = new Producto(1, 'Laptop', 1000, 10);
      const producto2 = new Producto(2, 'Mouse', 50, 20);

      carrito.agregarProducto(producto1, 2);
      carrito.agregarProducto(producto2, 1);

      carrito.eliminarProducto(1);
      expect(carrito.productos).toHaveLength(1);
      expect(carrito.productos[0].producto.id).toBe(2);
    });

    it('debe vaciar el carrito correctamente', () => {
      const carrito = new Carrito();
      carrito.agregarProducto(new Producto(1, 'Laptop', 1000, 10), 2);
      carrito.vaciar();
      expect(carrito.productos).toHaveLength(0);
    });
  });

  describe('Clases Usuario y Administrador (Herencia)', () => {
    it('debe crear usuario con propiedades correctas', () => {
      const usuario = new Usuario(1, 'user123', 'user@example.com');
      expect(usuario.id).toBe(1);
      expect(usuario.username).toBe('user123');
      expect(usuario.email).toBe('user@example.com');
    });

    it('debe verificar que Administrador hereda de Usuario', () => {
      const admin = new Administrador(1, 'admin123', 'admin@example.com', ['users', 'products']);
      expect(admin).toBeInstanceOf(Usuario);
      expect(admin.id).toBe(1);
      expect(admin.username).toBe('admin123');
      expect(admin.email).toBe('admin@example.com');
      expect(admin.permisos).toEqual(['users', 'products']);
    });

    it('debe verificar que el administrador tiene método tienePermiso', () => {
      const admin = new Administrador(1, 'admin123', 'admin@example.com', ['users', 'products']);
      expect(admin.tienePermiso('users')).toBe(true);
      expect(admin.tienePermiso('settings')).toBe(false);
    });

    it('debe permitir añadir permisos al administrador', () => {
      const admin = new Administrador(1, 'admin123', 'admin@example.com', ['users']);
      admin.agregarPermiso('products');
      expect(admin.permisos).toContain('products');
    });
  });
});

// ======================================================================
// Tests para desafíos avanzados (challenges.ts)
// ======================================================================

// Descomenta estos tests a medida que vayas implementando los desafíos

/*
describe('Desafío 1: Sistema de gestión de empleados', () => {
  describe('Clases de Empleados', () => {
    it('debe crear EmpleadoTiempoCompleto correctamente', () => {
      const empleado = new EmpleadoTiempoCompleto(1, 'Juan', 'Pérez', 2000, 10);
      expect(empleado.nombreCompleto()).toBe('Juan Pérez');
      expect(empleado.calcularSalario()).toBe(2200); // 2000 + (2000 * 10 / 100)
    });

    it('debe crear EmpleadoPorHoras correctamente', () => {
      const empleado = new EmpleadoPorHoras(2, 'Ana', 'García', 20, 15);
      expect(empleado.nombreCompleto()).toBe('Ana García');
      expect(empleado.calcularSalario()).toBe(300); // 20 horas * 15 tarifa
    });

    it('debe crear Gerente correctamente', () => {
      const gerente = new Gerente(3, 'Carlos', 'López', 3000, 15, 500);
      expect(gerente.nombreCompleto()).toBe('Carlos López');
      // 3000 + (3000 * 15 / 100) + 500 = 3950
      expect(gerente.calcularSalario()).toBe(3950);
    });
  });
});

describe('Desafío 2: Sistema de formas geométricas', () => {
  it('debe calcular área y perímetro del círculo correctamente', () => {
    const circulo = new Circulo('Círculo 1', 5);
    expect(circulo.calcularArea()).toBeCloseTo(Math.PI * 25, 2);
    expect(circulo.calcularPerimetro()).toBeCloseTo(2 * Math.PI * 5, 2);
  });

  it('debe calcular área y perímetro del rectángulo correctamente', () => {
    const rectangulo = new Rectangulo('Rectángulo 1', 4, 5);
    expect(rectangulo.calcularArea()).toBe(20);
    expect(rectangulo.calcularPerimetro()).toBe(18);
  });

  it('debe calcular área y perímetro del triángulo correctamente', () => {
    const triangulo = new Triangulo('Triángulo 1', 3, 4, 5);
    expect(triangulo.calcularArea()).toBe(6); // Fórmula de Herón
    expect(triangulo.calcularPerimetro()).toBe(12);
  });

  it('debe implementar correctamente GrupoFormas', () => {
    const grupo = new GrupoFormas();
    const circulo = new Circulo('Círculo 1', 5);
    const rectangulo = new Rectangulo('Rectángulo 1', 4, 5);

    grupo.agregarForma(circulo);
    grupo.agregarForma(rectangulo);

    expect(grupo.obtenerFormas().length).toBe(2);
    expect(grupo.calcularAreaTotal()).toBeCloseTo(Math.PI * 25 + 20, 2);
    expect(grupo.obtenerFormaMayorPerimetro()).toBe(circulo);
  });
});
*/

// Exportamos los tests para que puedan ser ejecutados
export default { describe, it, expect };
