window.onload = function() {



var button = document.querySelectorAll('.button');
var counter = document.querySelector('.counter');

var store = {
    setInStore: function(key, value) {
        localStorage.setItem(key, value);
    },
    getFromStore: function(key) {
        return localStorage.getItem(key);
    }
};

counter.innerHTML = store.getFromStore('counter') || 0;

var click = (function(counter) {
    var counterValue = ++counter.innerHTML;

    store.setInStore('counter', counterValue);

}).bind(null , counter);


button.addEventListener('click', click);

}