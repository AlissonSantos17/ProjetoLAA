async function bubbleSort(lista) {
  for(let j = 0; j < lista.length - 1; j++) {
    for(let i = 0; i < lista.length - 1; i++) {
      if(lista[i] > lista[i + 1]) {
        [lista[i], lista[i+1]] = [lista[i+1], lista[i]]
      }
    }
  }
  return lista
}

module.exports = bubbleSort;