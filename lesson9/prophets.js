const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

function displayProphets(prophets) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let p2 = document.createElement("p");

    h2.textContent = prophets.name + " " + prophets.lastname;
    img.src= prophets.imageurl;
    p.textContent = `Date of birth ${prophets.birthdate}`
    p2.textContent = `Place of birth ${prophets.birthplace}`
    card.appendChild(h2);
    card.appendChild(p)
    card.appendChild(p2)
    card.appendChild(img);

    document.querySelector(".card").appendChild(card)

}
async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject)
        const prophets = jsObject["prophets"]
        prophets.forEach(displayProphets);
    }
}

getProphets(requestURL);

