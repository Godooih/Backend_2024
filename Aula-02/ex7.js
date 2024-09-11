const readline = require('readline');
//Cria uma interfase de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//pergunta ao usuario

rl.question('Digite algo: ', (answer) => {
    //resposta do usuario
    console.log(`Voce digitou: ${answer}` );

    //fecha a interfase
    rl.close
});
// console.log(readline);