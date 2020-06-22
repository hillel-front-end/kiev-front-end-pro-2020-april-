// var obj = {
//     toDo: function () {
//
//     },
//     toDo2() {
//         console.log('toDo2')
//         console.log(this, 'this');
//         return this;
//     }
// }
//
// obj
//     .toDo2()
//     .toDo();
//

// ---- geetter| setter ---------

var obj2 = {
    house: 14,
    street: 'Obolon',
    get address() {
        return this.house + ' ' + this.street;
    },
    set address(value) {
        var splitAddress = value.split(' ')
        console.log(splitAddress, 'splitAddress');

        this.house = splitAddress[0];
        this.street = splitAddress[1];

    },
    getAddress() {
        return this.house + ' ' + this.street;
    }
};
obj2.house = 255;
obj2.street = 'Fooo';

console.log(obj2.address, 'address');
obj2.address = '15 Obolon';

console.log(obj2.house, 'house')

// console.log(obj2.getAddress(), 'getAddress');
// console.log(obj2._address, '_address');


function Foo() {
    var _foo = 123;

    this.getterFoo =  function() {
        return _foo;
    }
}

// descriptors
/* 
    Object.defineProperty(obj, prop, descriptor)
        obj - Объект, в котором будум настраивать свойство.
        prop - имя настраемого свойства
        descriptor - объект настройки свойства.


    descriptor: {
        value: значение свойства. по умолчанию undefined,
        writable: значение свойства можно менять, если true. По умолчанию false,
        configurable: если true, то свойство можно удалят/менять его в
                       дальнейшем при помощи новых вызовов defineProperty.
                       По умолчанию false,
        enumerable: если true, то свойство просматривается 
                    в цикле for..in и методе Object.keys(). По умолчанию false.,
        get – функция, которая возвращает значение свойства. По умолчанию undefined
        set – функция, которая записывает значение свойства. По умолчанию undefined.
    }

    Запрещено использовать:
    * одновременно get/set и value
    * указывать writable при наличии get/set-функций.
*/



var obj3 = {
    _foo: 'Valera 15',
    name: 'Valera',
    age: 14
};


obj3.age = 27;


Object.defineProperty(obj3, 'foo', {
    // value: '1111',
    // writable: false,
    enumerable: false,
    configurable: false,
    get() {
        // return this.name + ': ' + this.age;
        return this._foo + ' !!!';
    },
    set(value) {
        if (value && value.indexOf('@') < 0) {
            this._foo = value;
        }
    }
})
console.log(obj3, 'obj3');
console.log(obj3.foo, 'foo');

// Object.defineProperty(obj3, 'foo', {
//     value: '1111',
//     writable: true,
//     enumerable: true
// })

// obj3.foo = '2222';

console.log(obj3.foo, 'foo');

console.log(obj3, 'obj3');
obj3.foo = 'Valera 16';

for(var key in obj3) {
    console.log(key, 'key');
}



function Animal(name) {
    var _g = 123;

    Object.defineProperty(this, '_name', {
        value: name,
        writable: false
    })
}

var cat = new Animal('Murzik');


cat._name = 'Valera';

console.log(cat, 'cat');
