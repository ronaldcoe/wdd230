const charactersURL = "./script/characters.json";



function displayCharacters(characters) {
   

    let container = document.querySelector(".characterContainer")

    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let img = document.createElement("img")
    function displayName() {

        let chracterInfo = document.querySelector(".characterInfo");
        chracterInfo.textContent = ""
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let p = document.createElement("p")
        h2.textContent = characters.name
        img.src = characters.image
        p.textContent = characters.description
        chracterInfo.appendChild(h2)
        chracterInfo.appendChild(img)
        chracterInfo.appendChild(p)
       
    }
    div.addEventListener("click", displayName)
    h3.textContent = characters.name
    img.src = characters.icon
    div.appendChild(img)
    div.appendChild(h3)    
    container.appendChild(div) 

}


async function getCharacters(url) {
    const response = await fetch(url);

    if (response.ok) {
        const jsObject = await response.json()
        let characters = jsObject["characters"]
        console.log(jsObject)

        characters.forEach(displayCharacters)
        
    }
}




getCharacters(charactersURL)






// Character carousel 

let left = document.querySelector(".fa-circle-arrow-left")
let right = document.querySelector(".fa-circle-arrow-right")


let carousel = document.querySelector(".characterContainer")


function moveLeft() {
    // let carousel = document.querySelector(".characterContainer")
    carousel.scrollBy({top:0, left:-400, behavior:"smooth"})
    console.log("left")
}

function moveRight() {
    // let carousel = document.querySelector(".characterContainer")
    carousel.scrollBy({top:0, left:400, behavior:"smooth"})
}



left.addEventListener("click",  moveLeft)
right.addEventListener("click", moveRight)




let pos = {left:0, x:0} 


const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;

    // Scroll the element
    carousel.style.cursor = 'grabbing';
    carousel.style.userSelect = 'none';
    carousel.scrollLeft = pos.left - dx;
};
const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    carousel.style.cursor = 'grab';
    carousel.style.removeProperty('user-select');
};


const mouseDownHandler = function (e){
    carousel.style.cursor = 'grabbing';
    carousel.style.userSelect = 'none';
    pos = {
        left: carousel.scrollLeft,
        x: e.clientX
    }

    document.addEventListener("mousemove", mouseMoveHandler)
    document.addEventListener("mouseup", mouseUpHandler)
}

carousel.addEventListener("mousedown", mouseDownHandler)
// carousel.removeEventListener("mouseup", mouseUpHandler)


