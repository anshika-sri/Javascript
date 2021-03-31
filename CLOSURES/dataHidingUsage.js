let pass = 'doNOTshow';

function outer() {
  return function inner() {
  pass = 'IamChanged, Sorry!';
  console.log('modified pass:', pass);
  }
}

function outer2() {
  return function inner() {
  pass = 'IamChanged Again, Sorry!';
  console.log('modified pass:', pass);
  }
}

var res = outer();
res();
res();

var res = outer2();
res();
res();

**********OUTPUT************
modified pass: IamChanged, Sorry!
modified pass: IamChanged, Sorry!
modified pass: IamChanged Again, Sorry!

  
*****************WITH DATA HIDING/ENCAPSULATION*************

function encapsulation() {
  let pass = 'doNOTshow';

  return function outer() {
    return function inner() {
      console.log('old pass:', pass);
      pass = 'IamChanged, here!';
      console.log('modified pass:', pass);
    }
  }
}

function outer2() {
  return function inner() {
  console.log('I cannot access the pass, no lexical scope provided! pass:', pass);
}
}

var res = encapsulation()();
res();


var res = outer2();
res();

*******************OUTPUT***************************
old pass: doNOTshow
modified pass: IamChanged, here!
I cannot access the pass, no lexical scope provided! pass: undefined
