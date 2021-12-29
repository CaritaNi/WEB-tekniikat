//a
let h2 = document.querySelector("h2").textContent =  "Let's manipulate some DOM again!"
   //ensin haetaan querySelectorilla elementti ja sitten tekstisisältö

//b
//let hr = document.createElement("hr")
//h2.parentElement.insertBefore(hr,h2)

//c
let article = document.querySelector("article")
let p1 = article.firstElementChild
let p2 = article.lastElementChild
let temp = p1.textContent
    p1.textContent = p2.textContent
    p2.textContent = temp

//d
let content = document.getElementById("content");
let ul = document.createElement("ul");
content.appendChild(ul);

    for(let i; i < 6; i++){
        let li = document.createElement("li");
        li.textContent = "Number" + i;
        ul.appendChild(li);
    }