function factorial(num){
    var fact=1;
    for(var i=1;i<=num;i++){
        fact=fact*i;
       
    }
    return fact;
}
console.log(factorial(5));


function factorialRecursive(num){
    if(num==1){
        return 1;
    }
    else{
        return num*factorialRecursive(num-1);
    }
}
console.log("Factorial of 7 is: ",factorialRecursive(7));