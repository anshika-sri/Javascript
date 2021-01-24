1n+1n
//OUTPUT
2n


1n + 1
//OUTPUT
TypeError: can't convert BigInt to number


var big = BigInt('1')
console.log(big);
//OUTPUT
1n

var big = BigInt(1)
console.log(big);
//OUTPUT
1n

var big = BigInt(true)
console.log(big);
//OUTPUT
1n


var big = BigInt(0)
console.log(big);
//OUTPUT
0n


var big = BigInt('0)
console.log(big);
//OUTPUT
0n


var big = BigInt(false)
console.log(big);
//OUTPUT
0n
