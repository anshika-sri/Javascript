const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
Promise {<pending>}
promise.all+undefined:1 Uncaught (in promise) foo
Promise.then (async)
(anonymous) @ VM71:7
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, 'foo');
});

const res = Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
console.log(res)

         
/**
VM145:11 Promise {<pending>}
undefined
promise.all+undefined:1 Uncaught (in promise) foo
*/
