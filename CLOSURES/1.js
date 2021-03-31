function outer() {
  let global = 'g';
  return function inner() {
    console.log(global);
    global = 'gl';
  }
}

let global = 'G';

var res = outer();
res();
res();

*******OUTPUT*******
g
gl
