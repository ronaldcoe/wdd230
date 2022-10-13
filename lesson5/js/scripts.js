
let button = document.querySelector(".add")

button.addEventListener("click", ()=> {
    let chapter = document.querySelector("#chapter").value;

    let list = document.querySelector(".list")

    let li = document.createElement("li");
    let del = document.createElement("button");
    del.className = "delete";
    del.textContent = "X"
    li.appendChild(document.createTextNode(chapter));
    document.querySelector("#chapter").value = ""
    li.appendChild(del);
    
    list.appendChild(li)
    
    del.addEventListener("click", ()=> {
        list.removeChild(li)
    })

})




let date = new Date()
console.log(date)

let lastUpdate = document.lastModified;
document.querySelector('.update').innerHTML = `Last Updated ${lastUpdate} | ©️ ${date.getFullYear()} Ronald Coello`