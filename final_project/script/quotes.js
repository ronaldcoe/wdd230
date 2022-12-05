const url = "./script/quotes.json";

function displayQuotes(quotes) {

    let container = document.querySelector(".quotesContainer")

    let div = document.createElement("div")
    let divText = document.createElement("div")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let author = document.createElement("p")
    let img = document.createElement("img")
    p.textContent = quotes.quote
    img.src = quotes.image
    author.textContent = `- ${quotes.author}`
    author.style.textAlign = "left"
    author.style.fontSize = "13px"
    author.style.marginTop = "10px"
    author.style.fontStyle = "Italic"
    divText.appendChild(p)
    divText.appendChild(author)
   
    div.appendChild(img)
    div.appendChild(divText);


    container.appendChild(div)

}

async function getQuotes(url) {
    const response = await fetch(url)

    if(response.ok) {
        const jsObject = await response.json()
        let quotes = jsObject["quotes"]
        console.log(quotes)
        quotes.forEach(displayQuotes);
    }

    

}



getQuotes(url)