var anoAtual = new Date().getFullYear()
var idade_publicação

class Livro{
    constructor(titulo,autor,ano_publicaçao,genero){
        this.titulo = titulo;
        this.autor = autor;
        this.ano_publicaçao = ano_publicaçao;
        this.genero = genero;
        
    }

    exibe_info(){
        console.log(`O titulo do livro é ${this.titulo}`)
        console.log(`Autor/a é ${this.autor}`)
        console.log(this.ano_publicaçao)
        console.log(this.genero)
        idade_publicação = anoAtual - this.ano_publicaçao
        console.log(`A idade desse livro é ${idade_publicação} anos`)
    }
}

Livro1 = new Livro('Assim que acaba','Collen Hover',2015,'Romance',)
Livro1.exibe_info()


