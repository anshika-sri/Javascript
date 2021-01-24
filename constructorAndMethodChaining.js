//constructor with closures

var addOne = function(a) {

  this.i = a;

  this.add = function(j) {
      this.i += j;
      console.log('add',   this.i)
      console.log("this", this)

      return this;
  }

  this.sub = function(k) {
      this.i -= k;
      console.log('sub',this.i)

      return this;
  }
  
}

var Operations = new addOne(2);
Operations.add(3).sub(1);

