console.log('hello world');
// ----------------- type number -------------------
a1 = 1;
a2 = 2;

lastName = 123;



another = a1;

// console.log(a);

// a = a1 + a2;
a = a1 - a2;

c = a2 / a1;

d = a2 * a1;

console.log(a, 'a -');
console.log(c, 'c /');
console.log(d, 'd *');

g = 10 % 2;

console.log(g, 'g');


// ----------------- type string -------------------

name = 'Valera';
lanstName = "123-Ternavskiy";

fullName = name + ' 213 ' + lanstName; // 'Valera Ternavskiy'

console.log(fullName)

// ----------- преобразование типов ------------------
// a = '12';
// b = '6';

// result = a + b;
// console.log(result, 'sum');

// result = a * b;
// console.log(result, 'mul');

// result = a - b;
// console.log(result, 'dif');

// result = a / b;
// console.log(result, 'div');

// fullName = name - lanstName;// fullName = 'Valera' - 'Ternavskiy'
// console.log(fullName, 'fullName');// NaN -- Not a Number

a  = '12Abc';
b = '10abc10';

result = parseInt(a); // '123Abc' -> 123

resultSecond = parseInt(b);

console.log(result, 'parseInt(a)');//'abc10' -> NaN

console.log(resultSecond, 'resultSecond');

console.log(parseInt(a) + parseInt(b));

console.log(+a, 'a');

a = '12';
b = '10';

result = +a + (+b); // 12 + 10 

result = 13 + '12'; // '13' + '12' -> '1312' --> преобразовать не явно 
result = 13 * '12'; // --> преобразовать  явно 

result = 13 + parseInt('12');// 13 + (12)  --> преобразовать явно
console.log(result, 'result');

