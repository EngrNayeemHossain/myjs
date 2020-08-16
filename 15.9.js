
function reverseString(str){
    var reverse="";
    for(var i=0;i<str.length;i++){
        var char=str[i];
        reverse=char+reverse;
    }
    return reverse;
}
var statement="I am a student and I wanna make it clear.";
var alien=reverseString(statement);
console.log(alien);
var food=reverseString("I love cricket.");
console.log(food);