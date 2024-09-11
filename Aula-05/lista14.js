// Definição da classe Pessoa
class Pessoa {
    constructor(nome, idade, solteiro, hobbies) {
      this.nome = nome;
      this.idade = idade;
      this.solteiro = solteiro;
      this.hobbies = hobbies;
    }
  
    // Método para mostrar informações sobre a pessoa
    mostrarInfo() {
      console.log("Nome: " + this.nome + " (Tipo: " + typeof this.nome + ")");
      console.log("Idade: " + this.idade + " (Tipo: " + typeof this.idade + ")");
      console.log("Solteiro: " + this.solteiro + " (Tipo: " + typeof this.solteiro + ")");
      console.log("Hobbies: " + this.hobbies.join(", ") + " (Tipo: " + typeof this.hobbies + ")");
    }
  }
  
  // Criando um novo objeto da classe Pessoa
 pessoa1 = new Pessoa(
    "Ana Clara",                  // Nome
    29,                           // Idade
    true,                         // Solteiro
    ["leitura", "viagens", "fotografia"] // Hobbies
  );
  
  // Chamando o método para exibir as informações da pessoa
  pessoa1.mostrarInfo();
  