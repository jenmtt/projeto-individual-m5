const readlineSync = require("readline-sync"); // Import da biblioteca readline sync.
const propriedade = [] // Cria um array vazio para armazenar as entradas do usuário.
let input = "" // Inicializa a variável de entrada como uma string vazia

function adicionarNaLista(){
    propriedade.push(input); // Adiciona à entrada a lista propriedade
}

while (input != "sair"){ // Laço while que executa enquanto a entrada não for "sair"
    adicionarNaLista()

    input = readlineSync.question("Digite propriedade do CSS: ") // Lê a entrada do usuário
}

console.log(propriedade.sort().join('\n')); // Imprime a lista de propriedades, ordenada e separada por novas linhas.