const replays_js = document.querySelectorAll(".replays_js");
const videos_items = document.querySelectorAll(".videos_items");
const replays_videos_container = document.querySelector(".replays_videos_container");
const boton_close = document.querySelector(".boton_close");
const body_container3 = document.querySelector(".body_container");


replays_js.forEach((el,ind) =>{
    el.addEventListener("click", ()=>{
        replays_videos_container.classList.toggle("replay_display");
        body_container3.style.overflowY = "hidden";
        
        videos_items.forEach((elVideo,indexVideo) =>{
            if(ind === indexVideo) {
                elVideo.classList.add("videos_items_display");
            }
        })        
    })
})
boton_close.addEventListener("click", ()=>{
    replays_videos_container.classList.toggle("replay_display");
    body_container3.style.overflowY = "visible";
    
    videos_items.forEach((elVideo,indexVideo) =>{
            elVideo.classList.remove("videos_items_display");
            elVideo.pause();
    }) 
})

// ----------------------------------   click en menu responsive   ----------------------------------------------
const menu_responsive = document.querySelector(".menu_responsive");
const menu_responsive_display = document.querySelector(".menu_responsive_display");
const close_menu_responsive = document.querySelector(".close_menu_responsive");

menu_responsive.addEventListener("click", ()=>{
    body_container.style.overflowY = "hidden";
    menu_responsive_display.style.display = "flex";
    
    close_menu_responsive.addEventListener("click", ()=>{
        menu_responsive_display.style.display = "none";
        body_container.style.overflowY = "visible";
    })
})




// ----------------------------------   slider automatico inicio    ----------------------------------------------
const slider_container = document.querySelector(".slider_container")
const slider_items = document.querySelectorAll(".slider_items");

setInterval(() => {
    moveToRight()
}, 6000);

let operacion = 0,
    counter = 0,
    widthImg = 100 / slider_items.length;

function moveToRight() {
    if (counter >= slider_items.length-1) {
        counter = 0;
        operacion = 0;
        slider_container.style.transform = `translate(-${operacion}%)`;
        slider_container.style.transition = "all ease .8s";
        return;
    }
    counter++;
    operacion = operacion + widthImg;
    slider_container.style.transform = `translate(-${operacion}%)`;
    slider_container.style.transition = "all ease .8s";
}  

function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('google_mapsId'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

let productos_en_carrito = localStorage.getItem("productos_en_carrito_ls");
productos_en_carrito = JSON.parse(productos_en_carrito);

const numero_cart = document.querySelector("#numero_cart");

actualizar_number_cart()
console.log(productos_en_carrito)

function actualizar_number_cart() {
    let actualizacionCantidad = productos_en_carrito.reduce((acc, product) => acc + product.cantidad, 0);
    numero_cart.innerText = actualizacionCantidad;
}   








