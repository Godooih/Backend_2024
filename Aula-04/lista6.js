// Classe base Produtos
class Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
      this.tipoComunicacao = tipoComunicacao;
      this.consumoEnergia = consumoEnergia;
      this.ligada = false;
      this.temperatura = null;
    }
  
    ligar() {
      if (!this.ligada) {
        this.ligada = true;
        console.log(`${this.nome} está ligada.`);
      } else {
        console.log(`${this.nome} já está ligada.`);
      }
    }
  
    desligar() {
      if (this.ligada) {
        this.ligada = false;
        console.log(`${this.nome} está desligada.`);
      } else {
        console.log(`${this.nome} já está desligada.`);
      }
    }
  
    ajustarTemperatura(setpoint) {
      if (this.ligada) {
        this.temperatura = setpoint;
        console.log(`${this.nome} agora está ajustada para ${this.temperatura}°C.`);
      } else {
        console.log(`${this.nome} precisa estar ligada para ajustar a temperatura.`);
      }
    }
  }
  
  // Classe derivada Fritadeira
  class Fritadeira extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
  }
  
  // Classe derivada Televisao
  class Televisao extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
  }
  
  // Classe derivada ArCondicionado
  class ArCondicionado extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
  }
  
  // Testando a implementação
  
  const minhaFritadeira = new Fritadeira('Fritadeira Airfryer', 10, 350, 'Wi-Fi', 1500);
  const minhaTelevisao = new Televisao('Televisão LG', 5, 2500, 'Bluetooth', 200);
  const meuArCondicionado = new ArCondicionado('Ar-Condicionado Samsung', 2, 3500, 'Infrared', 1800);
  
  // Ligando e ajustando a temperatura dos produtos
  minhaFritadeira.ligar();
  minhaFritadeira.ajustarTemperatura(180);
  minhaFritadeira.desligar();
  
  minhaTelevisao.ligar();
  minhaTelevisao.desligar();
  
  meuArCondicionado.ligar();
  meuArCondicionado.ajustarTemperatura(24);
  meuArCondicionado.desligar();
  