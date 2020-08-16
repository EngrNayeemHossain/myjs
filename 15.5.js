var marks=[23,45,43,13,25,67];
var max=marks[0];
for(var i=0;i<marks.length;i++){
    var element=marks[i];
    if(element>max){
        max=element;
    }
}
console.log("Highest value is: ",max);