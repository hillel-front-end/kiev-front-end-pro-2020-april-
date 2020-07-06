/* 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = func(){} -- вызываеися всякий раз когда изменяеться, readyState
 xhttp.readyState - cодержит состояние объекта XMLHttpRequest. Изменяется от 0 до 4:
    0: запрос не инициализирован
    1: установлено соединение с сервером
    2: запрос получен
    3: обработка запроса
    4: запрос завершен и ответ готов
   xhttp.open("GET", "req_url", true);
   xhttp.send();
*/

console.log('hello')
// AJAX

let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//    console.log(xhttp.readyState, 'readyState');

//    if (xhttp.readyState != 4) return

//    console.log(xhttp.responseText, 'responseText');
//    const users = JSON.parse(xhttp.responseText);
//    console.log(users, 'users');
// }

xhttp.addEventListener('load', function({target}){
   const response = JSON.parse(target.response);

   console.log(response, 'response');
});

const maxAge = 14;

xhttp.open("GET", `http://localhost:3005/users/?maxAge=${maxAge}`);
xhttp.send()



