    // } else if(tagName == 'img') {
    //     this.showPicture = function() {
    //         console.log(' show picture');
    //     }
    // } else if (tagName == 'strong') {
    //     this.textBolder = function() {
    //         console.log('show bolder text');
    //     }
    // }

// var prototypeHTMLElement = {
//     a: function() {
//         console.log('aaa')
//     }
// }
    
// var prototypeHTMLAnchor = {
//     redirect: function() {

//     },
//      __proto__: prototypeHTMLElement
// }

// prototypeHTMLElement.__proto__ = prototypeHTMLAnchor; // Error

// console.log(prototypeHTMLElement, 'prototypeHTMLElement');


function HTMLElement() {}


HTMLElement.prototype.render = function() {
    console.log('rendering methods from HTMLElement -->>');
}

function HTMLAnchor(id, className, href) {
    this.id = id;
    this.className = className;
    this.href = href;
}

HTMLAnchor.prototype = Object.create(HTMLElement.prototype); // {__proto__: HTMLElement.prototype}



HTMLAnchor.prototype.redirect = function() {
    console.log('redirect --> ' + this.href);
}

var a1 = new HTMLAnchor('foo', 'foo__container', 'https://github.com/hillel-front-end');
var a2 = new HTMLAnchor('foo-2', 'foo2__container', 'https://foo2.com');

a1.render();
a2.render();

a1.redirect();

// console.log(a1, 'a');
// a2.redirect();