window.onload = function() {
    var buttons = document.querySelectorAll('.button');

    var store = {
        setInStore: function(key, value) {
            localStorage.setItem(key, value);
        },
        getFromStore: function(key) {
            return localStorage.getItem(key);
        }
    };

    for(var i = 0; i < buttons.length; i++) {
        getParent(buttons[i],'.block')
            .querySelector('.counter').innerHTML = store.getFromStore('counter-' + i);

        buttons[i].addEventListener('click', click.bind(buttons[i], i));
    }

    function click(i) {
        var block  = getParent(this,'.block');
        var counter = block.querySelector('.counter');
        var counterValue = ++counter.innerHTML;
        var data = store.getFromStore('counter') || {};
        data[i] = counterValue
        store.setInStore('counter', JSON.stringify(data)); // counter - 2
    }

    function getParent(node, parentSelector) {
        return node.closest(parentSelector);
    }
}


// buttons[i].addEventListener('click', (function(i) {
//     return function() {
//         console.log(i, 'i');
//         var block  = getParent(this,'.block');
//         var counter = block.querySelector('.counter');
//         var counterValue = ++counter.innerHTML;
//
//         store.setInStore('counter-' + i, counterValue); // counter - 2
//     }
//
// })(i));
