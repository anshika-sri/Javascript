var person = { name : '', age: 24 }
person.name || 'default'; //||

//OUTPUT
"default"


var person = { name : '', age: 0 }
person.name ?? 'default'; //??
person.age ?? 24; //??

//OUTPUT
""
0


var person = {  }
person.name ?? 'default'; //??
person.age ?? 24; //??

//OUTPUT
"default"
24
