// Definição da classe Pessoa
class Pessoa {
    constructor(nome, idade, solteiro, hobbies, endereco) {
      this.nome = nome;
      this.idade = idade;
      this.solteiro = solteiro;
      this.hobbies = hobbies;
      this.endereco = endereco; // Adicionando a propriedade endereco como um objeto
    }
  
    // Método para mostrar informações sobre a pessoa, incluindo o endereço
    mostrarInfo() {
      console.log("Nome: " + this.nome + " (Tipo: " + typeof this.nome + ")");
      console.log("Idade: " + this.idade + " (Tipo: " + typeof this.idade + ")");
      console.log("Solteiro: " + this.solteiro + " (Tipo: " + typeof this.solteiro + ")");
      console.log("Hobbies: " + this.hobbies.join(", ") + " (Tipo: " + typeof this.hobbies + ")");
      console.log("Endereço: ");
      console.log("  Rua: " + this.endereco.rua + " (Tipo: " + typeof this.endereco.rua + ")");
      console.log("  Cidade: " + this.endereco.cidade + " (Tipo: " + typeof this.endereco.cidade + ")");
      console.log("  Estado: " + this.endereco.estado + " (Tipo: " + typeof this.endereco.estado + ")");
    }
  }
  
  // Criando um objeto endereco
  const endereco = {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
  };
  
  // Criando um novo objeto da classe Pessoa, incluindo o endereço
  const pessoa = new Pessoa(
    "Ana Clara",                  // Nome
    29,                           // Idade
    true,                         // Solteiro
    ["leitura", "viagens", "fotografia"], // Hobbies
    endereco                      // Endereço
  );
  
  // Chamando o método para exibir as informações da pessoa, incluindo o endereço
  pessoa.mostrarInfo();
  