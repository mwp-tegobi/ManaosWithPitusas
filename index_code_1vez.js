const iniciar_pagina = document.querySelector(".iniciar_pagina");
const body_container = document.querySelector(".body_container");
body_container.style.overflowY = "hidden";

setTimeout(() =>{
    iniciar_pagina.style.animation = `animation_opacity_inicio_pagina 1s linear forwards`;
    setTimeout(() =>{
        iniciar_pagina.classList.add("display_inicio_pag");
        body_container.style.overflowY = "visible";
    },1010)

    sessionStorage.setItem("contador_1_vez", 1);
},1000)





