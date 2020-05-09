// /*
//   Lection 6 - Functions
//     * examp func declaration
//     * examplele func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * simple scopes
//     * arguments
//     * callback
//     * obj + func
// */



// var arr = ["a", "b", "a", "c", "g", "a"];// ["a", "b", "c", "g"]
// var uniq = {};


// for(var i = 0; i < arr.length; i++) { // {a:1, b:1}
//     uniq[arr[i]] = uniq[arr[i]]? ++uniq[arr[i]] : 1;
// }

// console.log(Object.keys(uniq), 'uniq');

// var foo = 123;


// function sum() {
//     var a = 1;
//     b = 2;

//     console.log(a + b, 'a + b');
// }


// sum();

// console.log(b, 'b - from func sum');
// // console.log(a, 'a');
// var i = 0;

// function loop () {
//     for(var i = 0; i < 10; i++) {
//         var b = 123;
//     }
// }

// loop();

// console.log(i);

// for( ; i < 10; i++) {
//     var b = 123;
// }

// if(true) {
//     var z = 12;
// }

// console.log(z, 'z - from if');
// console.log(b, 'b- from for');


// --------------------

// function sum(фармальные аргументы) { 
//     // body
// }

// sum(фактические аргементы)


// function sum(a, b, c) { // var a = 1, b = 2, c = 3;(1)             // 
//  console.log(a + b);   //var a = c, var b  = 5;

//  return a + b + c;
// }

// sum(1,2,3,4,5);
// sum(1,2,3,4,5,6);

// var res1 = sum(1, 2, 3);

// console.log(res1, 'res1');

// var res2 = sum(3, 5);

// console.log(res2, 'res2');


// -------------- arguments ---------


// function sum(a, b) {
// console.log(arguments, 'arg');

//     if (arguments.length > 2) {
//         for(var i = 0, sum = 0; i < arguments.length; i++) {
//             sum += arguments[i];
//         }   
//     } else {
//         sum = a + b;
//     }

// //   return  sum;
// }

// var a = sum(1, 2);

// var b = sum(1, 2, 3, 4, 5, 6, 7, 199, 200);

// sum(1, 2);

// ------------------
// var a = 12;


// function mul(b, c) {
//     //var a;? -> local? 
//     console.log('b, c = ', b, c);
//     a = b * c; // mutation global var a
// }

// function div(b, c) {
//     //var a;? -> local? 
//     var a = b / c;
//     console.log(a, 'a');
// }

// // console.log(a, 'a before call mul');

// // mul(1, 2); dirty 
// div(2, 1);

// console.log(a, 'a after call mul');

// // mul(100, 2);dirty

// div(10, 5);

// console.log(a, 'a after second call mul');

// ------------------------------------

// function declarationFunc() {

// }

// var expressionFunc = function() {

// };

// expressionFunc();

// ----------------------

var toDo = function(callback, a, b) {// callback = link to -> function sum(){}
    var j = callback(a, b);
    console.log(a, 'a in expressionFunc');
};


function sum(a, b) {
    return a + b;
}

function div(a, b) {
    return a / b;
}

function diff(a, b) {
  return a - b; 
}

toDo(sum, 10, 2);

console.log(j, ' j');

toDo(div, 20, 10);


toDo(diff, 20, 10)


