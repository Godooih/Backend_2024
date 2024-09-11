// Definição da classe Pessoa
class Pessoa {
    constructor(nome, idade, cidade) {
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
    }
  
    // Método para exibir as informações da pessoa
    mostrarInfo() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cidade: ${this.cidade}`);
    }
  }
  
  // Criando a lista de pessoas (array de objetos Pessoa)
  const pessoas = [
    new Pessoa("Ana Clara", 29, "São Paulo"),
    new Pessoa("Lucas Silva", 35, "Rio de Janeiro"),
    new Pessoa("Mariana Costa", 22, "Curitiba"),
    new Pessoa("Roberto Lima", 41, "Belo Horizonte"),
    new Pessoa("Fernanda Souza", 27, "Porto Alegre")
  ];
  
  // Exibindo as informações de todas as pessoas na lista
  pessoas.forEach(pessoa => pessoa.mostrarInfo());
  