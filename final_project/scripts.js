console.log("hello")



const requesURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d7d1614e6f943a1bffbb8b4b6dda000";

const requestBusiness = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5d7d1614e6f943a1bffbb8b4b6dda000";

const requestTech = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=5d7d1614e6f943a1bffbb8b4b6dda000";


function displayTopNews(jsObject) {
    let news = jsObject.articles;
    console.log(news)
    
    for (let i = 0; i < 5; i++) {
            let sec = document.querySelector(".top")
            let img = document.createElement("img")
            let link = document.createElement("a")
            let h1 = document.createElement("h1")
            let p = document.createElement("p")
            let span = document.createElement("span")
            let div = document.createElement("div")
            div.className = "card";
            img.src = news[i].urlToImage;
            span.textContent = news[i].source.name
            span.className = `source ${news[i].source.name}`
            link.href = news[i].url            
            h1.textContent = news[i].title;
            link.appendChild(h1)
            p.textContent = news[i].description;
            link.target = "blank"
            div.appendChild(link)
            
            div.appendChild(span)
            news[i].urlToImage != null ? div.appendChild(img) : ""
            news[i].description != null ? div.appendChild(p) : ""
            sec.appendChild(div)
       
    }
}





function displayBusiness(jsObject) {
    let news = jsObject.articles;
    console.log(news)
    
    for (let i = 0; i < 10; i++) {
            let sec = document.querySelector(".business")
            let img = document.createElement("img")
            let link = document.createElement("a")
            let h1 = document.createElement("h1")
            let p = document.createElement("p")
            let div = document.createElement("div")
            let span = document.createElement("span")
            div.className = "card";
            img.src = news[i].urlToImage;
            span.textContent = news[i].source.name
            span.className = `source ${news[i].source.name}`
            link.href = news[i].url            
            h1.textContent = news[i].title;
            link.appendChild(h1)
            p.textContent = news[i].description;
            link.target = "blank"
            div.appendChild(link)
            div.appendChild(span)
            news[i].urlToImage != null ? div.appendChild(img) : ""
            news[i].description != null ? div.appendChild(p) : ""
            sec.appendChild(div)
       
    }
}

function displayTech(jsObject) {
    let news = jsObject.articles;
    console.log(news)
    
    for (let i = 0; i < 10; i++) {
            let sec = document.querySelector(".tech")
            let img = document.createElement("img")
            let link = document.createElement("a")
            let h1 = document.createElement("h1")
            let p = document.createElement("p")
            let div = document.createElement("div")
            let span = document.createElement("span")
            div.className = "card";
            img.src = news[i].urlToImage;
            span.textContent = news[i].source.name
            span.className = `source ${news[i].source.name}`
            link.href = news[i].url            
            h1.textContent = news[i].title;
            link.appendChild(h1)
            p.textContent = news[i].description;
            link.target = "blank"
            div.appendChild(link)
            div.appendChild(span)
            news[i].urlToImage != null ? div.appendChild(img) : ""
            news[i].description != null ? div.appendChild(p) : ""
            sec.appendChild(div)
       
    }
}
async function getNews(requesURL) {
    const response = await fetch(requesURL);

    if (response.ok) {
        const jsObject = await response.json()
        
        displayTopNews(jsObject)

    }
} 
async function getBusiness(requestBusiness) {
    const response = await fetch(requestBusiness);

    if (response.ok) {
        const jsObject = await response.json()
        
        displayBusiness(jsObject)

    }
} 

async function getTech(requestTech) {
    const response = await fetch(requestTech);

    if (response.ok) {
        const jsObject = await response.json()
        
        displayTech(jsObject)

    }
}
getNews(requesURL)
getBusiness(requestBusiness)
getTech(requestTech)