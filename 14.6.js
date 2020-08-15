var i=1;
var factorial=1;
while(i<=10){
    factorial=factorial*i;
    console.log(factorial);
    i++;
}

function fct(num){
    var m=1;
    var fct=1;
    while(m<=num){
        fct=fct*m;
        m++;     
    }
    console.log(fct);
    return fct;
}
fct(6);
