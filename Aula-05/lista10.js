// Definição da classe Livro
class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.genero = genero;
      this.avaliacao = null; // Inicializa a avaliação como null
    }
  
    // Método para calcular a idade da publicação
    idadePublicacao() {
      return new Date().getFullYear() - this.anoPublicacao;
    }
  
    // Método para imprimir os detalhes do livro
    imprimirDetalhes() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Ano de Publicação: ${this.anoPublicacao}`);
      console.log(`Gênero: ${this.genero}`);
      console.log(`Idade de Publicação: ${this.idadePublicacao()} anos`);
      
      // Verifica se a propriedade avaliacao existe antes de exibir
      if (this.avaliacao !== null) {
        console.log(`Avaliação: ${this.avaliacao}`);
      } else {
        console.log("Avaliação: Não disponível");
      }
    }
  
    // Método para excluir a propriedade avaliacao
    excluirAvaliacao() {
      delete this.avaliacao;
    }
  }
  
  // Criando um novo objeto da classe Livro
  const livro = new Livro("Dom Quixote", "Miguel de Cervantes", 1605, "Romance",4.8);
  
  // Exibindo os detalhes do livro antes de excluir a avaliação
  console.log("Detalhes antes de excluir a avaliação:");
  livro.imprimirDetalhes();
  
  // Excluindo a propriedade avaliacao
  livro.excluirAvaliacao();
  
  // Exibindo os detalhes do livro após excluir a avaliação
  console.log("\nDetalhes após excluir a avaliação:");
  livro.imprimirDetalhes();
  