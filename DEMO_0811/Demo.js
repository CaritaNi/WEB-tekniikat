/*let button = document.querySelector("button")


button.onclick = buttonClicked
button.onmouseleave = leaveMouse

function leaveMouse(){
    console.log("terve")
}
// tulostaa konsoliin "terve" aina, ku hiiri käy hoveraamassa napin päältä ja liikkuu pois

button.addEventListener("click", buttonClicked)
button.addEventListener("click",toinen)

   function buttonClicked(){
    console.log("jepulis")
    }
    //tulostaa konsoliin "jepulis", kun nappia painetaan.
    */

/*
    function buttonClicked(e){
        e.preventDefault()
        let elem = document.createElement("p")
        elem.textContent = "Uusi elementti"
        document.querySelector("body").appendChild(elem)
        }
    */
/*
let p = document.querySelector("p")

document.querySelector("button").addEventListener("click", buttonPressed)

function buttonPressed(){
    p.setAttribute("style", "color:blue")
}*/
/*
function buttonPressed(){
    p.style.color = "blue"
    p.style.width = "50px"
    p.style.display = "inline"
}*/
/*
let body = document.querySelector("body")

document.querySelector("button").addEventListener("click", buttonPressed)

function buttonPressed(body,p){
    body.style.backgroundColor = "green"
}
let p = document.querySelector("p")

function buttonPressed(){
    p.style.color = "white"
}
*/
/*
let text = document.querySelector("p")

document.querySelector("button").addEventListener("click", buttonPressed)
text.includes("important");

function buttonPressed (){
    text.includes("important", start)
}*/
/*
//e
let table = document.createElement("table")

let rows = [document.createElement("tr"), document.createElement("tr")]
let ths = [document.createElement("th"), document.createElement("th")]
let tds = [document.createElement("td"), document.createElement("td")]

ths[0].textContent = "First Name"
ths[1].textContent = "Last Name"

tds[0].textContent = "John"
tds[1].textContent = "Doe"

rows[0].append(ths[0], ths[1])
rows[1].append(ths[0], ths[1])

table.append(rows[0], rows[1])

document.getElementById("content").appendChild(table)
*//*
//f

let elems = document.querySelectorAll("#content>*")

for (const e of elems) {
    let hr = document.createElement("hr")

    e.parentElement.insertBefore(hr,e)
}
*/


//g
elems = document.querySelectorAll("div>p:first-child")

for (const e of elems){
    let span = document.createElement("span")
    
}