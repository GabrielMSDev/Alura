const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const resumo = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(resumo);

verifica();

function verifica(){

    const satisfacao = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

    switch (satisfacao) {
        case "1":
            alert("Muito bom! Continue estudando e você terá muito sucesso.")
            break;

        case "2":
            alert("Ahh que pena... Já tentou aprender outras linguagens?");
            break;

        default:
            alert("Opção incorreta, por favor, recarregue a página e tente novamente!");
            verifica();
            break;
    }
}