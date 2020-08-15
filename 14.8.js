var fibo=[0,1];
for(var i=2;i<=10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
    console.log(fibo[i]);
}

function fibonacci(n){
    var fibo=[0,1];
    for(var i=2;i<=n;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];   
    }
    return fibo;
}
console.log(fibonacci(10));

function fibon(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return  fibon(n-1)+fibon(n-2);
    }
}
console.log(fibon(10));