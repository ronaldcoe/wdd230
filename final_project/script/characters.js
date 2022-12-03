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