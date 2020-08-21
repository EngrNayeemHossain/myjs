function addNumbers(num1,num2){
    console.log(arguments[1]);
    for(let i=0;i<arguments.length;i++){
        const num=arguments[i];
        console.log(num);
    }
    return num1+num2;
}
console.log('Addition of two numbers =',addNumbers(19,31));


function addNumber(){
    var sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
console.log('Addition of given numbers =',addNumber(19,31,10));