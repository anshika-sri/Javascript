function encapsulation() {
  let pass = 'doNOTshow', unUsed = 'I may be garbage collected';

  return function inner() {
    console.log('old pass:', pass);
    pass = 'IamChanged, here!';
    console.log('modified pass:', pass);
  }
}

console.log('pass: ', pass);

var res = encapsulation();
//This may consume the memory because browser may not know that res will no further be useful.

//smart garbage collcetion: unUsed will not be stored in memory. It will be garbage collected.
res();
