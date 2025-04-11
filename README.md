# Librería El Búho Sabio

**Librería El Búho Sabio** es una aplicación web que permite a los usuarios visualizar productos literarios, agregar libros a un carrito de compras simulado y realizar un pago electrónico ficticio.


---

## Características principales

### Menú de Productos
- Visualización clara y categorizada de libros:
  - Ficción
  - No Ficción
  - Infantil
- Cada producto incluye:
  - Nombre del libro
  - Imagen
  - Descripción (nombre del autor)
  - Precio

### Carrito de Compras (Simulado)
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Visualizar el total acumulado.

### Pago Electrónico (Simulado)
- Formulario de pago con:
  - Nombre del titular
  - Número de tarjeta
  - Fecha de vencimiento
  - CVV
- Botón de “Pagar” que muestra un mensaje de confirmación.

---

## Demostración

Puedes ver la aplicación funcionando en:  
**[https://pabloriveros.github.io/libreriaelbuhosabio.github.io/](https://pabloriveros.github.io/libreriaelbuhosabio.github.io/)**


---


## Docker

Puedes levantar la aplicación localmente usando Docker a traves del Dockerfile con los comandos 
- **'docker build -t mi-servidor-web .'** para la contruccion de la imagen del contenedor
- **'docker run -d -p 80:80 mi-servidor-web'** para ejecutar el contenedor
