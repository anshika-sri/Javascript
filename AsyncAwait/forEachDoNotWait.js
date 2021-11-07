const waitFor = (ms, num) => new Promise(r => {
console.log('okay I am running before', num)
setTimeout(function(){ alert("Hello " + ms); }, ms);
if(ms === 200) { throw 'wohho'; } 

console.log('okay I am running after', num)


});


const res = [1, 2, 3].forEach(async (num) => {
let t = 50
if(num === 2) { t = 200 }
  await waitFor(t, num);
  console.log(num);
});
console.log('Done', res);


/**
VM792:2 okay I am running before 1
VM792:6 okay I am running after 1
VM792:2 okay I am running before 2
VM792:2 okay I am running before 3
VM792:6 okay I am running after 3
VM792:18 Done undefined
undefined
VM792:17 Uncaught (in promise) wohho

alerts:
Hello 50
Hello 50
Hello 200
*/
