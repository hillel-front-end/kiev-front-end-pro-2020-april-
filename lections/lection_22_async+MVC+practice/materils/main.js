/*

sendAjax + promise
promiseAll

generators // hw
fetch
async - await
-----------
MVC

*/

// try {
//     a
// } catch(e) {
//     console.log(e, 'e');
// }

// const promise = new Promise(function(resolve, reject) {
//     reject(123);
// })

// promise.then((value) => {
//     console.log('resolved', value);
// }, 
// (value) => {
//     console.log('rejected', value);
// });

// console.log(promise, 'promise');


function sendAjax({url, method}) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.addEventListener('load', function({target}){
            const response = JSON.parse(target.response);

            if (target.status == 200) {
                resolve(response);
            } else {
                reject(response);
            }
        });

        xhttp.open(method, url);
        xhttp.send();
    });
}

// sendAjax({
//     url: 'http://localhost:3005/auth',
//     method: 'GET',
// })
// .then(({id}) => sendAjax({url: `http://localhost:3005/google`, method: 'GET'}))
// .then(respFromGoogle => {console.log(respFromGoogle)})
// .then(({id}) => sendAjax({url: `http://localhost:3005/usersById/${id}`, method: 'GET'}))
// .then((users) => console.log(users, 'users'))

// sendAjax({
//     url: `http://localhost:3005/auth`,
//     method: 'GET',
//     success({id}) {

//         sendAjax({
//             url: `http://localhost:3005/google/`,
//             method: 'GET',
//             success(users) {
//                 sendAjax({
//                     url: `http://localhost:3005/usersById/${id}`,
//                     method: 'GET',
//                     success(users) {
//                         console.log(users, 'users')
//                     }
//                 })
//             }
//         })
//     }
// });



// Promise.all([
//     new Promise(resolve => resolve('foo')),
//     new Promise((resolve, reject) => reject('briz')),
//     new Promise(resolve => resolve('freez'))
// ])


// Promise.all([
//     sendAjax({
//         url: `http://localhost:3005/freez`,
//         method: 'GET'
//     }),
//     sendAjax({
//         url: `http://localhost:3005/briz`,
//         method: 'GET'
//     }),
//     sendAjax({
//         url: `http://localhost:3005/foo`,
//         method: 'GET',
//     })
// ])
// .then((data) => {
//     console.log(data, 'data resolved');
// })
// .catch((text) => {
//     console.log('error', text);
// })
// .finally(() => {
//     console.log('finally');
// });


// Генераторы -> hW


// async - await, fetch, axios

// cosole
async function modernSendAjax() {

  const data = await fetch('http://localhost:3005/freez');
  const resp = await data.json();

  console.log(resp , 'res');

}
console.log('before')
modernSendAjax();
console.log('after')

// console.log(1)
// setTimeout(function(){
//     console.log('worked')
// })
// console.log(2)