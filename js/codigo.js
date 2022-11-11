let productos = [
    {id:1 , nombre: 'RemeraBasic', stock: 10, precio: 3500, imgUrl: './img2/remeraOversizeRoja.png'},
    {id:2, nombre: 'RemeraBasic Negra', stock: 12, precio: 3500, imgUrl:'./img2/remeraOversizenNegra.png'},
    {id:3, nombre: 'Buzo Oversize Black', stock: 9, precio: 9300, imgUrl: './img2/buzoOversizeNegro.jpeg'},
    {id:4, nombre: 'Buzo Oversize  White', stock: 5, precio: 9300, imgUrl: './img2/buzoOversizeBlanco.jpeg'},
    {id:5, nombre: 'Jean Tiro Alto', stock: 3, precio: 7500, imgUrl: './img2/pantalon.png'}
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
        <p>nombre</p>
        <p>precioUnidad</p>
        <p>unidades</p>
        <p>subtotal</p>
        </div>`

    let total = 0
    for (const item of carritoGuardado) {
        total += item.subtotal
        carrito.innerHTML += `
        <div class= "itemCarrito">
        <p>${item.nombre}</p>
        <p>${item.precioUnidad}</p>
        <p>${item.unidades}</p>
        <p>${item.subtotal}</p>
        </div>`
    }

    carrito.innerHTML += `
    <div class= "itemCarrito">
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




