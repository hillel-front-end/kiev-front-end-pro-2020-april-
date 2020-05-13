// function sum(a, b) {
//     if (!(a && b)) {
//         return 'is not defined';
//     }
    
//     // console.log('aaaaa');
//     return a + b;

//     // console.log('Hello');
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2)); // 3



// --------------- hoisting ------------------

// a = undefined
// g = undefined;
/*
function toDo() {
    console.log('--- To Do ---');
}

function foo() {
    // z = undefined;
    //g = undefined
    
    function m() {

    }

    console.log(z, 'z');

    var z = 123;
    var g = function() {
        console.log('----- G ----- ');
    };

    function m() {

    }
}
*/

// foo();
// toDo(12);

// console.log(a, g, z, 'a, g');

// var a = 12;
// var z = {};

// // g(); // g = undefined

// var g = function() {
//     console.log('----- G ----- ');
// };

// g();

// // ---------------

// toDo();

// function toDo(a) {
//     console.log('--- To Do ---', a);
// }

// toDo();

// var z = 12;

// function foo() {
//     // z = undefined;
//     //g = undefined
//     /*
//     function m() {

//     }
//     */


//     var z = 123;
//     console.log(z, 'z');
//     var g = function() {
//         console.log('----- G ----- ');
//     };

//     function m() {

//     }
// }


// // console.log(m, 'm')

// foo();

// console.log(z, 'z');


// ------------------ Global ---------------



function globalTodo() {
   globalY = 14;// globalY => global
}

var globalX = 12;

globalTodo()

console.log(window, 'window'); // Global scope {}

var foo = 123;

// function a() {
//     // [[Scope]] -> window

//     // LE = {b: undefined,z: undefined, m: function(){}, scope: window};

//     var b = 123;

//     // console.log(foo, 'foo Global'); a.LE.scope.window.foo
//     // LE = {b: 123, z: undefined, m: function(){}, scope: window}
//     var z = 111;
//      // LE = {b: 123, z: 111, m: function(){}, scope: window}

//     function m() {

//     }


// }

// a();

// var h = 1; // window.h = 1

// function A() {
//     // A.LE  = {z: undefined, b: undefined, a1: func()}
//     var z = 123;
//     var b = '123';
//     var h;
//     // A.LE  = {z: 123, b: '123', a1: func(), h: undefined, scope: window}

//     function A1() {
//         var h;
//         var z = 111;
//           // A1.LE  = {z: 111, h: scope: A.LE}

//         console.log(z = 1, 'z');
//          // A1.LE  = {z: 1, h: undefined, scope: A.LE}
//         console.log(b = 2, 'b'); // A1.LE.scope.b // A.LE ===  A1.LE.scope


//         h = 132;
//         console.log(h, 'h !!!!!!!!!!! Local  ---FROM A1 --- H');
//     }

//     A1();

//     console.log(h, '!!!!! Local --- From A ---H');
    
//      // A.LE  = {z: 123, b: 2, a1: func(), scope: window}
// }

// A();

// console.log(h, 'h !!!!!!!!!!! GLOBAL SCOPE');


// var obj ={
//     foo: function() {
        
//     }
// }
/// -------------------------------------------------

function counter() {
    var count = 0;
    // LE = {count: 0, scope: window}

    return function() {
        //LE = {scope: LE.Counter}
        console.log(++count);

        //LE = null
    } 

}

var iterator = counter();

counter = null;

console.log(counter, 'counter');

console.log(iterator, 'iterator');

iterator();
iterator();
iterator();
iterator();
iterator(); 

function sum() {
    //LE = {count: 2}
    var count = 2;

    console.log(count, 'count');

      //LE = null
}

sum();

sum();

