function add(num1,num2){
    var total=num1+num2;
    return total;
}
console.log("add these two value:25+89=",add(25,89));

function largestNumber(numbers){
    var larger=numbers[0];
    for(var i=0;i<numbers.length;i++){
        var element=numbers[i];
        if(element>larger){
            larger=element;
        }
    }
    return larger;
}
console.log(largestNumber([45,23,78,12]));