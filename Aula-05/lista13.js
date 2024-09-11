// Definição da classe Estudante
class Estudante {
    constructor(nome, matricula, curso, materias) {
      this.nome = nome;           // Nome completo do estudante
      this.matricula = matricula;  // Número inteiro para a matrícula
      this.curso = curso;          // Curso atual
      this.materias = materias;    // Array com os nomes das matérias
    }
  
    // Método para imprimir os detalhes do estudante
    imprimirDetalhes() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Matrícula: ${this.matricula}`);
      console.log(`Curso: ${this.curso}`);
      console.log(`Matérias: ${this.materias.join(', ')}`);
    }
  }
  
  // Criando um novo objeto da classe Estudante
  const estudante = new Estudante(
    "Mariana Silva",           // Nome
    123456,                    // Matrícula
    "Engenharia de Software",  // Curso
    ["Algoritmos", "Cálculo", "Banco de Dados"] // Matérias
  );
  
  // Imprimindo os detalhes do estudante
  estudante.imprimirDetalhes();
  