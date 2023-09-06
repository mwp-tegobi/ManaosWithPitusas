const iniciar_pagina2 = document.querySelector(".iniciar_pagina");
const body_container2 = document.querySelector(".body_container");

let contador_1_vez_ver = sessionStorage.getItem("contador_1_vez");

if(contador_1_vez_ver == 1){
    iniciar_pagina2.style.display = `none`;
    body_container2.style.overflowY = "visible";
}
else{}