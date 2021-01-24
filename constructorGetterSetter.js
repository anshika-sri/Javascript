let f112 = function(_col) {

this.setColor = (col) => { col = _col; }
this.getColor = () => { return _col;  }

}; 

var obj121 = new f112("red"); 
obj121.getColor();

//OUTPUT
"red"
