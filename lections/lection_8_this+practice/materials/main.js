// var g = 13;

// function arrayFiller(arr, size) {
// // LE = {arr::[], size: 3, z: undefined, scope: window}
//     if (size == arr.length) {
//         return arr;// базовый
//     }

//     arr[arr.length] = Math.random() * 10;

//     var a = arrayFiller(arr, size); // рекурсивный
//     return a;
// }




// var array = arrayFiller([], 3);;

// // arrayFiller(array, 3);

// console.log(array, 'arry');


// console.log(arr ,'arr');


// function arrayFiller(arr) { // bad
    // for(var i = 0; i < arr.length; i++) {

    //     for(var j = 0; j < arr[i].length; j++) {

    //         if (Array.isArray(arr[i][j])) {

    //             for(var z = 0; z < arr[i][j].length; z++) {
    //                 arr[i][j][z] = Math.random() * 50;
    //             }

    //         } else {
    //             arr[i][j] = Math.random() * 50;
    //         }
        
    //     }
    // }
// }


// var arr = new Array(new Array(4), new Array(3), new Array(new Array(3),  new Array(new Array(new Array(3), new Array(3)), new Array(3))));

// function arrayFiller(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             var a = arrayFiller(arr[i]);
//             console.log(a, 'a');
//         } else {
//             arr[i] = Math.random() * 50;
//         }
//     }   
// }

// arrayFiller(arr);

// console.log(arr);

// ------------------------------ Methods -----------------

// function toDo() {
//     console.log('toDo');
// }

// var obj = {
//     a: 12,
//     b: false,
//     toDo: function() {
//         console.log('c');
//     }
// };

// toDo();// ф-я
// obj.toDo() // метод toDo объекта obj

// var menu = {
//     width: "100px",
//     height: "200px",
//     visible: false,
//     render: function() {

//     }
// }



// ------------------------------ Context -----------------

var render = function () {
    console.log('call render ->  from object --- >', this);
}

var menu = {
    width: "100px",
    height: "200px",
    visible: false,
    render: render
}



render(); // window.render() this == window (90%)

menu.render() // this == menu

// ---------------- practice ---------
function myPush(item) {
    this[this.length] = item + '!!';
}

var mass = [];

mass.myPush = myPush;

mass.myPush('hello world');

console.log(mass, 'mass');

// ----------- chaining ------------------

var obj = {
    m1: function() {
        console.log('m1', this);
        return this;
    },
    m2: function() {
        console.log('m2');
        return this;
    },
    m3: function() {
        console.log('m3');
        return this;
    }
}

var z = obj.m1().m1().m2();

// obj
//    .m2()
//    .m1()
//    .m3();

// obj.m2().m1().m3().m1().m1();