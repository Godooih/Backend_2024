const $gasolina = 5.50
let litros, valor
const readline = require('readline');
//Cria uma interfase de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

    rl.question('Digite quantos deseja abastecer: ', (answer) =>{
        litros=answer;
        valor = litros * $gasolina;
        console.log("O valor a ser pago é R$",+ valor);

        rl.close
    })
