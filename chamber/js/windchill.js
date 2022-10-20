let windSpeed = document.querySelector(".windvalue").textContent;
let temp = document.querySelector(".temp").textContent;
let windChill = document.querySelector(".windchill")


function getWindChill() {
    if (temp < 50 && windSpeed > 4.8) {
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));

        windChill.innerHTML = chill
    } else {
        windChill.textContent = "N/A"
    }
}

getWindChill()