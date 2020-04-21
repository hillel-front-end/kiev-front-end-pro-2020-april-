/*
    +
    bool
    typeof
    isNaN()
    logical operators [>,<, >=, <=, ==, ====, !] 
    if else
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){}
*/

// ------- Повторение ----------

a = 12;
b = a;

b = 13;

// sum = '1' + '2';// '12' (1)

a = '1';
b = '2';

sum = +a + parseInt(b);//  (2) 3

// sum = '1' * '2'; // 1 * 2 (3)

a = null;
b = undefined;



/*
  *****************************************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0

   +""    ->  0      (пустая строка - 0)

   +"123" -> 123 (число в строке - число)

   +true\false -> 1\0

   +"abc" -> NaN (при ошибке результат NaN)
   
   +undefined -> NaN

  *****************************************************
*/

// some text 



// ------------- null, undefined ------------

// ------------- comments ----------------

/*
 a = 12;
 b  13;
 res = a + b;
*/

// ------------- typeof -----------------
 a = 13;
 b = '13';

console.log(typeof a, 'typeof a');
console.log(typeof b, 'typeof b');
console.log(typeof undefined, 'undefined');


// ------------ var -----------------

console.log(foo, 'foo');
// foo = undefined;
var foo = 123;


// ------------- smart operation  ----------

// i = 10;

// i = i + 2;
// console.log(i, 'i = i + 2;');

// i += 1; // i = i + 2;
// console.log(i, 'i += 1; ');


// i -= 1;// i = i * 2;

// console.log(i, 'i -= 1; ');
//-----------

// i++;// inc i += 1;
// i--;// dec i -= 1;
a = 10;     

// value = a++;

// console.log(a++, 'a++');

// console.log(a++, 'before inc');
// console.log(a, 'after inc');

// var a1 = ++a;
// console.log(a, 'a -1 ');

// var a2 = a++;

// console.log(a, 'a - 2');

// console.log(++a, 'a'); // 10 => 10 + 1 => 11

// console.log(value, 'a++'); //i += 1;
// a++;
// console.log(a++);   
// console.log(a);
// // a++;
// console.log(a++);
// console.log(a, 'a actual')


console.log(++a, 'a');
console.log(++a, 'a');

step = 2;
i = 0;
console.log(i += step);
// ============ Boolean ===============




/* 
*****************************************************
============= Важно помнить преобразования к Boolean ===============

    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true

*****************************************************
*/


// Boolean [true , false]

var a =  true;
var b = false;

console.log(typeof a, 'a');

console.log(+false, 'false');
console.log(+true, 'true');

console.log(true + '');

console.log(Boolean(1), '1');

// ------------ Operators [||, &&] 

console.log( true || false || false || false);// true
console.log(false || true || false); // true
console.log(false || false); // 


console.log(true && false && true, 'true && false && true');

console.log(true && true && true, 'true && true && true');

// console.log( 1 + 2 - 2);

var truthOne = null, truthTwo = '123', truthTree = false;


// var value = truthOne || truthTwo || truthTree;

// console.log(value, 'value');


// var name = 'Valera';

// name  = name || 'unnamed';

// console.log(name, 'name');


// ------------- Logical operators [>,<, >=, <=, ==, ====, !] -----------------------
 
// a = '10';
// b = 10;

// console.log(a, b, 'a, b');

// console.log(a > b, 'a > b');
// console.log(a < b, 'a < b');
// console.log(a >= b, 'a >= b');
// console.log(a <= b, 'a <= b');
// console.log(a !== b, 'a !== b');
// console.log(a == b, 'a == b');
// console.log(a === b, 'a === b');






// ------------- Conditional -------------

/*
    if (условие) {
        тело условия if
    } 
*/

role = 'user';

if (role == 'admin') { 
    console.log('welcome admin....');
} else {
    console.log('good bay');
}

console.log('after if');


role = 'user';

if (role == 'admin') { // 'user' == 'admin' -> false
    console.log('welcome admin....');
} else if (role == 'user') { // 'user' == 'admin'
    console.log('role == user');
    
    age = +prompt('how old are you?');

    if (age > 18) {;
        console.log('welcome user');
    } else {
        console.log('good bay user');
    }
} else {
    console.log('good bay');
}

console.log('after if - else');






/*
    var conditional;

    if (conditional) {
        при условие (conditional == true) => выполняеится тело if() {}
    } else {
        при условие (conditional == false) => выполняеится тело else {}
    }
*/



/*
    if (условие) {
       тело условия if
    } else if(условие) {
       тело условия else-if
    } else {
        тело условия else
    }

    if (условие) {
        тело условия if
    } else if(условие) {
         тело условия else
    }
*/

 // ============ Loops ===============


 /* 
    while(условие) {
        блок кода
    }
*/


/* 
    do {
        блок кода
    } while(условие)
*/


/* 
 // for(1;2;3){
//     4
// }

1 - зона переменных
2 - зона условия выполнеия\выхода из цикла
3 - зона увеличения счетчика 
4 - зона выполнения тела цикла(если зона 2 == true)

*/