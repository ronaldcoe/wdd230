const charactersURL = "../script/characters.json";



function displayCharacters(characters) {
   

    let container = document.querySelector(".characterContainer")

    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let img = document.createElement("img")

    div.addEventListener("click", displayName(characters))
    h3.textContent = characters.name
    img.src = characters.icon
    div.appendChild(img)
    div.appendChild(h3)    
    container.appendChild(div) 

}

function displayName(characters) {
    console.log(characters.name)
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