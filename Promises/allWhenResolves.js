const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

const res = Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});

/**
console.log(res)
VM181:11 Promise {<pending>}
undefined
VM181:8 (3) [3, 42, 'foo']
*/
