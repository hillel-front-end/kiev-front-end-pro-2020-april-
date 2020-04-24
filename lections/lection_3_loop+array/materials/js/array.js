/*
Lection 3 - Array
 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
 * 
 * Практика:
  - min, max (10 - 20),
*/


/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1
  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/

var max = 10, min = 5;
var randomValue = Math.floor(Math.random() * (max - min) + min); // 5 - 9
var randomValue = Math.ceil(Math.random() * (max - min) + min); // 6 - 10
var randomValue = Math.round(Math.random() * (max - min) + min); // 9.5 -> 10, 9.4 -> 9
console.log(randomValue, 'randomValue');

console.log(Math.abs(-5));
console.log(Math.pow(3, 5));

// ---- Array --


// var arr = ['Valera', 'Koly', 'Pety', 'aaa'];

// console.log(arr, 'arr');

// console.log(arr[1], '1');

// console.log(arr.length, 'length');
// console.log(arr[0], '0');
// console.log(arr[arr.length - 1], 'size');

// var arr = [true, 'asdsa', 123, [1,2,3]];
// console.log(arr, 'arr');


// arr.length = 100;

// arr[50] = 'Aaaa';

var data = [];

// data[data.length] = 'valera';
// data[data.length] = 'Pety';
// console.log(data);

var max = 10, min = 5;
var arr = [];
arr.length = 2;
console.log(arr, 'arr');

for(var i = 0, size = arr.length; i <= size; i++) {
  console.log(i, arr.length, 'i, arr.length');
  arr[i] = Math.floor(Math.random() * (max - min) + min);
}

console.log(arr, 'arr');