// var b = 12

var data = [
    {
        name: 'Valera',
        lastName: 'Ter',
        age: 25,
        isMarried: true
    },
    {
        name: 'Alex',
        lastName: 'Foo',
        age: 16,
        isMarried: true
    },
    {
        name: 'Pety',
        lastName: 'Petrov',
        age: 20,
        isMarried: true
    }
]

for(var i = 0; i < data.length; i++) {
 // body
}


data.forEach(function(item, index) { // item = data[0]
    // console.log(item, index, 'item, index');
    // item = 12;
    // data[i] = 12
    // console.log(this, 'this');

    // data = [];
});


console.log(data, 'data');


// filter, map -> new Array()

// var newData = data.filter(function(item, index) {
//     return item.isMarried;
// });



// var newData = data.filter(function(item, index) {
//     return item.age > 18;
// });

// console.log(newData, 'newData');


// var names = data.map(function(item, index) {
//     return item.name + " "  + item.lastName;
// });

// console.log(names, 'names');

// // some, every -> Boolean


// var some = data.some(function(item) {
//     return item.isMarried;
// });


// var every = data.every(function(item) {
//     return item.isMarried;
// });

// console.log(some, 'some');

// console.log(every, 'every');




// reduce


// ES - 6
// console.log(a, 'start a');

// if (true) {
//     var a = 12;
//     console.log(a, 'in  if');
// }


// console.log(a, 'after a');

// if (true) {
//     let a = 12;
//     console.log(a, 'in  if');
// }


// console.log(a, 'a');

// console.log(a, 'a');

// let a = 12;

// {}

// let a = 13;


// let a = 22; // error
// a = 24;// ok


const b = 123;


// const a = '123';

// b = 2222; // error


// const FULL_NAME 

// const PI = 3.14;


const obj = {
    name: "Valera"
};


// obj = {
//     name: 'Pety'
// }

obj.name = '123';


console.log(obj, 'obj');


// Object.freeze()

const obj2 = Object.freeze({
    name: 'Pety'
});


// arrow  func


// const arrow = (item) => {
//     console.log(arguments, 'arg');
//    return item + 1;
// };


// arrow(123);

// const plusOne = item => item + 1;

// console.log(plusOne(10), 'plusOne');


// function foo() {
//     const arrow = (item) => {
//         console.log(arguments, 'arg');
//         return item + 1;
//     };


//     arrow(123);
// }


// foo('Hello foo');


//  this in arrow func

// const this = window;

const toDo = () => console.log(this, 'this');





// var z = {
//     foo() {
//         // const this = z;

//         const toDo = () => console.log(this, 'this in arrow');

//         toDo();
//     }
// }

// // z.foo();

// toDo.call(z);


const personsName = data
    .filter(person => person.age > 18)
    .map(person => person.name);

    console.log(personsName, 'personsName');



// template string

let styles = {
    width: '100px',
    height: '100px',
    content: 'Hello world'
};

/*
    <div style="width: 100px; height: 100px">hello world</div>
*/
const div = '<div style="width:' + styles.width + '; height:'
                                 + styles.height + '">' + '<span>' 
                                 + styles.content +  '</span>' +'</div>';

console.log(div, 'div');

document.body.innerHTML = div;


const getContent = obj => obj.content;

const templateStr = `<div style="width: ${styles.width}; height: ${styles.height}">
                        <span>${getContent(styles)}</span>
                    </div>`;  


const goods = [
    { name: 'juice', coast: 1, isBougth: false },
    { name: 'cola', coast: 2, isBougth: true },
    { name: 'sprite', coast: 3, isBougth: false },
    { name: 'sprite', coast: 3, isBougth: true },
    { name: 'sprite', coast: 3, isBougth: false },
    { name: 'sprite', coast: 3, isBougth: false },
    { name: 'sprite', coast: 3, isBougth: false }
];


// console.log(goods.map(good => `<div></div>`).join(' '));

// const markup = `
//     <div class="goods">
//         ${
//             goods
//                 .map(good => `<div class="${good.isBougth? 'dissable' : 'ok'}">${good.name}, ${good.coast}</div>`)
//                 .join('')
//         }
//     </div>
// `;


function getMarkup(goods) {
    return `
        <div class="goods">
            ${
                goods
                    .map(good => `<div class="${good.isBougth? 'dissable' : 'ok'}">${good.name}, ${good.coast}</div>`)
                    .join('')
            }
        </div>
    `;
}

console.log(markup, 'markup');

document.body.innerHTML = markup;