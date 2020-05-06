/*
  Lection 4 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
*/


var a = new Array(5);


for (var i = 0, size = a.length; i < size; i++) {
  a[i] = new Array(size);

  for(var j = 0, len = a[i].length; j < len; j++) {
      a[i][j] = Math.floor(Math.random() * 50);
  }
}

console.log(a, 'a');

for (var i = 0, size = a.length; i < size; i++) {
  for(var j = 0, sum = 0, len = a[i].length; j < len; j++) {
    sum += a[i][j];
  }

  if (i == 0) {
    min = sum;
    max = sum;
  }

  if (sum > max) {
     max = sum;
  }

  if (min > sum) {
     min = sum;
  }

  console.log(sum, 'sum');
}

console.log(min, max, 'min, max');
