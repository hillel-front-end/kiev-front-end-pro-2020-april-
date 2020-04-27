/* Задача - 1. Создать массив размерностью n, где n вводится с клавиатуры. 
 Заполнить случайными числами в диапазоне -220 ... 435. 
 Вывести в документ числа, которые состоят из двух цифр.
*/ 
var max = 435, min = -220;
// var arr = []; // литерала массива
var arrSize = +prompt();
var arr = new Array(arrSize);
var data = [];

for(var i = 0, size = arr.length; i < size; i++) {
  arr[i] = Math.floor(Math.random() * (max - min) + min);
}

console.log(arr, 'arr before');

for(var j = 0, size = arr.length; j < size; j++) {
    var value = Math.abs(arr[j]);

    if (value >= 10 && value < 100){
        data[data.length] = arr[j];
    }
}

console.log(data, 'data after');




