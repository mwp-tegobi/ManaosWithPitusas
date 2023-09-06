let productos_en_carrito = localStorage.getItem("productos_en_carrito_ls");
productos_en_carrito = JSON.parse(productos_en_carrito);

console.log(productos_en_carrito)


const container_cart_empty = document.querySelector(".container_cart_empty");
const container_items_cart = document.querySelector(".container_items_cart");
const container_cart_buttons = document.querySelector(".container_cart_buttons");

const item_clear_cart = document.querySelector(".item_clear_cart");
const item_total_price_dolar = document.querySelector(".item_total_price_dolar");
const item_total_price_ars = document.querySelector(".item_total_price_ars");
const item_buynow = document.querySelector(".item_buynow");

let container_delate_item = document.querySelectorAll(".container_delate_item");

function cargar_productos_del_carro() {
    if(productos_en_carrito && productos_en_carrito.length > 0){

        container_cart_empty.classList.add("disabled");
        container_items_cart.classList.remove("disabled");
        container_cart_buttons.classList.remove("disabled");
    
        container_items_cart.innerHTML = "";
        productos_en_carrito.forEach(product =>{
            const div = document.createElement("div");
            div.classList.add("item_team");
            div.innerHTML = `
                <img class="container_img" src="${product.img}">
                <form class="container_size">
                    <p>talla:</p>
                    <select class="select_size_container">
                        <option>s</option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                    </select>
                </form>
                <div class="container_cantidad">
                    <p>cantidad:</p>
                    <span>${product.cantidad}</span>
                </div>
                <div class="container_pricio">
                    <p>precio</p>
                    <span class="precio_usd">${product.price_dolar} usd</span>
                    <span class="precio_ars">${product.price_ars} ars</span>
                    <p class="subtotal_item">subtotal</p>
                    <span class="precio_usd">${product.price_dolar * product.cantidad} usd</span>
                    <span class="precio_ars">${product.price_ars * product.cantidad} ars</span>
                </div>
                <button class="container_delate_item" id="${product.name}"><i class="fa-solid fa-trash-can"></i></button>
            `;
            container_items_cart.append(div);
        })
    }
    else{
        container_cart_empty.classList.remove("disabled");
        container_items_cart.classList.add("disabled");
        container_cart_buttons.classList.add("disabled");
    }
    actualizar_btn_delate_Cart();
    actualizar_total_compra();
}

cargar_productos_del_carro();


function actualizar_btn_delate_Cart() {
    container_delate_item = document.querySelectorAll(".container_delate_item");

    container_delate_item.forEach((el) =>{
        el.addEventListener("click", eliminar_del_carrito)
    })

}

function eliminar_del_carrito(e) {
    const id_BTN = e.currentTarget.id;
    const index = productos_en_carrito.findIndex(product => product.name === id_BTN);

    productos_en_carrito.splice(index,1);

    cargar_productos_del_carro();
    localStorage.setItem("productos_en_carrito_ls", JSON.stringify(productos_en_carrito))

}



item_clear_cart.addEventListener("click", vaciar_carro)
function vaciar_carro() {

    productos_en_carrito.length = 0;
    localStorage.setItem("productos_en_carrito_ls", JSON.stringify(productos_en_carrito));
    cargar_productos_del_carro()
}

function actualizar_total_compra() {
    const totalCalculado_usd = productos_en_carrito.reduce((acc, product) => acc + (product.price_dolar * product.cantidad), 0);
    item_total_price_dolar.innerText = `$ ${totalCalculado_usd} usd`;

    const totalCalculado_ars = productos_en_carrito.reduce((acc, product) => acc + (product.price_ars * product.cantidad), 0);
    item_total_price_ars.innerText = `$ ${totalCalculado_ars} ars`;
}















