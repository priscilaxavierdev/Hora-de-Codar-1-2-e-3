var n1 = parseFloat(prompt("Digite o primeiro número:"));
var n2 = parseFloat(prompt("Digite o segundo número:"));
var n3 = parseFloat(prompt("Digite o terceiro número:"));
var n4 = parseFloat(prompt("Digite o quarto número:"));
var maior = 0;
document.write("Primeiro valor: " + n1);
if(n1 > n2 && n1 > n3 && n1 > n4)
{
    document.write(" Maior: " + n1 );
}
else if(n2 > n1 && n2 > n3 && n2 > n4)
{
    document.write(" Maior: " + n2);
}
else if(n3 > n1 && n3 > n2 && n3 > n4)
{
    document.write(" Maior: " + n3);
}
else if(n4 > n1 && n4 > n2 && n4 > n3)
{
    document.write(" Maior: " + n4);
}

document.write(" Último valor: " + n4);