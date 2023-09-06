
let productos_en_carrito = localStorage.getItem("productos_en_carrito_ls");
productos_en_carrito = JSON.parse(productos_en_carrito);

const numero_cart = document.querySelector("#numero_cart");

actualizar_number_cart()
console.log(productos_en_carrito)

function actualizar_number_cart() {
    let actualizacionCantidad = productos_en_carrito.reduce((acc, product) => acc + product.cantidad, 0);
    numero_cart.innerText = actualizacionCantidad;
} 


