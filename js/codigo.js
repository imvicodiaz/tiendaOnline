let productos = [
    {id:1 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7565.PNG', texto: "loremmmmmm"},
    {id:2 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7581.PNG', texto: "loremmmmmm"},
    {id:3, nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7582.PNG', texto: "loremmmmmm"},
    {id:4 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7559.PNG', texto: "loremmmmmm"},
    {id:5 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7561.PNG', texto: "loremmmmmm"},
    {id:6 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7563.PNG', texto: "loremmmmmm"},
    {id:7 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7560.PNG', texto: "loremmmmmm"},
    {id:8 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7562.PNG', texto: "loremmmmmm"},
    {id:9 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7566.PNG', texto: "loremmmmmm"},
    {id:10 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7567.PNG', texto: "loremmmmmm"},
    {id:11 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7564.PNG', texto: "loremmmmmm"},
    {id:12 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7568.PNG', texto: "loremmmmmm"},
    {id:13 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7569.PNG', texto: "loremmmmmm"},
    {id:14 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7570.PNG', texto: "loremmmmmm"},
    {id:15 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7571.PNG', texto: "loremmmmmm"},
    {id:16 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7575.PNG', texto: "loremmmmmm"},
    {id:17 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7574.PNG', texto: "loremmmmmm"},
    {id:18 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7573.PNG', texto: "loremmmmmm"},
    {id:19 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7572.PNG', texto: "loremmmmmm"},
    {id:20 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7579.PNG', texto: "loremmmmmm"},
    {id:21 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7578.PNG', texto: "loremmmmmm"},
    {id:22 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7577.PNG', texto: "loremmmmmm"},
    {id:23, nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7576.PNG', texto: "loremmmmmm"},
    {id:24 , nombre: '..', stock: 1, precio: 3500, imgUrl: './img/IMG_7580.PNG', texto: "loremmmmmm"},
    
   
    
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



// let contenedorProductos = document.getElementById('contenedorProductos');
// renderizarProductos()


// let inputBusqueda = document.getElementById('busqueda');
// let botonBusqueda = document.getElementById('buscar')

// botonBusqueda.onclick = () => {
//     let productosFiltrados = productos.filter(producto => producto.nombre.includes(inputBusqueda.value));
//     renderizarProductos(productosFiltrados)
// }


// function renderizarProductos(productosFiltrados){
// let productosARenderizar = productos
// if(productosFiltrados){
//     productosARenderizar = productosFiltrados
// }
// contenedorProductos.innerHTML = ""
// for(const producto of productosARenderizar){
//     contenedorProductos.innerHTML += ''
//     let tarjetaProducto = document.createElement('div');
//     tarjetaProducto.className = 'producto'
//     tarjetaProducto.innerHTML = `
//     <h3 class="tituloProducto" >${producto.nombre}</h3>
//     <img class="imagenProducto" src=${producto.imgUrl} >
//     <h4 class="precioProducto" >$${producto.precio}</h4>
//     <button class="boton" id=${producto.id}>agregar carrito</button>
//     `

//     contenedorProductos.append(tarjetaProducto)
// }
// }

// let botones = document.getElementsByClassName('boton');
// let carrito = document.getElementById('carrito');



// let carritoGuardado = [];
// if(localStorage.getItem('carrito')){
//     carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    
// }

// renderizarCarrito();




// for(let boton of botones){
//     boton.onclick = (e) =>{
//         let productoBuscado = productos.find(producto => producto.id == e.target.id);

//         let posicionProductoEnCarrito = carritoGuardado.findIndex(producto => producto.id == productoBuscado.id);

//         if(posicionProductoEnCarrito != -1){
//             carritoGuardado[posicionProductoEnCarrito].unidades++
//             carritoGuardado[posicionProductoEnCarrito].subtotal = carritoGuardado[posicionProductoEnCarrito].precioUnidad *  carritoGuardado[posicionProductoEnCarrito].unidades
//         }else{
//             carritoGuardado.push({id: productoBuscado.id, nombre: productoBuscado.nombre, precioUnidad: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio});

//         }

        

//         carritoGuardado.push({id: productoBuscado.id, nombre: productoBuscado.nombre, precioUnidad: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio});
//          localStorage.setItem('carrito', JSON.stringify(carritoGuardado))

//          renderizarCarrito()
//     }
// }

// function renderizarCarrito(){
//     carrito.innerHTML =`
//         <div class= "itemCarrito">
//         <p>nombre</p>
//         <p>precioUnidad</p>
//         <p>unidades</p>
//         <p>subtotal</p>
//         </div>`

//         let total = 0
//     for(const item of carritoGuardado){
//         total += item.subtotal
//     carrito.innerHTML +=`
//         <div class= "itemCarrito">
//         <p>${item.nombre}</p>
//         <p>${item.precioUnidad}</p>
//         <p>${item.unidades}</p>
//         <p>${item.subtotal}</p>
//         </div>`
//     }

//     carrito.innerHTML += `
//     <div class= "itemCarrito">
//         <h3>total: ${total}</h3>
        
//         </div>`
    
// }




