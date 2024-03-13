let botao1 = document.getElementById("b1");
let botao2 = document.getElementById("b2");
let botao3 = document.getElementById("b3");
let botao4 = document.getElementById("b4");
let botao5 = document.getElementById("b5");
let botao6 = document.getElementById("b6");
let botao7 = document.getElementById("b7");
let botao8 = document.getElementById("b8");
let botao9 = document.getElementById("b9");
let soma = document.getElementById("bm");

 
let subtr = document.getElementById("bs");
let div = document.getElementById("bd");
let mult = document.getElementById("bx");
let botao0 = document.getElementById("b0");

let aux = document.getElementById("auxiliar")
let ope = document.getElementById("operador")

botao1.addEventListener("click",function() {teste(this.value);} ) ;
botao2.addEventListener("click",function() {teste(this.value);} ) ;
botao3.addEventListener("click",function() {teste(this.value);} ) ;
botao4.addEventListener("click",function() {teste(this.value);} ) ;
botao5.addEventListener("click",function() {teste(this.value);} ) ;
botao6.addEventListener("click",function() {teste(this.value);} ) ;
botao7.addEventListener("click",function() {teste(this.value);} ) ;
botao8.addEventListener("click",function() {teste(this.value);} ) ;
botao9.addEventListener("click",function() {teste(this.value);} ) ;
botao0.addEventListener("click",function() {teste(this.value);} ) ;

soma.addEventListener("click",function() {a1(this.value);} ) ;
subtr.addEventListener("click",function() {a1(this.value);} ) ;
div.addEventListener("click",function() {a1(this.value);} ) ;
mult.addEventListener("click",function() {a1(this.value);} ) ;

function teste(valor){

    let aux = document.getElementById("mostrador");
    aux.value += valor;
    aux.value = parseFloat(aux.value);
}
//operadores

function operadores(valor){
    let mostra = document.getElementById("auxiliar");
    auxiliador.value = document.getElementById("opwrador");

    mostra.value = 0;

    operadores.value = conteudo;

}