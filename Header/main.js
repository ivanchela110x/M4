let burger = document.getElementById("burger");
let main = document.getElementById("main");
let active = false

/*function activeMenu() {
    active = !active
    if (active) {
        menu.style.right = "0%"
    } else {
        menu.style.right = "-100%"
    }
    
}

burger.addEventListener("click", activeMenu);
*/

function activeMens() {
    active = !active
    if (active) {
        menu.style.top = "100%"
    } else {
        menu.style.top = "-300%"
    }
    
}

burger.addEventListener("click", activeMens);