const name="Nayeem Hossain";
console.log(name);

const numbers=[2,28];
numbers[1]=77;
numbers.push(19);
console.log(numbers);

const hero={name:"SRK",Phone:"01718"};
console.log(hero);

let teacher="Saif Uddin";
teacher="Kabir Uddin";
console.log(teacher);

function add(num1,num2){
    return num1+num2;
}

const total=add(14,16);
console.log(total);

function addition(num3,num4){
    if(num4==undefined){
        num4=0;
    }
    return num3+num4;
}
const result=addition(20);
console.log(result);

function sub(num5,num6){
    num6=num6||0;
    return num5-num6;
}
const final=sub(50,25);
console.log(final);


const firstName="Justin";
const lastName="Timberlake";
const fullName=firstName+" "+lastName+" is a popular hero.";
console.log(fullName);
const fullName2=`${firstName} ${lastName} is a popular hero.`;
console.log(fullName2);
const dtatement=`${firstName} ${lastName} has ${300+400+300} tk for his shirt.`;
console.log(dtatement);
const multiLine=`I have a pen
and I want to do my homework
not only that I need to plan
my day and night.`;
console.log(multiLine);

