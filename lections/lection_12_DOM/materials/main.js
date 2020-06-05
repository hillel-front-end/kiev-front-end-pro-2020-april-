/*
+ Глобальные обьекты Window, Document
+ setTimeout,  setInterval
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText
*/

// DOM - Document Object Model
// Browser object model

//

window.onload = function() {
    console.dir(document.body, 'document');
    var child = document.body.childNodes;
    var div = document.body.children[0];
    var divSecond = div.children[0];

    this.console.log(divSecond, 'divSecond');
    this.console.log(div, 'div');

    // for(var i = 0, size = child.length; i < size; i++) {
    //     console.dir(child[i], 'child[i]');
    // }

    var tagNamesElements = document.getElementsByTagName('div');
    var tagClassNameElement = document.getElementsByClassName('foo');
    var idElement = document.getElementById('auth');
    var queryElement = document.querySelector('.foo.foo-2'); 
    var queryElements = document.querySelectorAll('.foo');

    // console.log(tagNamesElements, 'tagNamesElements');
    // console.log(tagClassNameElement, 'tagClassNameElement');
    // console.dir(idElement, 'idElement');
    // console.log(queryElement, 'queryElement');
    // console.log(queryElements, 'queryElements');


    var div = document.querySelector('div');
    var divList = document.querySelectorAll('div');

    // console.dir(a.href, 'a');
    // a.className = 'foo';
    // a.className += ' foo2';
    console.log(div.className, 'className');

    // a.classList.add() // add, remove, contain, toggle


    // setTimeout(function() {
    //     div.classList.add('foo');
    // }, 2000);

    // setTimeout(function() {
    //     a.classList.remove('foo')
    // }, 4000)

    // setInterval(function() {
    //     // div.classList.toggle('foo')
    // }, 3000);

    // this.console.log(divList, 'divList');

    // for(var i = 0; i < divList.length; i++) {
    //     divList[i].classList.add('foo');
    // }


    // style 


    // div.style.width = 20 + 'px';

    // setTimeout(function() {
    //     div.style.width = 20 + 'px';
    //     div.style.marginBottom = 10 + 'px';
    // }, 2000)



    var boxes = this.document.querySelectorAll('.box');

    this.console.log(boxes, 'boxes');

    this.console.dir(boxes[0]);

    console.log(window.innerWidth, 'w');
    console.log(window.innerHeight, 'h');

    setInterval(function(){
        for(var i = 0; i < boxes.length; i++) {
            var maxW = window.innerWidth - boxes[i].clientWidth;
            var maxH = window.innerHeight - boxes[i].clientHeight;
            
            boxes[i].style.width = getRandom(0, 500) + 'px';
            boxes[i].style.height = getRandom(0, 500) + 'px';
            boxes[i].style.left = getRandom(0, maxW) + 'px';
            boxes[i].style.top = getRandom(0, maxH) + 'px';
            boxes[i].style.backgroundColor = getRandomColor();

        }
    }, 1000);


    function getRandom(min, max)  {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    function getRandomColor()  {
        return 'rgb(' + getRandom(0, 256) + ', ' + getRandom(0, 256) + ', ' + getRandom(0, 256) + ')';                        //rgb(199, 254, 220)
    }

 };

