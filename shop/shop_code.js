const container_team1 = document.querySelector(".container_team1");
const container_team2 = document.querySelector(".container_team2");

let btn_add_to_cart = document.querySelectorAll(".btn_add_to_cart");
const numero_cart = document.querySelector("#numero_cart");



let products_all = [
    {
        name: "item1",
        id: "1",
        price_dolar:20, 
        price_ars:10000,
        img: "../images/shop/item1.png"
    },
    {
        name: "item2",
        id: "2",
        price_dolar:20, 
        price_ars:10000,
        img: "../images/shop/item2.png"
    },
    {
        name: "item3",
        id: "3",
        price_dolar:20, 
        price_ars:10000,
        img: "../images/shop/item3.png"
    },
    {
        name: "item4",
        id: "4",
        price_dolar:20, 
        price_ars:10000,
        img: "../images/shop/item4.png"
    },
    {
        name: "item5",
        id: "5",
        price_dolar:5, 
        price_ars:2500,
        img: "../images/shop/item5.png"
    },
    {
        name: "item6",
        id: "6",
        price_dolar:5, 
        price_ars:2500,
        img: "../images/shop/item6.png"
    },
    {
        name: "item7",
        id: "7",
        price_dolar:5, 
        price_ars:2500,
        img: "../images/shop/item7.png"
    }
];

function cargarProductos() {
    products_all.forEach(product =>{
        let divItem = document.createElement("li");
        divItem.classList.add("item_team");
        divItem.innerHTML = `
                <img loading="lazy" class="img_person" src="${product.img}">
                <img loading="lazy" class="img_person_izq" src="../images/others/item_izq.png">
                <img loading="lazy" class="img_person_der" src="../images/others/item_der.png">
                <form class="item_size_container">
                    <button type="submit" id="${product.name}" class="btn_add_to_cart">add to car</button>
                </form>
                <div class="cost_item">
                    <p>${product.price_dolar} usd</p>
                    <p>${product.price_ars} ars</p>
                </div>
        `;

        container_team1.append(divItem)
    })
    actualizar_btn_addToCart();
}


function actualizar_btn_addToCart() {
    btn_add_to_cart = document.querySelectorAll(".btn_add_to_cart");

    btn_add_to_cart.forEach((el) =>{
        el.addEventListener("click", agregar_a_carrito)
    })
}

cargarProductos()


let productos_en_carrito;
let productos_en_carritoLocalStorage = localStorage.getItem("productos_en_carrito_ls")


if(productos_en_carritoLocalStorage){
    productos_en_carrito = JSON.parse(productos_en_carritoLocalStorage);
    actualizar_number_cart();
}
else{
    productos_en_carrito = [];
}





function agregar_a_carrito(e) {
    e.preventDefault();
    const id_BTN = e.currentTarget.id;

    const producto_agregado = products_all.find(product => product.name === id_BTN);

    if(productos_en_carrito.some(product => product.name === id_BTN)){
        const index = productos_en_carrito.findIndex(product => product.name === id_BTN)
        productos_en_carrito[index].cantidad++;
    }
    else{
        producto_agregado.cantidad = 1;
        productos_en_carrito.push(producto_agregado)
    }
    actualizar_number_cart();
    localStorage.setItem("productos_en_carrito_ls", JSON.stringify(productos_en_carrito));

    
}

function actualizar_number_cart() {
    let actualizacionCantidad = productos_en_carrito.reduce((acc, product) => acc + product.cantidad, 0);
    numero_cart.innerText = actualizacionCantidad;
}   
    
  






















