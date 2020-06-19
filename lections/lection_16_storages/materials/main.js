console.log('Lection_20');

/*
JSON поддерживает следующие типы данных:

    Объекты { ... }
    Массивы [ ... ]
    Примитивы:
    строки,
    числа,
    логические значения true/false,
    null.

*/


window.onload = function() {


// console.log(localStorage, 'localStorage');

// localStorage.setItem('foo', 123);

// localStorage.setItem('foo', [123, 123, 123]);

// localStorage.setItem('foo', false);
// // console.log(localStorage.getItem('foo'), 'foo');

// var foo = localStorage.getItem('foo');

// console.log(foo, 'foo');

// document.body.innerHTML = typeof foo;

// // -----------------------------------------
// for(var i in localStorage) {
//     console.log(i, localStorage[i]);
// }

// ------------ JSON -------------

var obj = {
    name: 'Valera',
    lastName: 'Ternavsky',
    b: 123,
    c: false,
    d: [123, 132, 123]
};

var objJSONSecond = {
    a: obj,
    b: 123
};


// JSON.parse(objJSONSecond);

var objJSON = {
    "name": "Valera"
};  





var foo = JSON.stringify(obj);

console.log(typeof foo, 'foo');
console.log(foo, 'foo');


// localStorage.setItem('json', foo)


var foo2 = JSON.parse(localStorage.getItem('json'));
console.log(foo2, 'foo2');





