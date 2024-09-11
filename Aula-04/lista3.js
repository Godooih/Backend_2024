// Classe mãe Automovel
class Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.tipoCombustivel = tipoCombustivel;
        this.quantidadeRodas = quantidadeRodas;
    }
}

// Classe filha Carro
class Carro extends Automovel {
    ligarCarro() {
        console.log(`O carro ${this.modelo} está ligado.`);
    }

    desligarCarro() {
        console.log(`O carro ${this.modelo} está desligado.`);
    }

    abrirVidro() {
        console.log(`O vidro do carro ${this.modelo} está aberto.`);
    }

    descerVidro() {
        console.log(`O vidro do carro ${this.modelo} está fechado.`);
    }
}

// Classe filha Moto
class Moto extends Automovel {
    
}

// Classe filha Caminhao
class Caminhao extends Automovel {
    
}

const meuCarro = new Carro("Vermelho", "Sedan", "Gasolina", 4);
meuCarro.ligarCarro();    
meuCarro.abrirVidro();    
meuCarro.descerVidro();   
meuCarro.desligarCarro(); 

const minhaMoto = new Moto("Preta", "Esportiva", "Gasolina", 2);
const meuCaminhao = new Caminhao("Branco", "Carga", "Diesel", 6);
