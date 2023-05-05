var n1 = parseFloat(prompt("Digite o primeiro número:"));
        var n2 = parseFloat(prompt("Digite o segundo número:"));
        var n3 = parseFloat(prompt("Digite o terceiro número:"));

        if(n1 < n2 && n1 < n3)
        {
            document.write("A soma do segundo número, " + n2 + ", com o terceiro número, " + n3 + " é: " + (n2 + n3))
        }
        else if(n2 < n1 && n2 < n3)
        {
            document.write("A soma do primeiro número, " + n1 + ", com o terceiro número, " + n3 + " é: " + (n1 + n3))
        }
        else if(n3 < n1 && n3 < n2)
        {
            document.write("A soma do primeiro número, " + n1 + ", com o segundo número, " + n2 + " é: "  + (n1 + n2))
        }