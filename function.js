function loves(){
    console.log("I love you.");
    console.log("I love you so much.");
}
loves();
function cal(num){
    console.log(num*2);
}
cal(6);

function product(x){
    var res=2*x;
    console.log(res);
}

product(10);
product(30);
product(50);

function sum(num){
    var total=num*2;
    return total;
}
var first=sum(6);
var sec=sum(9);
var summation=first+sec;
console.log(first,sec);
console.log(summation);

function tot(a){
    var s=a*3;
    return s;
}
var f=tot(10);
var se=tot(20);
var prod=f*se;
console.log(f,se);
console.log(prod);


function add(num1,num2){
    var summation=num1+num2;
    return summation;
}
console.log(add(24,40));
//these are the programmes for function and its implementation

//lets learn about object

var student={id:121,phone:01716,name:"abir"};
var student2={id:122,phone:01819,name:"kabir"};
console.log(student);
console.log(student2);
var myStudent=student.phone;
//var myStudent=student["phone"]; we could follow this method as well.
console.log(myStudent);
student2.phone=12345;
console.log(student2);