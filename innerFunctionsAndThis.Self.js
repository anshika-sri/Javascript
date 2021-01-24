var f = function(a) {

this.a = '1';

var obj = {
    1:'1'
};

var self = this;

  var f1 = function (b) {
    console.log('inner', self.a, a+b);
  }

return f1;

}


//OUTPUT
inner 1 5
