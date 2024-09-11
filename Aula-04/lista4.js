// Classe Cliente
class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }

    pix(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para realizar o Pix de R$${valor.toFixed(2)}.`);
        } else {
            this.saldo -= valor;
            console.log(`Pix de R$${valor.toFixed(2)} realizado com sucesso.`);
        }
    }

    emprestimo(valor) {
        this.saldo += valor;
        console.log(`Empréstimo de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    saque(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para realizar o saque de R$${valor.toFixed(2)}.`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        }
    }

    extrato() {
        console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
}

// Função para interagir com o usuário
function executarOperacoes() {
    const nome = prompt("Digite seu nome:");
    const profissao = prompt("Digite sua profissão:");
    const saldoInicial = parseFloat(prompt("Digite seu saldo inicial:"));

    const cliente = new Cliente(nome, profissao, saldoInicial);

    let opcao = '';
    do {
        opcao = prompt("Escolha uma operação: \n1 - Pix\n2 - Empréstimo\n3 - Saque\n4 - Extrato\n5 - Sair");

        switch (opcao) {
            case '1':
                const valorPix = parseFloat(prompt("Digite o valor do Pix:"));
                cliente.pix(valorPix);
                break;
            case '2':
                const valorEmprestimo = parseFloat(prompt("Digite o valor do Empréstimo:"));
                cliente.emprestimo(valorEmprestimo);
                break;
            case '3':
                const valorSaque = parseFloat(prompt("Digite o valor do Saque:"));
                cliente.saque(valorSaque);
                break;
            case '4':
                cliente.extrato();
                break;
            case '5':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
                break;
        }
    } while (opcao !== '5');
}


executarOperacoes();
