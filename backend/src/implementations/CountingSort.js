async function countingSort(lista) {
  let i, z = 0, count = [];
  let min = Math.min.apply(null, lista);
  let max = Math.max.apply(null, lista);
  for (i = min; i <= max; i++) {
      count[i] = 0;
  }
  for (i=0; i < lista.length; i++) {
      count[lista[i]]++;
  }
  for (i = min; i <= max; i++) {
      while (count[i]-- > 0) {
          lista[z++] = i;
      }
  }
  return lista;
}

module.exports = countingSort