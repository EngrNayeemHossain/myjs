function inchToFeet(inch){
    feet=inch/12;
    return feet;
}  
console.log(inchToFeet(96));

function feetToInch(feet){
    inch=feet*12;
    return inch;
}
console.log("Value in feet is:"+feetToInch(10));
var news=feetToInch(20);
console.log(news);
var senior=[22,13,14];
var nana=feetToInch(senior[0]);
console.log(nana);
