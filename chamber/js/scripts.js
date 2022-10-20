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



// Add the title based of the day
let titleEvent = document.querySelector(".title_event")
if (date.getDay() == 1 || date.getDay() == 4) {
    titleEvent.textContent = "Come join us for the chamber meet and greet "
}
else {
    titleEvent.textContent = "Check what's happening in Seattle"
}



// Weather 
function getTime() {
    let today = new Date();
    let time = today.getHours();
    return time
}
function convertToJson(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log('error: ', response);
    }
}

function newSearch(){

    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seattle?unitGroup=us&key=EWQF52DJKF9B9NEMA45J3VZGW&contentType=json`;
    fetch(url).then(convertToJson).then(displayCurrentTemp);
}


function displayCurrentTemp(data) {
    let img = data.days[0].hours[getTime()-1].icon;
    let f = document.querySelector(".temp").innerHTML = data.days[0].hours[getTime()-1].temp;
    let c = Math.ceil((f - 32) * 0.5556);
    
    document.querySelector('.imgweather').src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${img}.png`;

    document.querySelector(".desc").innerHTML = data.days[0].hours[getTime()-1].conditions;
 
    document.querySelector(".temp").innerHTML = c + " ℃";
    document.querySelector(".windvalue").innerHTML = data.days[0].hours[getTime()-1].windspeed;


}

newSearch()

