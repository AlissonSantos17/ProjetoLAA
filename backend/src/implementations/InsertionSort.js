async function insertionSort(lista) {
  let atual;
  for(let i = 1; i < lista.length; i++) {
    let j = i - 1;
    atual = lista[i];
    while(j >= 0 && atual < lista[j]) {
      lista[j+1] = lista[j];
      j--;
    }
    lista[j+1] = atual;
  }
  return lista
}

module.exports = insertionSort;