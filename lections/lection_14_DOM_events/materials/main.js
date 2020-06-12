console.log('Lection_1');
window.onload = function() {
/*
Dom navigation
*/

/*events [ 
    click, 
    mousemove, 
    mouseleave, 
    onmousedown,  
    onmouseup,
    onmouseover, 
    onmouseout,
    onmousemove,
    contextmenu 
]

*/

var block = document.querySelector('.block');
var parents = document.querySelectorAll('div');


// console.dir(div, 'div');

// block.onclick = function() {
//     console.log('click');
// };


// console.log(parents, 'parents');


// for(var i = 0, size = parents.length; i < size; i++) {
//     parents[i].onclick = function() {
//         console.log(this, 'thiss');
//     }
// }

// onmousedown + onmouseup


// function onToDo() {
//     console.log('click');
// }


// block.onclick = onToDo;
// console.log(block, 'block');

// block.onmousedown = function() {
//     console.log('onmousedown event');
// };

// block.onmouseup = function() {
//     console.log('onmouseup event');
// };


// block.onmousemove = function() {
//     console.log('onmousemove');
// }

// block.onmouseenter = function() {
//     console.log('onmouseenter');
//     this.classList.add('target');
// }

// block.onmouseleave = function() {
//     console.log('onmouseleave');
//     this.classList
// }

// function addTargetClass() {
//     this.classList.toggle('target');
// }

// block.onmouseenter = addTargetClass;
// block.onmouseleave = addTargetClass;

// block.oncontextmenu = function() {
//     console.log('oncontextmenu');
// };


// function fitstEvent() {
//     console.log('first event');
// }

// function secondEvent() {
//     console.log('second event');

// }

// var go = document.querySelector('#go');

    // go.onclick = fitstEvent;
    // go.onclick = secondEvent;


//  go.addEventListener('click', function() {
//     console.log(this, 'this');
//  });


    // go.addEventListener('click', fitstEvent);
    // go.addEventListener('click', secondEvent);


    // ------------ event -----------


    function toDo(event) { // event = {} foo = event;
        console.log('toDo', event.type);
        this.innerHTML += 'clientX: '
                       + event.clientX + ' <br />' 
                       + 'clientY: ' + event.clientY + ' <br />'
                       +'pageX: '
                       + event.pageX + ' <br />' 
                       + 'pageY: ' + event.pageY + ' <br />'
                       +'shiftX: '
                       + event.offsetX + ' <br />' 
                       + 'shiftY: ' + event.offsetY + ' <br />';;
    }

    // go.addEventListener('click', toDo);
    // go.addEventListener('contextmenu', toDo);

    // document.querySelector('.parent').addEventListener('click', toDo);
    // clientX\Y, pageX\Y, offsetX\Y

 // -------------------------- Practice ---------------------------------

    var box = document.querySelector('.box');

    // document.addEventListener('mousemove', function(event) {
    //     console.log(event.clientX, 'clientX')
    //     console.log(event.clientY, 'clientY')
    //     var x = event.clientX;
    //     var y = event.clientY;
    //     box.style.top = y + 'px';
    //     box.style.left =  x + 'px';
    // });


    function initDragAndDrop(box) {
        var coords = {
            offsetX: 0,
            offsetY: 0
        };

        var draggable = {
            onDrag: function(event) {
        
                coords.offsetX = event.offsetX;
                coords.offsetY = event.offsetY;

                document.addEventListener('mousemove', this.onMove);
            },
            onMove: function(event) {
                console.log('onMove')
                var x = event.clientX - coords.offsetX;
                var y = event.clientY - coords.offsetY;

                box.style.top = y + 'px';
                box.style.left =  x + 'px';
            },
            onDrop: function() {
                console.log('DROP');
                document.removeEventListener('mousemove', this.onMove);
            }

        };


        box.addEventListener('mousedown', draggable.onDrag.bind(draggable));
        box.addEventListener('mouseup', draggable.onDrop.bind(draggable));

    }

    var boxes = document.querySelectorAll('.box');

    for(var i = 0; i < boxes.length; i++) {
        initDragAndDrop(boxes[i]);
    }

}




