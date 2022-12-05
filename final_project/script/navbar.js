let buttonMenu = document.querySelector(".fa-bars")

function showMenu() {
    console.log("button")
    let menu = document.querySelector("ul");
    let style = getComputedStyle(menu)
    if (style.display == "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

buttonMenu.addEventListener("click", showMenu)