document.getElementById("perguntas").innerHTML = "Qual área você gostaria de seguir? Digite Front End ou Back End";


function valida(){
    var resposta = document.getElementById("respostas").value;

    if(resposta == "Back End"){
        console.log(resposta);
        document.getElementById("perguntas").innerHTML = "Gostaria de aprender C# ou Java?";
        limpaCaixa();
    }else if (resposta == "Front End") {
        console.log(resposta);
        limpaCaixa();
        document.getElementById("perguntas").innerHTML = "Gostaria de aprender React ou Vue?";
    }else{
        console.log(resposta)
        limpaCaixa();
    }
    
}

function sair(){
    return;
}

function limpaCaixa(){
    document.getElementById("respostas").value = "";
}





