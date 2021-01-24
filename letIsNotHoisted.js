function demo() {

  function inner() {
    console.log(y);
    let y = 2;
  }
  inner();

}

demo()
//OUTPUT: ReferenceError: can't access lexical declaration `y' before initialization


****

function demo() {

  function inner() {
    let y = 2;
    console.log(y);
  }
  inner();

}

demo()
//OUTPUT: 2
