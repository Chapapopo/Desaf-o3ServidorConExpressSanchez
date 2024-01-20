const express = require("express");
const GestionProductos = require("./GestionProductos.js");

const app = express();
const port = 8080;

const productosIniciales = [
    {
        id: 1,
        titulo: "Producto Inicial 1",
        cantidad: 10,
        descripcion: "Descripción del Producto 1",
        precio: 20.99,
        imagen: "imagen1.jpg",
        code: "XYZ789"
    },
    {
        id: 2,
        titulo: "Producto 1",
        cantidad: 5,
        descripcion: "Descripción del Producto 1",
        precio: 10.99,
        imagen: "imagen1.jpg",
        code: "ABC123"
    },
    {
        id: 3,
        titulo: "Producto 2",
        cantidad: 10,
        imagen: "imagen2.jpg",
        descripcion: "Descripción del Producto 2",
        precio: 25.50,
        code: "DEF456"
    },
    {
        id: 4,
        cantidad: 3,
        titulo: "Producto 3",
        descripcion: "Descripción del Producto 3",
        precio: 15.75,
        imagen: "imagen3.jpg",
        code: "yfgvyfg"
    },
    {
        id: 5,
        cantidad: 8,
        titulo: "Producto 4",
        descripcion: "Descripción del Producto 4",
        precio: 20.00,
        imagen: "imagen4.jpg",
        code: "GHI789"
    },
    {
        id: 6,
        cantidad: 12,
        titulo: "Producto 5",
        descripcion: "Descripción del Producto 5",
        precio: 18.50,
        imagen: "imagen5.jpg",
        code: "JKL012"
    },
    {
        id: 7,
        cantidad: 6,
        titulo: "Producto 6",
        descripcion: "Descripción del Producto 6",
        precio: 30.25,
        imagen: "imagen6.jpg",
        code: "MNO345"
    },
    {
        id: 8,
        cantidad: 6,
        titulo: "Producto 7",
        descripcion: "Descripción del Producto 6",
        precio: 30.25,
        imagen: "imagen7.jpg",
        code: "nuu482"
    },
    {
        id: 9,
        cantidad: 6,
        titulo: "Producto 8",
        descripcion: "Descripción del Producto 6",
        precio: 30.25,
        imagen: "imagen8.jpg",
        code: "ghm463"
    },
    {
        id: 10,
        cantidad: 6,
        titulo: "Producto8",
        descripcion: "Descripción del Producto 6",
        precio: 30.25,
        imagen: "imagen8.jpg",
        code: "dyf351"
    },
];


const gestion = new GestionProductos('/ruta/de/ejemplo', productosIniciales);



// Ruta para mostrar todos los productos con límite opcional
app.get("/productos", (req, res) => {
    const limit = parseInt(req.query.limit);

    if (limit && limit > 0) {
        const productosLimitados = gestion.mostrarProductos().slice(0, limit);
        res.json({ message: `Lista de primeros ${limit} productos`, productos: productosLimitados });
    } else {
        res.json({ message: "Lista de todos los productos", productos: gestion.mostrarProductos() });
    }
});

// Ruta para mostrar un producto por ID
app.get("/productos/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const producto = gestion.mostrarProducto(productId);

    if (producto) {
        res.json({ message: "Detalles del producto", producto });
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
});


app.listen(port, () => {
    console.log(`Servidor Express iniciado en http://localhost:${port}`);
});