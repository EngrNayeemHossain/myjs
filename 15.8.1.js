var speech="I am a Bangladeshi and I wanna live in Canada.";
var count=0;
for(var i=0;i<speech.length;i++){
    var char=speech[i];
    if(char==" "&&speech[i-1]!=" "){
        count++;
    }
}
console.log(count);