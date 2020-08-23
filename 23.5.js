function doubleIt(n){
    return n*2;
}
const result5=doubleIt(5);
console.log(result5);

const d=function myFun(d){
    return d*2;
}
const t=d(10);
console.log(t);

const b=number=>number*3;
const result=b(10);
console.log(result);

const add=(x,y)=>x+y;
console.log(add(20,30));

const sub=()=>10;
console.log(sub());

const multi=(a,b)=>{
    const summation=a+b;
    const difference=a-b;
    const final=summation*difference;
    return final;
}

console.log(multi(10,5));

const ages=[12,14,16,13,17];
const ages2=[15,19,18];
const allAges=ages.concat(ages2);
console.log(allAges);
const ages3=[20,21,22,23];
const finalAges=allAges.concat(ages3);
console.log(finalAges);
const class7=[1,2,3,4,5,6,7];
const class8=[8,9,10,11];
const class9=[12,13,14,15];
const classes=class7.concat(class8).concat(class9);
console.log(classes);
const class10=[class7,class8,90,class9];
console.log(class10);
const class11=[...class7,...class8,90,...class9];
console.log(class11);

const rakib=600;
const kabir=700;
const majed=550;
const maximum=Math.max(rakib,kabir,majed);
console.log(maximum);

const ageGroup=[25,32,30];
const maxAge=Math.max(...ageGroup);
console.log(maxAge);
