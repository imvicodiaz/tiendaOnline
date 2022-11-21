let productos = [
    {id:1 , nombre: 'faces', stock: 1, precio: 3500, imgUrl: './img/IMG_7565.PNG', texto: "Ilustración hecha con portaminas - 2B - 20x15cm"},
    {id:2 , nombre: 'abstract', stock: 1, precio: 3500, imgUrl: './img/IMG_7581.PNG', texto: "Ilustración hecha con Marcador punta fina - 20x15cm"},
    {id:3, nombre: 'cloudy eyes', stock: 1, precio: 3500, imgUrl: './img/IMG_7582.PNG', texto: "Ilustración hecha con portaminas  2B - colores - liquid paper - 20x15cm"},
    {id:4 , nombre: 'she', stock: 1, precio: 3500, imgUrl: './img/IMG_7559.PNG', texto: "Ilustración hecha con portaminas  2B - liquid paper - 20x15cm"},
    {id:5 , nombre: 'woman', stock: 1, precio: 3500, imgUrl: './img/IMG_7561.PNG', texto: "Ilustración hecha con portaminas  2B - 20x15cm"},
    {id:6 , nombre: 'profile', stock: 1, precio: 3500, imgUrl: './img/IMG_7563.PNG', texto: "Ilustración hecha con portaminas  2B - liquid paper - 20x15cm"},
    {id:7 , nombre: 'wins', stock: 1, precio: 3500, imgUrl: './img/IMG_7560.PNG', texto: "Ilustración hecha con portaminas  2B - colores - liquid paper - 20x15cm"},
    {id:8 , nombre: 'hair & eyes', stock: 1, precio: 3500, imgUrl: './img/IMG_7562.PNG', texto: "Ilustración hecha con portaminas  2B  - colores  -  20x15cm"},
    {id:9 , nombre: 'ponytail', stock: 1, precio: 3500, imgUrl: './img/IMG_7566.PNG', texto: "Ilustración hecha con portaminas 2B - 20x15cm"},
    {id:10 , nombre: 'pixie', stock: 1, precio: 3500, imgUrl: './img/IMG_7567.PNG', texto: "Ilustración hecha con portaminas 2B - 20x15cm"},
    {id:11 , nombre: 'bodies & stuffs', stock: 1, precio: 3500, imgUrl: './img/IMG_7564.PNG', texto: "Ilustración hecha con portaminas  2B - colores - 20x15cm"},
    {id:12 , nombre: 'male', stock: 1, precio: 3500, imgUrl: './img/IMG_7568.PNG', texto: "Ilustración hecha con portaminas  2B - liquid paper - 20x15cm"},
    {id:13 , nombre: 'orange', stock: 1, precio: 3500, imgUrl: './img/IMG_7569.PNG', texto: "Ilustración hecha con colores - liquid paper - 20x15cm"},
    {id:14 , nombre: 'cute guy', stock: 1, precio: 3500, imgUrl: './img/IMG_7570.PNG', texto: "Ilustración hecha con lapicera negra y roja - liquid paper - 20x15cm"},
    {id:15 , nombre: 'post surgery', stock: 1, precio: 3500, imgUrl: './img/IMG_7571.PNG', texto: "Ilustración hecha con portaminas  2B - colores - 20x15cm"},
    {id:16 , nombre: 'asian', stock: 1, precio: 3500, imgUrl: './img/IMG_7575.PNG', texto: " Ilustración hecha con portaminas  2B - 20x15cm"},
    {id:17 , nombre: 'jared', stock: 1, precio: 3500, imgUrl: './img/IMG_7574.PNG', texto: " Ilustración hecha con portaminas  2B - 20x15cm"},
    {id:18 , nombre: 'jolie', stock: 1, precio: 3500, imgUrl: './img/IMG_7573.PNG', texto: "Ilustración hecha con portaminas  2B - 20x15cm"},
    {id:19 , nombre: 'lonely', stock: 1, precio: 3500, imgUrl: './img/IMG_7572.PNG', texto: "Ilustración hecha con portaminas  2B - 20x15cm"},
    {id:20 , nombre: 'portraits', stock: 1, precio: 3500, imgUrl: './img/IMG_7579.PNG', texto: "Ilustración hecha con portaminas  2B - colores - 20x15cm"},
    {id:21 , nombre: 'sea creatures', stock: 1, precio: 3500, imgUrl: './img/IMG_7578.PNG', texto: "Ilustración hecha con portaminas 2B - marcador punta fina - colores - 20x15cm"},
    {id:22 , nombre: 'girls', stock: 1, precio: 3500, imgUrl: './img/IMG_7577.PNG', texto: " Ilustración hecha con portaminas  2B - 20x15cm"},
    {id:23, nombre: 'bodies and words', stock: 1, precio: 3500, imgUrl: './img/IMG_7576.PNG', texto: " Ilustración hecha con portaminas  2B - 20x15cm"},
    {id:24 , nombre: 'eyes', stock: 1, precio: 3500, imgUrl: './img/IMG_7580.PNG', texto: " Ilustración hecha con portaminas  2B - 20x15cm"},
    
    
    
]



let contenedorProductos = document.getElementById('contenedorProductos');
renderizarProductos()


let inputBusqueda = document.getElementById('busqueda');
let botonBusqueda = document.getElementById('buscar')

botonBusqueda.onclick = () => {
    let productosFiltrados = productos.filter(producto => producto.nombre.includes(inputBusqueda.value));
    renderizarProductos(productosFiltrados)
}


function renderizarProductos(productosFiltrados) {
    let productosARenderizar = productos
    if (productosFiltrados) {
        productosARenderizar = productosFiltrados
    }
    contenedorProductos.innerHTML = ""
    for (const producto of productosARenderizar) {
        contenedorProductos.innerHTML += ''
        let tarjetaProducto = document.createElement('div');
        tarjetaProducto.className = 'producto'
        tarjetaProducto.innerHTML = `
    <h3 class="tituloProducto" >${producto.nombre}</h3>
    <p class="textoProducto">${producto.texto}</p>
    <img class="imagenProducto" src=${producto.imgUrl} >
    <h4 class="precioProducto" >$${producto.precio}</h4>
    <button class="boton" id=${producto.id}>agregar carrito</button>
    `

        contenedorProductos.append(tarjetaProducto)
    }

    let botones = document.getElementsByClassName('boton');
    for (let boton of botones) {
        boton.onclick = (e) => {
            let productoBuscado = productos.find(producto => producto.id == e.target.id);
            let posicionProductoEnCarrito = carritoGuardado.findIndex(producto => producto.id == productoBuscado.id);

            if (posicionProductoEnCarrito != -1) {
                carritoGuardado[posicionProductoEnCarrito].unidades++
                carritoGuardado[posicionProductoEnCarrito].subtotal = carritoGuardado[posicionProductoEnCarrito].precioUnidad * carritoGuardado[posicionProductoEnCarrito].unidades
            } else {
                carritoGuardado.push({ id: productoBuscado.id, nombre: productoBuscado.nombre, precioUnidad: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio });
            }

            localStorage.setItem('carrito', JSON.stringify(carritoGuardado))

            renderizarCarrito()
        }
    }
}

let carrito = document.getElementById('carrito');



let carritoGuardado = [];
if (localStorage.getItem('carrito')) {
    carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
}
renderizarCarrito();







function renderizarCarrito() {
    carrito.innerHTML = `
        <div class= "itemCarrito">
        <p>Articulo</p>
        <p>precio</p>
        <p>unidades</p>
        <p>subtotal</p>
        </div>`

    let total = 0
    for (const item of carritoGuardado) {
        total += item.subtotal
        carrito.innerHTML += `
        <div class= "itemCarrito2">
        <p>${item.nombre}</p>
        <p>${item.precioUnidad}</p>
        <p>${item.unidades}</p>
        <p>${item.subtotal}</p>
        </div>`
    }

    carrito.innerHTML += `
    <div class= "itemCarrito3">
        <h3>total: ${total}</h3>
        
        </div>
    `
}

let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let numero = document.getElementById('numero');
let direccion = document.getElementById('direccion');
let boton = document.getElementById('boton');
let mensaje = document.getElementById('mensaje');


boton.onclick = (e) => {
    e.preventDefault()
    mensaje.innerHTML = `
    <p>Hola ${nombre.value}, tu pedido será envido a ${direccion.value} en la brevedad, 
    ¡Gracias por tu compra!`

    body.append(mensaje)
    
}





