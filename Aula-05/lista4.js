// Cria um array vazio chamado clinica
let clinica = [];

// Simula a chegada de três animais diferentes
clinica.push('Cachorro');
clinica.push('Gato');
clinica.push('Coelho');

// Exibe a lista de animais no console
console.log("Lista de animais na clínica (antes das remoções):", clinica);

// Remove os animais da lista um por vez
while (clinica.length > 0) {
  const animalRemovido = clinica.shift(); // Remove o primeiro animal da lista
  console.log(`Animal removido: ${animalRemovido}`);
}

// Exibe o estado final da lista
console.log("Lista de animais na clínica (depois das remoções):", clinica);
