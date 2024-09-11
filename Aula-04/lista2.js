class Pessoa {
    constructor() {
        this.nome = null;
        this.idade = null;
        this.profissao = null;
        this.salario = null;
    }

    exibetrabalho(nomeEmpresa, tempoTrabalho) {
        console.log(`${this.nome} trabalha na ${nomeEmpresa} há ${tempoTrabalho} anos.`);
    }
}


Thales = new Pessoa()
Thales.nome="Thales"
Thales.exibetrabalho("Orbita Eletricidade", 1);