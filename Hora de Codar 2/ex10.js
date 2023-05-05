function inicio(){
    let escolha = parseFloat(prompt("Selecione uma opção: \n 1 = Feminino \n 2 = Masculino"));

    switch(escolha){
        case 1:
        feminino();
        break;
        case 2:
        masculino();
        break;
        default:
        alert("Essa opção não existe!");
        inicio();
    }
   }
   function feminino(){
      let h = parseFloat(prompt("Insira a sua altura:"));
      let resultado = (62.1 * h) - 44.7;
      alert("Esse é o seu peso ideal " + resultado + "kg");
   }
   function masculino(){
      let h = parseFloat(prompt("Insira a sua altura:"));
      let resultado = (72.7 * h) - 58;
      alert("Esse é o seu peso ideal " + resultado + "kg");
   }
    inicio();