class Fruta{
    //Criar construtor
    constructor(){
        this.sabor = "Doce";
        this.nome= "laranja";
        this.cor="Verde";
        this.peso=400;
        this.diasdecolheita=5;
        this.isMadura = null;
    }

    madura(diasdecolheita){
        if(diasdecolheita >= this.diasdecolheita){
            console.log(`A ${this.nome} está madura`);
        }else{
            console.log(`A ${this.nome} ainda não está madura`);
        }
    }
}
const Tangerina = new Fruta();
Tangerina.nome= "Tangerina"
Tangerina.madura(6);