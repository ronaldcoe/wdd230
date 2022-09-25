let date = new Date()

let lastUpdate = document.lastModified;
document.querySelector('.update').innerHTML = `Last Updated ${lastUpdate}`

document.querySelector('.copyright').innerHTML = `© ${date.getFullYear()} | Ronald Coello |`