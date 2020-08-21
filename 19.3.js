function callback(name,age,task){
    console.log('Hello',name);
    console.log('Your age is ',age);
    task();
    
}
function washHand(){
    console.log('Please wash your hand.');
}
function washLeg(){
    console.log('Please wash your leg.');
}
callback('Nayeem Hossain',34,washHand);
callback('Jayed Hossain',34,washLeg);