let tarjetasDestapadas = 0;

let tarjeta1 = null;
let tarjeta2 = null;


let aciertos = 0;
let cantAciertos = document.getElementById(`contadorAciertos`);

let movimientos = 0;
let cantMovimientos = document.getElementById(`contadorMovimientos`);

let audio_par_correcto = new Audio ('./audios/correcto.mp3');
let audio_par_incorrecto = new Audio ('./audios/fallo.wav');
let audio_win = new Audio ('./audios/win.mp3');
let audio_mezclar = new Audio ('./audios/mezclar.wav');

let tablero = document.querySelector(".container_cards");

// let cards = [`<img src="./tarjetas/1.png">`];

let cards = [];
// let imagenes = [


// ];
let selecciones = [];

var lista = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11];
lista = lista.sort(function() {return Math.random() - 0.5});
console.log(lista)

for (let i = 0; i < 22; i++) {
        cards.push(`

        <div class="cards" id="${i}">
            <div class="front">

            </div>
            <div class="back">

            </div>
        </div>  

    `
    )
    tablero.innerHTML = cards.join(" ");
}

const front_animation = document.querySelectorAll('.front');
const back_animation = document.querySelectorAll('.back');
const cada_Card = document.querySelectorAll('.cards');
const container_info_win = document.querySelector('.text_win');



cada_Card.forEach((elemento_card,index_card,arr) =>{

    elemento_card.addEventListener("click", () => {
        
        if(tarjetasDestapadas == 0){
            let tarjeta1 = elemento_card;
            otratarj1 = elemento_card.id;

            resultado1 = lista[elemento_card.id];
            
            selecciones.push(resultado1);
            
            front_animation.forEach((el_front,ind) =>{
                if(index_card == ind){
                    el_front.parentNode.classList.add("giros");
                    el_front.style.animation = `giro_card 600ms linear forwards`;
                }
            })
            back_animation.forEach((el_back,ind) =>{
                let back_tarjeta = el_back;
                
                if(index_card == ind){
                    back_tarjeta.innerHTML = `<img src="./tarjetas/${resultado1}.png" alt="" class="hola">`;
                    el_back.style.animation = `giro_card_reverse 600ms linear forwards`;
                }
            })
            tarjeta1.disabled = true;
            tarjetasDestapadas++;
        }
        else if (tarjetasDestapadas == 1){
            let tarjeta2 = elemento_card;
            otratarj2 = elemento_card.id;

            if(otratarj1 == otratarj2) {
                tarjetasDestapadas == 1;
            }
            else{
                resultado2 = lista[elemento_card.id];
                selecciones.push(resultado2);
                console.log(selecciones)
                
                front_animation.forEach((el_front,ind) =>{
                    if(index_card == ind){
                        el_front.parentNode.classList.add("giros");
                        el_front.style.animation = `giro_card 600ms linear forwards`;
                    }
                    else{}
                })
                back_animation.forEach((el_back,ind) =>{
                    let back_tarjeta = el_back;
                    
                    if(index_card == ind){
                        back_tarjeta.innerHTML = `<img src="./tarjetas/${resultado2}.png" alt="" class="hola">`;
                        el_back.style.animation = `giro_card_reverse 600ms linear forwards`;
                    }
                    else{}
                })
                tarjetasDestapadas++;
                tarjeta2.disabled = true;
                movimientos++;
                cantMovimientos.innerHTML = `Movimientos: ${movimientos}`;

                if(resultado1 == resultado2){
                    audio_par_correcto.play();
                    audio_par_correcto.volume = 0.5;
                    setTimeout(() => {
                        back_animation.forEach((el_back,ind) =>{
                            if(el_back.childElementCount == 1 && tarjetasDestapadas == 2){
                                el_back.parentNode.classList.add("hide");
                                el_back.parentNode.classList.remove("giros");
                                
                            }
                        })
                    },1000);
                    setTimeout(() => {
                        selecciones = [];
                        tarjetasDestapadas = 0;
                    },1005)
                    
                    aciertos++;
                    cantAciertos.innerHTML = `Aciertos: ${aciertos}`;
                    
                    if(aciertos == 11){
                        setTimeout(() => {
                            container_info_win.classList.remove("hide");
                        },700)
                    }
                }
                else {
                    audio_par_incorrecto.volume = 0.13;
                    audio_par_incorrecto.play();
                    
                    setTimeout(() => {
                        
                        cada_Card.forEach((elemento_card3,index_card3) =>{
                            
                            if(elemento_card3.classList[1] == (`giros`)){
                                front_animation.forEach((el_front,ind) =>{
                                    if(index_card3 == ind){
                                        el_front.style.animation = `giro_card-atras 600ms linear forwards`;
                                    }
                                })
                                back_animation.forEach((el_back,ind) =>{
                                    if(index_card3 == ind){
                                        elemento_card3.classList.add("no_iguales");
                                        el_back.style.animation = `giro_card_reverse-atras 600ms linear forwards`;
                                    }
                                })
                            }
                        })             
                    },1000);
                    
                    setTimeout(() =>{
                        tarjetasDestapadas = 0;

                        cada_Card.forEach((el,ind) =>{
                            if(el.classList[2] == ("no_iguales")){
                                back_animation.forEach((el_back,index) =>{
                                    if(index == ind){
                                        el_back.innerHTML = ` `;
                                        el_back.parentNode.classList.remove("giros");
                                        el_back.parentNode.classList.remove("no_iguales");
                                    }
                                })
                            }
                            el.disabled = false;
                        })
                        selecciones = [];
                    },1601);
                }
            }
        }    

    })
});



let mezclar = document.getElementById(`mezclar-tarjeta`);
mezclar.addEventListener("click", () => {
    
    audio_mezclar.play();
    // setTimeout(() =>{
    //     location.reload();
    // },1000)
    setTimeout(() =>{
        lista = lista.sort(function() {return Math.random() - 0.5});
        console.log(lista);
    },620)
    

    movimientos = 0;
    cantMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    
    tarjetasDestapadas = 0;
    selecciones = [];
    cada_Card.disabled = false;
    
    if(aciertos <= 10){
        aciertos = 0;
        cantAciertos.innerHTML = `Aciertos: ${aciertos}`;
        cada_Card.forEach((elemento_card3,index_card3) =>{
            
            if(elemento_card3.classList[1] == (`hide`)){
                back_animation.forEach((el_back,ind) =>{
                    if(ind == index_card3){
                        el_back.parentNode.classList.remove("hide");
                    }
                });
                setTimeout(() =>{
                    front_animation.forEach((el_front,ind) =>{
                        if(index_card3 == ind){
                            el_front.style.animation = `giro_card-atras 600ms linear forwards`;
                        }
                    })
                    back_animation.forEach((el_back,ind) =>{
                        if(index_card3 == ind){
                            el_back.style.animation = `giro_card_reverse-atras 600ms linear forwards`;
                            setTimeout(() =>{
                                el_back.innerHTML = ` `;
                            },605)
                        }
                    })
                },100);
            }
        })
    }
    else if (aciertos == 11){
        
        container_info_win.classList.add("hide");
        aciertos = 0;
        cantAciertos.innerHTML = `Aciertos: ${aciertos}`;
        setTimeout(() => {
            cada_Card.forEach((elemento_card3,index_card3) =>{
                
                if(elemento_card3.classList[1] == (`hide`)){
                    back_animation.forEach((el_back,ind) =>{
                        if(ind == index_card3){
                            el_back.parentNode.classList.remove("hide");
                        }
                    });
                    setTimeout(() =>{
                        front_animation.forEach((el_front,ind) =>{
                            if(index_card3 == ind){
                                el_front.style.animation = `giro_card-atras 600ms linear forwards`;
                            }
                        })
                        back_animation.forEach((el_back,ind) =>{
                            if(index_card3 == ind){
                                el_back.style.animation = `giro_card_reverse-atras 600ms linear forwards`;
                                setTimeout(() =>{
                                    el_back.innerHTML = ` `;
                                },605)
                            }
                        })
                    },100);
                }
            })
        }, 600);
    }
})       