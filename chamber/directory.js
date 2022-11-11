const requestURL = "https://ronaldcoe.github.io/wdd230/chamber/directory.json";





function changeDisplayDashboard() {
    let directoryContent = document.querySelector("#directory_content")
    let style = getComputedStyle(directoryContent)
    if (style.display == "none") {
        document.querySelector("table").style.display = "none"
        document.querySelector("#directory_content").style.display = "grid"
        document.querySelector(".button_dash").style.backgroundColor = "#abedf8";
        document.querySelector(".button_table").style.backgroundColor = "white"
    }
    

}

function changeDisplayTable() {
    let table = document.querySelector("table")
    let style = getComputedStyle(table)
    if(style.display == "none") {
        document.querySelector("table").style.display= "block";
        document.querySelector("#directory_content").style.display = "none"
        document.querySelector(".button_dash").style.backgroundColor = "white";
        document.querySelector(".button_table").style.backgroundColor = "#abedf8"
    }
}

document.querySelector(".button_dash").addEventListener("click", changeDisplayDashboard)
document.querySelector(".button_table").addEventListener("click", changeDisplayTable)

function displayBusiness(business) {
    let card = document.createElement("section");
    let img = document.createElement("img");
    let address = document.createElement("p")
    let tel = document.createElement("p")
    let web = document.createElement("a")
    
    img.src = business.logo;
    img.alt ="bussines logo"
    address.textContent = business.address
    tel.textContent  =business.phone;
    web.textContent = business.web
    web.href = business.web
    card.appendChild(img)
    card.appendChild(address)
    card.appendChild(tel)
    card.appendChild(web)
    document.querySelector("#directory_content").appendChild(card)
}

function displayBusinessTable(bussiness) {
   
    let tr = document.createElement("tr")
    let tdName = document.createElement("td")
    let tdAddress = document.createElement("td")
    let tdPhone = document.createElement("td")
    let tdWeb = document.createElement("td")
    let web = document.createElement("a")
    web.textContent = bussiness.web
    web.href = bussiness.web



    tdName.textContent = bussiness.name;
    tdAddress.textContent = bussiness.address;
    tdPhone.textContent = bussiness.phone;
    tdWeb.appendChild(web)
    
    tr.appendChild(tdName)
    tr.appendChild(tdAddress)
    tr.appendChild(tdPhone)
    tr.appendChild(tdWeb)
   

    document.querySelector("table").appendChild(tr)
}
async function getDirectory(requestURL) {
    const response = await fetch(requestURL);

    if(response.ok) {
        const jsObject = await response.json();
        console.log(jsObject)
        const directory = jsObject["directory"]
        directory.forEach(displayBusiness);
        directory.forEach(displayBusinessTable);
    }
}



getDirectory(requestURL)