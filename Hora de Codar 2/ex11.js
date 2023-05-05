var n1 = parseInt(prompt("Digite um número: "));
var n2 = parseInt(prompt("Digite um número: "));
var operação = parseInt(prompt("Digite o símbolo da operação desejada: \n 1) Adição \n 2) Subtração \n 3) Divisão \n 4) Multiplicação"));
var resultado = resultado;
switch(operação){
    case 1:
    resultado = n1 + n2;
    break;
    case 2:
    resultado = n1 - n2;
    break;
    case 3:
    resultado = n1 / n2;
    break;
    case 4:
    resultado = n1 * n2;
    break;
    default:
    alert("Operação inválida")
}
    alert("O resultado é: " + resultado);