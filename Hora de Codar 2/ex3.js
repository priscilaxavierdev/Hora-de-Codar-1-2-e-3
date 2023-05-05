var n1 = prompt("Digite o primeiro número:")
var n2 = prompt("Digite o segundo número:")
var n3 = prompt("Digite o terceiro número:")

if(n1 > n2 && n1 > n3)
{
    document.write("O primeiro número é o maior.")
}
else if(n2 > n1 && n2 > n3)
{
    document.write("O segundo número é o maior.")
}
else if(n3 > n1 && n3 > n2)
{
    document.write("O terceiro número é o maior")
}