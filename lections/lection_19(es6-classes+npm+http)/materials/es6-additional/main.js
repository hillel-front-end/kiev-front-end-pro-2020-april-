// var a = 12;

// function foo() {
//     console.log(a, 'a');
//     let a = 15;
// }

// foo();

// const a 
// let b = 22 ;
// let b = 11;


// const g = 13;

// g = 14;

// const obj = {name: 12};


// let list = {
//     width: '200px',
//     height: '200px',
//     content: ['<li>Item - 1</li>', '<li>Item - 2</li>', '<li>Item - 3</li>'],
//     innerList: {
//         hello: 123
//     },
//     getList() {
//         console.log('Hello');
//     }
// };


// const width = list.width;
// const height = list.height;
//const hello = list.innerList.hello
// const {width:anotherWidth, height, innerList: {hello}, getList} = list;

// console.log(anotherWidth, 'anotherWidth');
// console.log(width, height, 'width, height');
// console.log(innerList, 'innerList');

// width = 14;

// console.log(hello, 'hello');

// console.log(getList(), 'getList');



// let list = {
//     width: '200px',
//     height: '200px',
//     content: ['Item - 1', 'Item - 2', 'Item - 3'],
//     innerList: {
//         hello: 123
//     },
//     getList() {
//         console.log('Hello');
//     }
// };

// function makeTemplate({width, height, content}) {
//     return `
//         <ul style="width:${width}; height:${height}">
//             ${content.map((item, index) => `<li>${item}-${index + 1}</li>`).join('')}
//         </ul>
//     `
// }


// document.body.innerHTML += makeTemplate(list);


// const arr = ['first', 'second', 3, 4, 5, ['innerArray']];

// // let a = arr[0];
// // let b = arr[1];


// const [a, b,,,c, [g]] = arr;

// console.log(a, b, 'a, b');

// console.log(c, 'c');


// console.log(g, 'g');

// ---------- class es6 -----------

/*
function Car() {

}

Car.prototype.drive = () => {}

new Car();
*/


class Car {
    constructor(model) {
        console.log(model, 'Car -- model')
        this.model = model
        this.speed = Math.ceil(Math.random() * (200 - 100) + 100);
        // console.log(this, 'this');
    }

    drive() {
        console.log('Car driving..')
    }
}

// let car = new Car();

// console.log(car, 'car');

// car.drive();

class Mersedes extends Car { // Mersedes.prototype.__proto__ = Car.prototype
    constructor(model) {
        console.log(model, 'model - Mersedes');
        super(model);
    }

    bibi() {
        console.log('bi-bi');
    }

    drive(){
        super.drive();
        console.log('Mersedes driving .... ');
    }
}

const r = new Mersedes();

// r.bibi();

r.drive();

// console.log(r, 'r');
// console.log(new Mersedes(), 'bi-bi');


class Print{
    constructor(models) {
        this.models = models;
    }

    get sortModels() {
        return this.models
                .slice()
                .sort((a, b) => a.speed - b.speed);
    }

    makeList() {
        return `
            <ol>
                ${this.sortModels.map(({model, speed}) => `<li>${model}-${speed}</li>`).join('')}
            </ol>
        `
    }

    render() {
        const {models} = this;

        if (models && Array.isArray(models)) {
            document.body.innerHTML = this.makeList();
        }
    }
}


const models = [
    new Mersedes('e200'),
    new Mersedes('r350'),
    new Mersedes('s500'),
    new Mersedes('gle200'),
];

// console.log(models, 'models');

let print = new Print(models)

print.render();

// console.log(print, 'print');