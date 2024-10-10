const body=document.querySelector("body")

const div=document.createElement("div")
body.appendChild(div)
div.style.width="500px"
div.style.height="500px"
div.style.border="1px solid black"

/*

const b1=document.createElement("button")
body.appendChild(b1)
b1.style.width="100px"
b1.style.height="50px"
b1.style.border="1px dashed black"
b1.style.display="block"


const b2=document.createElement("button")
body.appendChild(b2)
b2.style.width="100px"
b2.style.height="50px"
b2.style.border="1px dashed black"
b1.style.display="block"

b1.addEventListener("click", function(){
    div.style.backgroundColor="black"
})

b2.addEventListener("click", function(){
    div.style.backgroundColor="blue"
})


const icolor=document.createElement("input")
icolor.setAttribute("type", "color")
body.appendChild(icolor)

const wybierz=document.createElement("button")
wybierz.addEventListener("click", function(){
div.style.backgroundColor=icolor.value    
})
body.appendChild(wybierz)
wybierz.style.height="50px"
wybierz.style.width="100px"
wybierz.innerHTML="Wybierz kolor"
wybierz.style.background="black"
wybierz.style.color="white"

*/
const tekst=document.createElement("input")
body.appendChild(tekst)

const dodaj=document.createElement("button")
dodaj.innerHTML="dodaj"
body.appendChild(dodaj)

const lista=document.createElement("ul")
div.appendChild(lista)

let x=1

dodaj.addEventListener("click", function(){
        
        let nowyP=document.createElement("li")
        nowyP.innerHTML=tekst.value
        nowyP.setAttribute("id", x)
        lista.appendChild(nowyP)
        let usun=document.createElement("button")
        usun.innerHTML="usun"
        usun.addEventListener("click", function(){
        lista.removeChild(nowyP)
        })
        nowyP.appendChild(usun)
        lista.appendChild(nowyP)
    x++
    console.log(x)
})
