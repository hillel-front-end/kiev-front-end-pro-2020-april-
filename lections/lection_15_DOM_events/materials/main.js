/*
   1. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   2. createElement
   3. append
   4. Fragment
   4. Навесить событие на дин. элем.
   5. cycles event
   6. insertAdjacentHTML // HW
   7. replaceWith(node) // hw
   8. clone // hw
*/


window.onload = function() {

    var div = document.querySelector('div');

    console.dir(div.getAttribute('foo'), 'div');
    div.setAttribute('foo', 1111);

    div.foo = 'key';

    console.log(div.dataset.key, 'key');
    console.log(div.dataset.foo, 'foo');


    // --------------- create Element --------------


    var div = document.createElement('div');
    div.classList.add('container');
    div.innerHTML = 'some text';

    setTimeout(function(){
        // document.body.append(div);
        // document.querySelector('.contacts').append(div);
        // document.querySelector('.contacts').prepend(div);
        document.querySelector('.contacts').before(div);

        setTimeout(function() {
            document.querySelector('.contacts').after(div);
        }, 2000)
    //    var contacts =  document.querySelector('.contacts');
        // document.querySelector('.box').append(contacts);
    }, 2000)
}