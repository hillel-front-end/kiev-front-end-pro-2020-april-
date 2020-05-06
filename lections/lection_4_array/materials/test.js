// var data = [1, 2, 3, 4, 5, 6];
// var separeteData  = data.join('_');
// console.log(separeteData, 'separeteData');

// // -----    2 ------------

// document.write('<ul>');
// for(var i = 0; i < data.length; i++) {
//     document.write('<li>' + data[i]  + '</li>' );
// }
// document.write('</ul>');

/*
<ul>
   <li>
     1
   </li>
   <li>
     2
   </li>
   <li>
   6
   </li>
</ul>
// */

// document.write('<ul><li>');
// document.write(data.join('</li><li>'));
// document.write('</li></ul>');
// // ------- 3 -------

var data = [1, 2, 3, 4, 5, 6];

console.log(data, 'data');

var position = Math.ceil(data.length / 2) - 1;
var count = data.length % 2 == 0? 2 : 1;

data.splice(position, count);

console.log(data, 'data');
