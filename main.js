// Informaciónde las tarjetas

const tarjeta1 = document.getElementById('producto1');
const tarjeta2 = document.getElementById('producto2');
const tarjeta3 = document.getElementById('producto3');
const tarjeta4 = document.getElementById('producto4');
const tarjeta5 = document.getElementById('producto5');
const tarjeta6 = document.getElementById('producto6');
const tarjeta7 = document.getElementById('producto7');


const productos = [
    {
        id: 'producto1',
        nombre: 'Almendras',
        precio: 1800
    },
    {
        id: 'producto2',
        nombre: 'Avena',
        precio: 600
    },
    {
        id: 'producto3',
        nombre: 'Miel',
        precio: 900
    },
    {
        id: 'producto4',
        nombre: 'Pasta de Mani',
        precio: 1500
    },
    {
        id: 'producto5',
        nombre: 'Hummus',
        precio: 1300
    },
    {
        id: 'producto6',
        nombre: 'Nueces',
        precio: 1200
    },
    {
        id: 'producto7',
        nombre: 'Mix Frutos Secos',
        precio: 1600
    },
    {
        id: 'producto8',
        nombre: 'Mani',
        precio: 700
    },

];

// Función para agregar productos al carrito
function agregarAlCarrito() {
    const carrito = [];

    // Crear un listado de productos con nombres y precios
    const listaProductos = productos.map(producto => `${producto.nombre} - $${producto.precio} x k/g`).join('\n');

    while (true) {
        const nombreProducto = prompt(`Lista de productos:\n${listaProductos}\n\nIngrese el nombre del producto que desea agregar al carrito (o escriba 'fin' para finalizar):`);

        if (nombreProducto.toLowerCase() === 'fin') {
            break;
        }

        const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

        if (productoEncontrado) {
            carrito.push(productoEncontrado);
            alert(`${productoEncontrado.nombre} se ha agregado al carrito.`);
        } else {
            alert(`Producto no encontrado. Por favor, verifique el nombre ingresado.`);
        }
    }

    // Calcular el total usando reduce
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    // Mostrar resumen de la compra
    alert(`Resumen de la compra:\n\nProductos:\n${carrito.map(producto => producto.nombre).join(', ')}\n\nTotal: $${total}`);
}

// Llama a la función para agregar productos al carrito
agregarAlCarrito();