const numbers=[3,4,5,6,7,8];
const output=[];
for(let i=0;i<numbers.length;i++){
    const element=numbers[i];
    const result=element*element;
    output.push(result);
}

console.log(output);

//by using map

const number=[2,4,6,8,10];
// function square(element){
//     return element*element;
// }
// number.map(square);

const result=number.map(function(element,index){
    return (element*element,index);
});
console.log(result);


const squ=x=>x*x;
console.log(squ(5));

myNumber=[2,4,6,8,10];
const finalResult=myNumber.map(y=>y*y)
console.log(finalResult);


myNumbers=[3,4,5,6,7,8,9];
const myResult=myNumbers.filter(z=>z>5);
console.log(myResult);


myNumbers2=[3,4,5,6,7,8,9];
const myResult2=myNumbers.find(z=>z>5);
console.log(myResult2);