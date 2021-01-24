var addOne = function() {

var i = 1;

var add = function(j) {
    i += j;
    console.log('add',   i)
    console.log("this", this)

   return this;
}

var sub = function(k) {
    i -= k;
    console.log('sub',i)
    return this;
}

return {add:add, sub:sub} //this

}

var Operations = addOne();
Operations.add(3).sub(1);
