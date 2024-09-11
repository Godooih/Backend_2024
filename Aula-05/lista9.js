// Definição da classe Livro
class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.genero = genero;
    }
  
    // Método para calcular a idade da publicação
    idadePublicacao() {
      return new Date().getFullYear() - this.anoPublicacao;
    }
  
    // Método para alterar o gênero do livro
    alterarGenero(novoGenero) {
      this.genero = novoGenero;
    }
  
    // Método para imprimir os detalhes do livro
    imprimirDetalhes() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Ano de Publicação: ${this.anoPublicacao}`);
      console.log(`Gênero: ${this.genero}`);
      console.log(`Idade de Publicação: ${this.idadePublicacao()} anos`);
    }
  }
  
  // Criando um novo objeto da classe Livro
  const livro = new Livro("Dom Quixote", "Miguel de Cervantes", 1605, "Romance");
  
  // Imprimindo os detalhes antes de alterar o gênero
  console.log("Detalhes antes da alteração do gênero:");
  livro.imprimirDetalhes();
  
  // Alterando o gênero para "Aventura"
  livro.alterarGenero("Aventura");
  
  // Imprimindo os detalhes após a alteração
  console.log("\nDetalhes após a alteração do gênero:");
  livro.imprimirDetalhes();
  