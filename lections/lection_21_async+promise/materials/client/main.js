window.onload  = function() {
   /*
    1)Async,
    2)Promise (catch) (callback hell)
    3)PromiseAll
    4)Practice
    5)async-await, generators?
// */
// const collection = document.getElementsByClassName('foo');

// console.log(collection, 'collection');



// // [].slice  == Array.prototype.slice
// const newCollection = Array.prototype.slice.call(collection);
// console.log(newCollection);

// ------------------- async -------------------




// setTimeout(function(){
//    console.log('sendAajx');
// }, 0);

// renderHeader(); 

// renderHeaderMenu();

// for(var i = 0; i < 1000; i++) {
//    console.log('i --->', i);
// }


// function sendAjax({url, method, success, data}) {
//    const xhttp = new XMLHttpRequest();

//    xhttp.addEventListener('load', function({target}){
//        const response = JSON.parse(target.response);
//        success(response);
//    });


//    xhttp.open(method, url);
//    xhttp.send(JSON.stringify(data));
// }

// setTimeout(function(){
//    console.log('hello');
// }, 4000);

// console.log('1')

// setTimeout(function(){
//    for(var i = 0; i < 1000; i++) {
//       console.log('HARD ACTION');
//    }
// }, 0);

// console.log('2')


// function renderHeader() {
//    renderHeaderMenu();
//    console.log('renderHeader');
// }

// function renderHeaderMenu() {
//    console.log('renderHeaderMenu');
// }

// function b() {
//    renderHeader()
// }

// -------------- callback hell -----------------
// sendAjax({
//    url: `http://google-store/user-auth`,
//    method: 'POST',
//    data: requestPayload,
//    success(id) {
//       if (id) {
//          sendAjax({
//             url: `http://google-store/get-messages`,
//             method: 'POST',
//             data: id,
//             success(messgaes) {
//                const ids = messgaes.map(item => item.id);

//                sendAjax({
//                   url: `http://google-store/get-avatars`,
//                   method: 'POST',
//                   data: ids,
//                   success(urlAvatars) {
//                      console.log(urlAvatars, 'urlAvatars');

//                      sendAjax({
//                         url: `http://google-store/get-friends`,
//                         method: 'POST',
//                         data: ids,
//                         success(friends) {
//                            console.log(friends, 'friends');

//                            //  renderFriends()
//                         }
//                      });
//                   }
//                });
//             }
//          });
//       } else {

//          sendAjax({
//             url: `http://facebook/get-messages`,
//             method: 'POST',
//             data: id,
//             success(messgaes) {
//                const ids = messgaes.map(item => item.id);

//                sendAjax({
//                   url: `http://facebook/get-avatars`,
//                   method: 'POST',
//                   data: ids,
//                   success(urlAvatars) {
//                      console.log(urlAvatars, 'urlAvatars');

//                      sendAjax({
//                         url: `http://facebook/get-friends`,
//                         method: 'POST',
//                         data: ids,
//                         success(friends) {
//                            console.log(friends, 'friends');

//                            //  renderFriends()
//                         }
//                      });
//                   }
//                });
//             }
//          });
//       }
//    }
// });




// ------------------- PROMISE -------------------
function random() {
   return Math.ceil(Math.random() * 100);
}
function sendAjax(text) {
   console.log(`send  to ${text}`);
}

const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      if (true) {
         resolve('gresolveoogle-message');
      } else {
         reject('facebook-auth');
      }

      console.log(promise, 'promise');

   }, 1000);
});



promise
   .then((url) => {
      console.log('resolve --> then - 1');
      //  throw Error('Errrrooorr'); Promise.reject()
      // throw Error('Errrrooorr');
      // return Promise.reject();
   }, 
   (url) => {
      console.log('reject --- then - 1');
   })

   .then((a) => {
      console.log('resolve --- then - 2', a);

      return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log('sendin ajax....')
            
            const response = 123;

            reject(response)
   
         }, 5000);
      })
   },
   (b) => {
      console.log('reject --- then - 2', b);
      throw Error('123123123');
   })

   .then((a) => {
      console.log('resolve --- then - 3', a);
   },
   (b) => {
      console.log('reject --- then - 3', b);
   });

}
