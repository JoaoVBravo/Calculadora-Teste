@@ -1,30 +1,13 @@
/* MODELO 1: EXEMPLO SIMPLES  
var a = 5
var b = 7
var c = a+b
console.log(c) 
FIM MODELO 1*/
const f = document.getElementById("formulario")

/*MODELO 2: FUNÇÕES
var a = 3
var b = 4
function somar (x,y){
    var c = x+y
    return c
}
f.addEventListener("submit", function(e){
    e.preventDefault();

console.log(somar(a,b))
FIM MODELO 2*/
    const v1 = Number(document.getElementById("num1").value)
    const v2 = Number(document.getElementById("num2").value)

/*MODELO 3: TIPOS DE VARIÁVEIS
var a = 0
let b = 0
const d = 0
    const soma = v1+v2

    document.getElementById("resultado").textContent=soma

function somar (x,y){
    let c = x+y
    return c
}

FIM MODELO 3*/
})