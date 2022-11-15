console.log("hello")



const requesURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d7d1614e6f943a1bffbb8b4b6dda000";

const requestBusiness = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5d7d1614e6f943a1bffbb8b4b6dda000";


function displayTopNews(jsObject) {
    let news = jsObject.articles;
    console.log(news)
    
    for (let i = 0; i < 5; i++) {
            let sec = document.querySelector(".top")
            let img = document.createElement("img")
            let link = document.createElement("a")
            let h1 = document.createElement("h1")
            let p = document.createElement("p")
            let div = document.createElement("div")
            div.className = "card";
            img.src = news[i].urlToImage;
            link.href = news[i].url            
            h1.textContent = news[i].title;
            link.appendChild(h1)
            p.textContent = news[i].description;
            link.target = "blank"
            div.appendChild(link)
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
            div.className = "card";
            img.src = news[i].urlToImage;
            link.href = news[i].url            
            h1.textContent = news[i].title;
            link.appendChild(h1)
            p.textContent = news[i].description;
            link.target = "blank"
            div.appendChild(link)
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
getNews(requesURL)
getBusiness(requestBusiness)