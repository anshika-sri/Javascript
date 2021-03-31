
function encapsulation() {
  let pass = 'doNOTshow';

  this.encrypt = function() {
    pass = '************';
    console.log('encrypt pass: ', pass);
  }

  this.decrypt = function() {
    console.log('decrypt pass: ', pass);
  }
}


var res = new encapsulation();
res.decrypt();
res.encrypt();


*********OUTPUT**********
decrypt pass:  doNOTshow
