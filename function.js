
const menu = document.querySelector("#menu")
const hamburger = document.querySelector("#hamburger")

/* hamburger.addEventListener("click",()=>{menu.classList.add("flex");}) */

hamburger.addEventListener('click', () => {menu.style.display = 'flex'; });