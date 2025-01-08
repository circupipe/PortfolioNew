const menu = document.querySelector("#menu")
const hamburger = document.querySelector("#hamburger")

const cerrar = document.querySelector("#cerrar")

hamburger.addEventListener("click",()=>{
    menu.classList.add("flex");
    menu.classList.remove("none");}) 

cerrar.addEventListener("click",()=>{
    menu.classList.add("none");
    menu.classList.remove("flex");
})