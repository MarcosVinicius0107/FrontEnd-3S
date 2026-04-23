function calcular() {

//pegar os valores dos campos
const nome = document.getElementById("nome").value;
const peso = parseFloat(document.getElementById("peso").value);
const altura = parseFloat(document.getElementById("altura").value);

//exibir no console
console.log(nome);
console.log(peso);
console.log(altura);

//verificar se tem campo sem preencher
//dar mensagem se tiver faltando sem preencher
//alert("Preencher todos os campos!");
if(nome.trim().length == 0 || peso.trim().length == 0 || altura.trim().length == 0 ) 
    {
    alert("Preencher todos os campos!");
    return false;
}

// //calcular o imc
// const imc = peso / (altura * altura);

// //exibir o resultado
// const resultado = document.getElementById("resultado");
// resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)}`;
}
