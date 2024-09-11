
class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.genero = genero;
      this.avaliacao = null; // Inicializa como null
    }
  
    
    idadePublicacao() {
      return new Date().getFullYear() - this.anoPublicacao;
    }
  
    // Método para adicionar uma avaliação
    adicionarAvaliacao(novaAvaliacao) {
      if (this.avaliacao === null) {
        this.avaliacao = novaAvaliacao;
        console.log(`Avaliação adicionada: ${this.avaliacao}`);
      } else {
        console.log("O livro já possui uma avaliação.");
      }
    }
  
    // Método para imprimir detalhes do livro
    exibe_info() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Ano de Publicação: ${this.anoPublicacao}`);
      console.log(`Gênero: ${this.genero}`);
      console.log(`Idade de Publicação: ${this.idadePublicacao()} anos`);
      console.log(`Avaliação: ${this.avaliacao}`);
    }
  }
  
 livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605, "Romance");
  

  livro1.exibe_info();
  
  
  livro1.adicionarAvaliacao(4.5); // Adiciona a avaliação
  livro1.exibe_info(); // Exibe as informações atualizadas
  
  livro1.adicionarAvaliacao(5.0); // Tentativa de adicionar uma nova avaliação, mas já existe
  