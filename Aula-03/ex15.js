function calculaPotencia(base, expoente) {
    // Calcula a potência usando o operador de exponenciação (**)
    const resultado = base ** expoente;
    
    // Retorna o resultado
    return resultado;
}

// Exemplo de uso da função
const base = 2;
const expoente = 3;
const resultado = calculaPotencia(base, expoente);

console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);
