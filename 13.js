var friendsAge=[15,23,18,20,21];
console.log(friendsAge);
console.log(friendsAge[0]);
friendsAge[2]=24;
console.log(friendsAge);
console.log(friendsAge.indexOf(201));
console.log(friendsAge.indexOf(21));
friendsAge.push(22);
console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);

var teaLine=['salam','kalam','balam'];
teaLine.push('jalam');
console.log(teaLine);
teaLine.pop();
console.log(teaLine);
teaLine.shift();
console.log(teaLine);
teaLine.unshift('anam');
console.log(teaLine);
var part = teaLine.slice(2);
console.log(part);

var num=0;
while(num<15){
    console.log(num);
    num++;
}

for(var i=1;i<=10;i++){
    console.log(i);
}

var nums=[12,13,14,15,16,17,18,19,20];
for(var i=0;i<=nums.length;i++){
    console.log(nums[i]);
}

a=30
switch(a){
    case 10:
        console.log("I love going to Dhaka.");
        break;
    case 5:
        console.log("I am in Love.");
        break;
    case 30:
    case 40:
        console.log("I am either 30 or 40");
        break;
    default:
        console.log("I am nothing.");
}