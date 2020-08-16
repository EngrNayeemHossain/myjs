var numbers=[34,25,45,67,19];
var sum=0;
for(var i=0;i<numbers.length;i++){
    var element=numbers[i];
    sum=sum+element;
}
console.log("total of the numbers: ",sum);


function getArraySum(num){
    var sum=0;
    for(var j=0;j<num.length;j++){
        var elem=num[j];
        sum=sum+elem;
    }
    return sum;
}
var num=[45,67,87,12,23,43];
var summation=getArraySum(num);
console.log("Total: ",summation);

var totals=getArraySum([12,23,53,46,57]);
console.log(totals);