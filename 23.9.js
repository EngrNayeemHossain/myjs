const person={name:"Nayeem Hossain",age:34,job:"Professional Web Developer",wife:"Ayesha Hossain",friends:['Tanvir','Rafiq'],phone:01767225149}
console.log(person.name);
console.log(person.age);
console.log(person.wife);
const cell=person.phone;
console.log(cell);
const wName=person.wife;
console.log(person.name,wName,cell);

const{friends}=person;
console.log(friends);

const {age,job}=person;
console.log(age,job);

const friendsOfMine=["Nayeem","Noman","Salman"];
const[p]=friendsOfMine;
console.log(p);

const complexObject={
    name:"Nayeem",
    info:{
        address:'Katabon',
        leader:'Nadim'
    }
}
const {leader}=complexObject.info;
console.log(leader);
