// Definição da classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    // Método para depositar valor na conta
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
    }
  
    // Método para sacar valor da conta, verificando saldo
    sacar(valor) {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente para saque.");
      } else {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
      }
    }
  }
  
  // Objeto Cliente que contém uma conta bancária
  class Cliente {
    constructor(nome, contaBancaria) {
      this.nome = nome;
      this.conta = contaBancaria;
    }
  
    // Método para mostrar o saldo do cliente
    mostrarSaldo() {
      console.log(`Cliente: ${this.nome}, Saldo da Conta: R$${this.conta.saldo}`);
    }
  }
  
  // Criando a conta bancária para o cliente
  const contaBancaria = new ContaBancaria("Ana Clara", 500);
  
  // Criando o objeto cliente e associando a conta bancária
  const cliente = new Cliente("Ana Clara", contaBancaria);
  
  // Realizando operações de depósito e saque
  cliente.conta.depositar(300);  // Depósito de R$300
  cliente.conta.sacar(200);      // Saque de R$200
  cliente.conta.sacar(700);      // Tentativa de saque maior que o saldo
  
  // Mostrando o saldo atualizado do cliente
  cliente.mostrarSaldo();
  