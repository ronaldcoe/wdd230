let button = document.querySelector(".menu")
let nav = document.querySelector(".nav")
nav.style.display = "none"

function showHideMenu() {
  
 
    if (nav.style.display == "block") {
        nav.style.display = "none"
    }
    else {
        nav.style.display = "block"
    }
}

button.addEventListener("click", showHideMenu)


let lastUpdate = document.lastModified;
document.querySelector('.update').innerHTML = `Last Updated ${lastUpdate}`

let date = new Date()

let dayWeek = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
let month = ["January", "February", "March", "April", "May", "June", "July","August","September",
            "October","November", "December"]

document.querySelector('.date').innerHTML = `${dayWeek[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`



document.querySelector('.copyright').innerHTML = `©️${date.getFullYear()} The Seattle Chamber`