// ----------------------------------   click en menu responsive   ----------------------------------------------
const menu_responsive = document.querySelector(".menu_responsive");
const menu_responsive_display = document.querySelector(".menu_responsive_display");
const close_menu_responsive = document.querySelector(".close_menu_responsive");
const body_container = document.querySelector(".body_container");

menu_responsive.addEventListener("click", ()=>{
        body_container.style.overflowY = "hidden";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    menu_responsive_display.style.display = "flex";
    
    close_menu_responsive.addEventListener("click", ()=>{
        menu_responsive_display.style.display = "none";
        body_container.style.overflowY = "visible";
    })
})











