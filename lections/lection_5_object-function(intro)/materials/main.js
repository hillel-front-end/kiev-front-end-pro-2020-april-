// ======= Object(link type) {} || new Object()  =======

//prim: string, number, boolean, null, undefined
//link: [], {}

var a = 12;
var b = a;

// -----------
var a = [2];
var b = a;

b[0] = 13;

var mouse = {
    color: "blue",
    buttonsCount: 3
};

// var human = {
//     name: 'Valera',
//     age: 25,
//     isMarried: true,
//     children: [
//         {
//             name: 'Pety',
//             age: 12,
//             isMarried: false,
//             children: []
//         },
//         {
//             name: 'Sasha',
//             age: 10,
//             isMarried: false,
//             children: []
//         }
//     ]
// };

// personSecond = ['Valera', 25, true, [{name: 'Pety',}]];


// console.log(personSecond.length, 'length');


// personSecond[1] = 12;

// console.log(personSecond[0], 'personSecond[0]');
// console.log(personSecond[1], 'personSecond[0]');

// console.log(human.age, 'age');
// console.log(human.name, 'name');

// human.age = 12;

// console.log(human.children, 'human');

// for(var i = 0, c = human.children, size = c.length; i < size; i++ ) {
//     console.log(c[i], 'c[i]');
// }

// console.log('----------------------------------');
// console.log(human.age, 'age');

// console.log(human['age'], 'human["age"]');



// var human = {
//     name: 'Valera',
//     age: 25,
//     isMarried: true,
//     children: [
//         {
//             name: 'Pety',
//             age: 12,
//             isMarried: false,
//             children: []
//         },
//         {
//             name: 'Sasha',
//             age: 10,
//             isMarried: false,
//             children: []
//         }
//     ],
//     foo: {
//         name: 'aaa'
//     }
// };

// var key = 'age';
// console.log('----------------------------------');

// key = 'gggg'; // 'children'
// console.log(human['age'], 'human["age"]');
// console.log(human[key], 'key !!!!!!!!'); // human['age']


// // human.foo = '123'; // new key foo with value => '123'

// console.log(human.foo, 'human.foo');
// console.log(human.foo.name, 'human.foo.name');

// ----- in, for..in, Object.keys, Object.values, (__proto__ - key not to use)  ----

// var isKey = 'foo' in human;

// console.log(isKey, 'isKey');

// console.log(!!human.foo);


// for(key in obj) {

// }

// var cat = {
//     name: 'Valera',
//     age: 25
// }

// console.log('------------------FOR - IN ----------------');
// console.log(human, 'human');

// var keys = [];
// var values = [];

// for(var key in human) {
//     keys.push(key);
//     values.push(human[key]);
// }

// console.log(keys, 'keyes');
// console.log(values, 'values');


// console.log(Object.keys(human), 'human - keys');
// console.log(Object.values(human), 'human - values');

// ----  methods: hasOwnProperty(), Object.freeze()(HW) ---- 

//  ---- clone --  
// console.log('------------------ CLONE ----------------');
// var c1 = {            
//     name: 'Pety',
//     age: 12,
//     isMarried: false,
//     children: []
// };
// var c2 = {};

// // c2.name = 'foo';

// for(var i in c1) {
//     c2[i] = c1[i];
// }

// c2.name = 'Sasha';

// console.log(c1, c2, 'c1, c2');


// ======= Functions intro (args, arguments, return)  =======


function c1() {

}

function arrayFiller(size) { // 1- size = 10,  2 - size = 5,  3 - size = 7
    var arr = []; 

    // c1();

    for(var i = 0; i < size; i++) {
        arr[i] = Math.random() * 50;
    }

    return arr;
}

// arrayFiller(10); //1 - 10
// arrayFiller(5); //2 - 5
var arr = arrayFiller(7); //3 - 7


console.log(arr, 'arr');
// alert('Hello');
// prompt();

function getPerson(name, age) {
    var person = {
        name: name,
        age: age
    };

    return person
}

var persons = new Array(5);

for(var i = 0, size = persons.length; i < size; i++) {
    var person = getPerson('abc' + i, i);
    persons[i]  = person;
}

console.log(persons, 'persons');
