class Usuario{
    constructor(){
        this.nome=null;
        this.idade=null;
    }
    exibeinfo(){
        console.log(`Nome ${this.nome}, idade ${this.idade}`);
    }
}
class cliente extends Usuario{
    constructor(){
        super();
               

        this.cargo = null;
    }
    exibeinfocargo(){
        console.log(`Nome ${this.nome}, idade ${this.idade}, cargo ${this.cargo}`);
    }

}


const Thales = new cliente();
Thales.nome="Thales";
Thales.idade = 18;
Thales.cargo= "Orçamentista";

const Giulia = new Usuario();
Giulia.nome = "Giulia";
Giulia.idade = 19;
Giulia.cargo = "Assistente de aula online"

Thales.exibeinfocargo();

Giulia.exibeinfo();