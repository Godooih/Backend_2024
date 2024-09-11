// Classe Livros
class Livros {
    constructor(nome, quantidade, preco, autor, edicao) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
      this.autor = autor;
      this.edicao = edicao;
    }
  
    emprestar() {
      if (this.quantidade > 0) {
        this.quantidade -= 1;
        console.log(`O livro "${this.nome}" foi emprestado. Restam ${this.quantidade} cópias.`);
      } else {
        console.log(`Não há mais cópias disponíveis do livro "${this.nome}" para emprestar.`);
      }
    }
  
    devolver() {
      this.quantidade += 1;
      console.log(`O livro "${this.nome}" foi devolvido. Agora há ${this.quantidade} cópias disponíveis.`);
    }
  }
  
  // Testando a implementação
  
  const livro1 = new Livros('O Senhor dos Anéis', 5, 80, 'J.R.R. Tolkien', 3);
  
  // Emprestar e devolver o livro
  livro1.emprestar();
  livro1.emprestar();
  livro1.devolver();
  livro1.emprestar();
  