// var obj = {
//     toDo: function() {

//     }
// }


// obj2 = {};

// obj2.toDo = obj.toDo;

// obj2.toDo();


// function foo() {
//     console.log(this, 'window');
// }


// foo();





// call - apply

var personOne = {
    name: 'Valera',

}

var personTwo = {
    name: 'Pety',
}

function getName(decor, foo, isMarried) { // decor = arg[0], foo = arg[1]
    console.log(this, 'this');
    console.log(decor, foo);
    console.log(isMarried, 'isMarried');



    console.log(arguments, 'arguments');

    if (this.name) {
        return this.name + decor;
    }
}


// console.log(personOne, 'personOne');

// personOne.getName = getName;
// console.log(personOne.getName());
// delete personOne.getName

// console.log(getName.call(personOne), 'getName'); // call(context, arg) -> personOne.getName()


getName.call(personTwo, '--user', 123);

//apply 

var arg = ['--user', 123];


arg.push(false)

getName.apply(personTwo, arg);//  ['--user', 123, false];



_map = {
    coordX: 123,
    coordY: 111
}


function getCoords() {
    return {
        X: this.coordX,
        Y: this.coordY
    }
}

// a.f.call(b, 123);

console.log(getCoords.call(_map));


// ----------------- case call, apply ------------



function foo() {
//    console.log(arguments, 'arg');
//    console.log([].slice, 'slice');
//   var slice = [].slice;

// //    console.log(slice.call(arguments), 'slice'); // arguments.slice()
//  var arg = slice.call(arguments);
//  console.log(arg, 'arg');

    var arg = [].slice.apply(arguments);
        arg.pop();

    console.log(arg, 'arg');
}

 
foo(1,2,3,4,5,6, 'gggg');

