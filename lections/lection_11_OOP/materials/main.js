

// var obj = {name: 'valera'};

// function foo() {
//  console.log('function foo with this == ', this.name)
// }


// foo.call(obj2);


// var foo = foo.bind(obj2);

// console.log(foo, 'foo');

// foo();
// foo();



// setTimeout(foo.bind(obj), 3000);

// function setTimeout(callback, time) {
//     callback();
// }

// setTimeout(foo.bind(obj), 3000);

// ------------------ OOP ---------------

// var obj = new Object(); //{}

// console.log(obj, 'obj');
// var mass = new Array();


function Animal(name) {
    // console.log(this) // this == dog
    this.name = name;
    this.run = function() {
        console.log('run');
    }
}



var dog = new Animal('sharik'); // 1) create new object
var cat = new Animal('murzik'); 
var aaa = new Animal('hz'); 
// console.log(dog, 'dog');

// Prototype


// console.dir(Animal.prototype, 'Animal'); // {}
// console.log(dog.__proto__, 'dog proto');

// console.log(Animal.prototype == dog.__proto__);


function HTMLElement(tagName) {
    this.tagName = tagName;

    if(tagName == 'a') {
        this.redirect = function() {
            console.log('redirect');
        }
        
        this.goTo = function() {
            
        }
    } else if(tagName == 'img') {
        this.showPicture = function() {
            console.log(' show picture');
        }
    } else if (tagName == 'strong') {
        this.textBolder = function() {
            console.log('show bolder text');
        }
    }

}

console.dir(HTMLElement, 'HTMLElement');

HTMLElement.prototype.render = function() {
    console.log('rendering -->>', this.tagName);
}

var a = new HTMLElement('a');
var img = new HTMLElement('img');



// a.redirect();
// img.showPicture();

console.log(a, 'a');
console.log(img, 'img');

a.render();
img.render();


