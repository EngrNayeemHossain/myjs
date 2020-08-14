console.log(31);
console.log("Good training");
console.log('this is very important');
var bananaPrice=13;
console.log(bananaPrice);
console.log(typeof bananaPrice);

var isHot=true;
var isRich=false;
console.log(isHot);

var name="I love my country.";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('my'));
console.log(name.split('I'));
console.log(name.split(' '));

var number1=25;
var number2=15.5;
var number3='18.8';
console.log(number1+number2);
number3=parseInt(number3);
console.log(number1+number3);

var number5=20;
var number6=12;
console.log(typeof(number5));

var number7=.4;
var number8=.5;
total=number7+number8;
total=total.toFixed(5);
console.log(total);

var price1=30;
var price2=45;
var total=price1+price2;
console.log(total);
var toal1=price2-price1;
console.log(toal1);
var total3=price1*price2;
console.log(total3);
var toal4=price2/price1;
console.log(toal4);
var total5=price2%price1;
console.log(total5);
var potato=39;
potato++;
console.log(potato);
potato--;
console.log(potato);
var fname="Nayeem";
var lname="Hossain";
var fullname=fname+" "+lname;
console.log(fullname);

var numbers=-5;
var absoluteNumber=Math.abs(numbers);
console.log(absoluteNumber);

var number10=5.4545;
var round=Math.round(number10);
console.log(round);

var number11=16.000009;
var ceils=Math.ceil(number11);
console.log(ceils);

var unspecific=Math.random();
console.log(unspecific);
var rounding=Math.round(unspecific);
console.log(rounding);

var biscuitPrice=12;
if(biscuitPrice<10){
    console.log("I will have it.");
}
else{
    console.log("I will not buy it.");
}

var mobile=10000;
if(mobile!=8000){
    console.log("I am not gonna buy it.");
}
else{
    console.log("I will buy it for sure.");
}


var jobPeyechi=false;
var jobSalary=50000;
if(jobPeyechi==true && jobSalary==70000){
    console.log("You should do the job.");
}
else if(jobPeyechi==true || jobSalary==50000){
    console.log("You could try this job.");
}
else{
    console.log("You should not do the job.");
}

var date=new Date('1971-12-16');
console.log(date);