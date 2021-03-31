function encapsulation() {
let pass = 'doNOTshow';

return function inner() {
console.log('old pass:', pass);
pass = 'IamChanged, here!';
console.log('modified pass:', pass);

}


}

console.log(pass);

var res = encapsulation();
//This may consume the memory because browser may not know that res will no further be useful.
res();


*******OUTPUT***********
pass:  undefined
old pass: doNOTshow
modified pass: IamChanged, here!
