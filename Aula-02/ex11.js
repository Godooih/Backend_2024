const imposto = 0.80;
let salarioB, salarioL;
const readline = require('readline');
//Cria uma interfase de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
    rl.question('Digite seu salario: ', (answer) =>{
        salarioB=answer;
        salarioL = salarioB*imposto;
        console.log("Seu salario liquido vai ser de R$", salarioL);

        rl.close
    })
