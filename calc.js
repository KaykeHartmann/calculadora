const prompt = require('prompt-sync')();

menu();
function menu(){

    console.log(
        "O que você deseja fazer?"+
        "\n1- adição"+
        "\n2- subtração"+
        "\n3- multiplicação"+
        "\n4- divisao"+
        "\n5- porcentagem");
       
   }
let opcao = prompt("digite a operação: ");
let numero1 = prompt("digite o primeiro valor: ");
let numero2 = prompt("digite o segundo valor: ");
numero1 = Number(numero1);
numero2 = Number(numero2);
   if(isNaN(numero1) || isNaN(numero2)){
       console.log("digite um valor valido: ");
   }
    switch(opcao){
        case '1':
            
          console.log("O resultado da operação e: " + (numero1 + numero2));
            break;
        case '2':
            
        console.log("O resultado da operação e: " + (numero1 - numero2));
            break;
        case '3':
           
        console.log("O resultado da operação e: " + (numero1 * numero2));
            break;
        case '4':
            
        console.log("O resultado da operação e: " + (numero1 / numero2));
            break;
        case '5':
        
            console.log("O resultado da operação e: " + (numero1/100) *  numero2);
            break;
       
    }
    return;
