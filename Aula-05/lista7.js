class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.genero = genero;
    }
  
    idadePublicacao() {
      return new Date().getFullYear() - this.anoPublicacao;
    }
  }
  

Livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605, "Romance");
  
  //Para acessar a informação da propriedade "clase + ['propriedade']"
  console.log("Título: " + Livro1["titulo"]);
  console.log("Autor: " + Livro1["autor"]);
  console.log("Ano de Publicação: " + Livro1["anoPublicacao"]);
  console.log("Gênero: " + Livro1["genero"]);
  console.log("Idade de Publicação: " + Livro1["idadePublicacao"]() + " anos");
  