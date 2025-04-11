const productos = {
  ficcion: [
    { nombre: "La Sombra del Viento", imagen: "images/elviento.jpg", descripcion: "Carlos Ruiz Zafón", precio: 22990 },
    { nombre: "1984", imagen: "images/1984.jpg", descripcion: "George Orwell", precio: 7990 },
    { nombre: "Fahrenheit 451", imagen: "images/451.jpg", descripcion: "Ray Bradbury", precio: 10590},
    { nombre: "En las montañas de la locura", imagen: "images/montañas.jpg", descripcion: "H.P. Lovecraft", precio: 5990},
    { nombre: "El fin de la eternidad", imagen: "images/eternidad.jpg", descripcion: "Isaac Asimov", precio: 25790},
    { nombre: "Las estrellas, mi destino", imagen: "images/estrellas.jpg", descripcion: "Alfred Bester", precio: 11990}

  ],
  noFiccion: [
    { nombre: "Sapiens", imagen: "images/sapiens.jpg", descripcion: "Yuval Noah Harari", precio: 15990 },
    { nombre: "El color favorito", imagen: "images/color.jpg", descripcion: "Valeria Tentoni", precio: 25990 },
    { nombre: "Donde nada se detiene", imagen: "images/donde.jpg", descripcion: "Sonia Budassi", precio: 11990 },
    { nombre: "Los inquietos", imagen: "images/inquietos.jpg", descripcion: "Linn Ullmann", precio: 27300 },
  ],
  infantil: [
    { nombre: "El Principito", imagen: "images/principito.jpg", descripcion: "Antoine de Saint-Exupéry", precio: 6990 }
  ]
};

let carrito = [];

function mostrarCategoria(categoria) {
  const contenedor = document.getElementById("productos");
  const carritoSec = document.getElementById("carrito");
  const pagoSec = document.getElementById("pago");

  carritoSec.classList.add("oculto");
  pagoSec.classList.add("oculto");
  contenedor.innerHTML = "";

  productos[categoria].forEach(producto => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p>${producto.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
      <button onclick='agregarAlCarrito(${JSON.stringify(producto)})'>Agregar</button>
    `;
    contenedor.appendChild(card);
  });
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  document.getElementById("carrito-cantidad").textContent = carrito.length;
  alert(`${producto.nombre} agregado al carrito.`);
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito");
  const productosSec = document.getElementById("productos");
  const pagoSec = document.getElementById("pago");

  productosSec.innerHTML = "";
  pagoSec.classList.add("oculto");
  contenedor.classList.remove("oculto");
  contenedor.innerHTML = "<h2>Tu Carrito</h2>";

  if (carrito.length === 0) {
    contenedor.innerHTML += "<p>El carrito está vacío.</p>";
    return;
  }

  carrito.forEach((item, index) => {
    contenedor.innerHTML += `
      <div class="card">
        <h3>${item.nombre}</h3>
        <p>$${item.precio}</p>
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
      </div>
    `;
  });

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  contenedor.innerHTML += `<h3>Total: ${total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>`;
  contenedor.innerHTML += `<button onclick="mostrarFormularioPago()">Proceder al Pago</button>`;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  document.getElementById("carrito-cantidad").textContent = carrito.length;
  mostrarCarrito();
}

function mostrarFormularioPago() {
  document.getElementById("carrito").classList.add("oculto");
  document.getElementById("pago").classList.remove("oculto");
}

function procesarPago(event) {
  event.preventDefault();
  alert("✅ ¡Gracias por tu compra!");
  carrito = [];
  document.getElementById("carrito-cantidad").textContent = 0;
  document.getElementById("pago").classList.add("oculto");
  document.getElementById("productos").innerHTML = "";
}
