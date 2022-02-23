let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3") //# para informar que é um ID
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let p = document.querySelector("p")
let a = document.querySelector("a")
let input = document.querySelector("#input1")
let timeout

btn3.addEventListener("mousedown", function () {
    console.log("Apertou o botão")
})

btn3.addEventListener("mouseup", function () {
    console.log("Soltou o botão")
})

btn4.addEventListener("dblclick", function () {
    console.log("Clicou duas vezes")
})

btn5.addEventListener("contextmenu", function (e) {
    e.preventDefault()
    console.log("Botão direito")
})

function msg(e) {
    console.log("Clicou no button")
    e.stopPropagation()
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function (event) {
    console.log(event)
})

p.addEventListener("click", function () {
    console.log("Clicou no paragrafo")
})

window.addEventListener("keyup", function (e) {
    if (e.key == 'q') {
        console.log("Você apertou a letra q")
    } /*else if (e.key =="Enter") {
        console.log("Você apertou enter")
    }*/
})

window.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        console.log("Apetou o enter")
    }
})
/*
window.addEventListener("mousemove", function(e){
    console.log("Eixo x: " + e.x)
    console.log("Eixo y: " + e.y)
})
*/

window.addEventListener("scroll", function (e) {
    if (Window.pageYoffset > 100) {
        console.log("Ativou");
    }
})

input.addEventListener("focus", function () {
    console.log("Entrou no input")
})

input.addEventListener("blur", function () {
    console.log("Saiu do input")
})



window.addEventListener("mousemove", function (e) {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
        console.log(e.x)
    }, 500)
})

window.addEventListener("load", function () {
    alert("Assine os nossos termos deuso.")
})

window.addEventListener("beforeunload", function (e) {
    this.event.returnValue = null
})