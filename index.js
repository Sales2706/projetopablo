var vectorDireito = window.document.getElementById("vectordireito")
var prova1 = window.document.getElementById("prova1")
var prova2 = window.document.getElementById("prova2")
var prova3 = window.document.getElementById("prova3")
var vectorEsquerdo = window.document.getElementById("vectoresquerdo")

function RolarParaDireita(){
    prova1.style = "display:none"
    prova3.style = "display:flex"
    vectorDireito.style = "display:none"
    vectorEsquerdo.style = "display:flex; margin-top:68%"
}

function RolarParaEsquerda(){
    prova1.style = "display:flex"
    prova3.style = "display:none"
    vectorDireito.style = "display:flex; margin-top:68%"
    vectorEsquerdo.style = "display:none"
}