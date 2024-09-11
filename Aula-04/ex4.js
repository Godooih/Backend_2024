class Animal{
    constructor(){
        this.nome=null;
        this.idade=null;
    }


    fazerSom(){
        console.log(`${this.nome} faz um som.`);
    }
    }


    class Cachorro extends Animal {
        constructor() {
            super();
            this.raça = null;
            // Chama o construtor da classe base
        }
            // Método sobrescrito
        fazerSom() {
          console.log(`${this.nome} late.`);
        }
        // Método adicional
        exibirInfo() {
          console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raça}`);
        }
}
const Rei = new Cachorro();
Rei.nome = "Rei";
Rei.idade = "6";
Rei.raça = "Pastor Alemão"
Rei.exibirInfo();

