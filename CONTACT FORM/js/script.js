function validarFormulario() 
{
    let quantidadesErros = 0;

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("Pais").value;
    let ddd = document.getElementById("ddd").value;
    let telefone = document.getElementById("telefone").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if (nome.trim().length == 0) {
        formError("nome");
        quantidadesErros++;
    } else {
        ReiniciaBordas("nome");
    }
/************************************************************/ 
    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadesErros++;
    } else {
        ReiniciaBordas("sobrenome");
    }
/************************************************************/ 
    if (email.trim().length == 0) {
        formError("email");
        quantidadesErros++;
    } else {
        ReiniciaBordas("email");
    }
/************************************************************/ 
    if (pais.trim().length == 0) {
        formError("Pais");
        quantidadesErros++;
    } else {
        ReiniciaBordas("Pais");
    }
/************************************************************/ 
    if (ddd.trim().length == 0) {
        formError("ddd");
        quantidadesErros++;
    } else {
        ReiniciaBordas("ddd");
    }
/************************************************************/ 
    if (telefone.trim().length == 0) {
        formError("telefone");
        quantidadesErros++;
    } else {
        ReiniciaBordas("telefone");
    }
/************************************************************/ 
    if (cep.trim().length == 0) {
        formError("cep");
        quantidadesErros++;
    } else {
        ReiniciaBordas("cep");
    }
/************************************************************/ 
    if (rua.trim().length == 0) {
        formError("rua");
        quantidadesErros++;
    } else {
        ReiniciaBordas("rua");
    }
/************************************************************/ 
    if (numero.trim().length == 0) {
        formError("numero");
        quantidadesErros++;
    } else {
        ReiniciaBordas("numero");
    }
/************************************************************/ 
    if (complemento.trim().length == 0) {
        formError("complemento");
        quantidadesErros++;
    } else {
        ReiniciaBordas("complemento");
    }
/************************************************************/ 
    if (bairro.trim().length == 0) {
        formError("bairro");
        quantidadesErros++;
    } else {
        ReiniciaBordas("bairro");
    }
/************************************************************/ 
    if (cidade.trim().length == 0) {
        formError("cidade");
        quantidadesErros++;
    } else {
        ReiniciaBordas("cidade");
    }
/************************************************************/ 
    if (estado.trim().length == 0) {
        formError("estado");
        quantidadesErros++;
    } else {
        ReiniciaBordas("estado");
    }
/************************************************************/ 
    if (quantidadesErros > 0)
    {
        alert("Existem " + quantidadesErros + " erros no formulário!");
        return false;
    }
    else
    {        
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
        return true;
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function ReiniciaBordas(idCampo){
    document.getElementById(idCampo).style.border = "2px solid green";
}

function reiniciaTodasAsBordas(){
    let campos = document.querySelectorAll("input, textarea");

    campos.forEach(function(campo){
        campo.style.border = "";
    });
}
