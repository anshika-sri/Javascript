function magic() {
    for(var i = 0; i< 3; i++) {
        function close(i) { 
        setTimeout(function() {

           console.log(i); }, 1000);
        }
        close(i);
    }

}

magic();

******OUTPUT********
0
1
2
