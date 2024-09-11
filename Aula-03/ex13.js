function verificaPalindromo(palavra) {
    const palavraFormatada = palavra.toLowerCase();
    
    const palavraInvertida = palavraFormatada.split('').reverse().join('');

    return palavraFormatada === palavraInvertida;
}

const palavra = "arara";
const resultado = verificaPalindromo(palavra);
console.log(`A palavra "${palavra}" é um palíndromo? ${resultado}`);
