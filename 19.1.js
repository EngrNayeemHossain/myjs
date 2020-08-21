nums=[5,12,23,89,43];
for(let i=0;i<nums.length;i++){
    const num=nums[i];
    console.log(num);
    console.log(num*2);
}

console.log("Now I wanna make a function based programming.");




function even(numbers){
    if(numbers%2==0){
        console.log(numbers ,"is an even number ");
    }
    else{
        console.log(numbers ,"is an odd number ");
    }
}

number=[12,23,14,31,34,53,56];
for(let j=0;j<number.length;j++){
    const numbers=number[j];
    even(numbers);
}

friends_age=[60,63,74,85,97,92];
for(let k=0;k<friends_age.length;k++){
    const age=friends_age[k];
    even(age);
}

cousins_roll=[112,111,110,119,132,145];
for(let l=0;l<cousins_roll.length;l++){
    const roll=cousins_roll[l];
    even(roll);
}