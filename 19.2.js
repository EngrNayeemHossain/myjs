function evenifs(num){
    if(num%2==0){
        console.log(num,' is an even number');
    }
    else{
        console.log(num,' is an odd number');
    }
}
(evenifs(15));


function odds(number){
    if(number%2==0){
        return number+' is an even number';
    }
    else{
        return number+' is an odd noumber';
    }
}
console.log(odds(16));
console.log(odds(15));
console.log(odds(33));


function oddif(nums){
    var result;
    if(nums%2==0){
        result=nums+' is an even number';
    }
    else{
        result=nums+' is an odd number';
    }
    return result;
}
console.log(oddif(13));

function sqr(n){
    var square=n*n;
    return n+'-'+' squared value is:'+square;
}
console.log(sqr(5));
console.log(sqr(10));
console.log(sqr(12));
console.log(sqr(15));
console.log(sqr(20));


