var productosContainer = document.getElementById("productos");

// Obtiene los datos de los productos (puedes reemplazar este ejemplo con una llamada AJAX para cargar el archivo JSON)
var productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Esta es la descripción del Producto 1",
    stock: 10,
    precio: 19.99,
    imagen: "https://ejemplo.com/imagen1.jpg",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Esta es la descripción del Producto 2",
    stock: 5,
    precio: 9.99,
    imagen: "https://ejemplo.com/imagen2.jpg",
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Esta es la descripción del Producto 3",
    stock: 2,
    precio: 29.99,
    imagen: "https://ejemplo.com/imagen3.jpg",
  },
  {
    id: 4,
    nombre: "Producto 4",
    descripcion: "Esta es la descripción del Producto 4",
    stock: 0,
    precio: 39.99,
    imagen: "https://ejemplo.com/imagen4.jpg",
  },
  {
    id: 5,
    nombre: "Producto 5",
    descripcion: "Esta es la descripción del Producto 5",
    stock: 1,
    precio: 49.99,
    imagen: "https://ejemplo.com/imagen5.jpg",
  },
  {
    id: 6,
    nombre: "Producto 6",
    descripcion: "Esta es la descripción del Producto 6",
    stock: 10,
    precio: 59.99,
    imagen: "https://ejemplo.com/imagen6.jpg",
  },
];

// Recorre los productos y crea elementos HTML para mostrarlos
productos.forEach(function (producto) {
  // Crea un contenedor para cada producto
  var productoContainer = document.createElement("div");
  productoContainer.className = "producto";

  // Crea elementos HTML para mostrar la información del producto
  var nombreElement = document.createElement("h2");
  nombreElement.textContent = producto.nombre;

  var descripcionElement = document.createElement("p");
  descripcionElement.textContent = producto.descripcion;

  var stockElement = document.createElement("p");
  stockElement.textContent = "Stock: " + producto.stock;

  var precioElement = document.createElement("p");
  precioElement.textContent = "Precio: " + producto.precio;

  var imagenElement = document.createElement("img");
  imagenElement.src = producto.imagen;

  // Agrega los elementos al contenedor del producto
  productoContainer.appendChild(nombreElement);
  productoContainer.appendChild(descripcionElement);
  productoContainer.appendChild(stockElement);
  productoContainer.appendChild(precioElement);
  productoContainer.appendChild(imagenElement);

  // Agrega el contenedor del producto al contenedor principal
  productosContainer.appendChild(productoContainer);
});
