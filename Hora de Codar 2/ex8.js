var n1 = parseInt(prompt("Digite o primeiro número:"));
var n2 = parseInt(prompt("Digite o segundo número:"));
var n3 = parseInt(prompt("Digite o terceiro número:"));
var n4 = parseInt(prompt("Digite o quarto número:"));   
var conta = n1 + n2 + n3 + n4;
var resultado = (n1 + n2 + n3 + n4)/4; //Os parênteses serve para fazer primeira soma e  depois a divisão

if(n1 > 11 && n1 < 0)
{
    document.write("ERRO")
}
if(n2 > 11 && n2 < 0)
{
    document.write("ERRO")
}
if(n3 > 11 && n3 < 0)
{
    document.write("ERRO")
} 
if(n4 > 11 && n4 < 0)
{
    document.write("ERRO")
}
else if(resultado > 5)
{
    document.write("Você passou no teste! ", resultado)
}
else if(resultado < 4.9)
{
    document.write("Tente novamente ", resultado)
}