
class GestionProductos {
    constructor(path, productosIniciales = []) {
        this.productos = productosIniciales;
        this.ultimoId = productosIniciales.length > 0 ? Math.max(...productosIniciales.map(p => p.id)) : 0;
        this.path = path;
    }

    // Método para añadir un producto con un objeto de parámetros esto seria addProduct
    añadirProducto(datosProducto) {
        // Verificar si el code ya está en uso
        const codeExistente = this.productos.some(producto => producto.code === datosProducto.code);
        if (codeExistente) {
            console.error(`Error: Ya existe un producto con el code ${datosProducto.code}. No se pudo agregar.`);
            return; // Salir del método si el code está duplicado
        }

        this.ultimoId++;
        let producto = {
            id: this.ultimoId,
            titulo: datosProducto.titulo,
            cantidad: datosProducto.cantidad,
            descripcion: datosProducto.descripcion,
            precio: datosProducto.precio,
            code: datosProducto.code,
            imagen: datosProducto.imagen
        };
        this.productos.push(producto);
    }

    // Método para mostrar los productos esto seria getProducts
    mostrarProductos() {
        console.log(this.productos);
    }

    // Método para mostrar un solo producto por ID esto es getProductById
    mostrarProducto(id) {
        const productoEncontrado = this.productos.find(producto => producto.id === id);
        if (productoEncontrado) {
            console.log(productoEncontrado);
        } else {
            console.error("Producto no encontrado");
        }
    }

    //Método para actualizar un campo del producto buscado con el id
    actualizarProducto({ productoId, campo, nuevoValor }) {
        const productoIndex = this.productos.findIndex(producto => producto.id === productoId);

        if (productoIndex !== -1) {
            // Si se encuentra el producto por ID, actualizar el campo especificado
            if (this.productos[productoIndex].hasOwnProperty(campo)) {//hasOwnProperty me permite saber is un objeto (this.productos[productoIndex]) tiene una propiedad (campo) y devuelve un valor booleano
                this.productos[productoIndex][campo] = nuevoValor;
                console.log(`Campo ${campo} del producto con ID ${productoId} actualizado: ${nuevoValor}`);
            } else {
                console.log(`Error: El campo ${campo} no existe en el producto.`);
            }
        } else {
            console.log(`Producto con ID ${productoId} no encontrado. No se pudo actualizar.`);
        }
    }

    //Método para borrar un producto por id
    borrarProducto(productoId) {
        const productoIndex = this.productos.findIndex(producto => producto.id === productoId);

        if (productoIndex !== -1) {
            // Si se encuentra el producto por ID, borrarlo
            this.productos.splice(productoIndex, 1);
            console.log(`Producto con ID ${productoId} eliminado.`);
        } else {
            console.log(`Producto con ID ${productoId} no encontrado. No se pudo eliminar.`);
        }
    }

    mostrarProductos() {
        return this.productos;
    }
    mostrarProducto(id) {
        return this.productos.find(producto => producto.id === id);
    }
}

module.exports = GestionProductos;

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

gestion.mostrarProductos();