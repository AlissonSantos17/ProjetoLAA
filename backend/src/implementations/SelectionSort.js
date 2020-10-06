async function selectionSort(lista) {
  let menor

  for(let i = 0; i < lista.length - 1; i++) {
    menor = i
    for(let j = i + 1; j < lista.length; j++) {
      if(lista[j] < lista[menor]) {
        menor = j
      }
    }
    if(i != menor) {
      [lista[i], lista[menor]] = [lista[menor], lista[i]];
    }
  }
  return lista
}

module.exports = selectionSort;