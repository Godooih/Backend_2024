// Definição da classe Calculadora
class Calculadora {
    // Método para somar dois números
    soma(a, b) {
      return a + b;
    }
  
    // Método para subtrair o segundo número do primeiro
    subtracao(a, b) {
      return a - b;
    }
  
    // Método para multiplicar dois números
    multiplicacao(a, b) {
      return a * b;
    }
  
    // Método para dividir o primeiro número pelo segundo, tratando divisão por zero
    divisao(a, b) {
      if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
      }
      return a / b;
    }
  
    // Método para calcular a média de um array de números
    calcularMedia(numeros) {
      const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
      return soma / numeros.length;
    }
  }
  
  // Criando uma nova instância da classe Calculadora
  const calculadora = new Calculadora();
  
  // a) Chamando cada método e imprimindo os resultados no console
  console.log("Soma (5 + 3):", calculadora.soma(5, 3));
  console.log("Subtração (10 - 4):", calculadora.subtracao(10, 4));
  console.log("Multiplicação (6 * 7):", calculadora.multiplicacao(6, 7));
  console.log("Divisão (8 / 2):", calculadora.divisao(8, 2));
  console.log("Divisão (8 / 0):", calculadora.divisao(8, 0));  // Tratando divisão por zero
  
  // b) Chamando o método calcularMedia e imprimindo o resultado no console
  const numeros = [10, 20, 30, 40, 50];
  console.log("Média aritmética:", calculadora.calcularMedia(numeros));
  