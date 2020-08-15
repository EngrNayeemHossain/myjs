for(var i=1;i<=5;i++){
    console.log(i*i);
}

var fact=1;
for(var j=1;j<=5;j++){
    fact=fact*j;
   
}
console.log(fact);

var factorial=1;
for(var k=1;k<=10;k++){
    factorial=factorial*k;
    console.log(k,factorial);
}

function facts(n){
    var facts=1;
    for(var l=1;l<=n;l++){
        facts=facts*l;
    }
    return facts;
}
console.log(facts(6));