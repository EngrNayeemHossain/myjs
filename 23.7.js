class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="Pabna Zilla School";
    }
}

const student1=new Student(18,"Rakibuzzaman");
const student2=new Student(21,"Iqbal Bahar");
const student3=new Student(25,"Ashik Ahmed");
console.log(student1,student2,student3);
console.log(student1.name,student1.id);

class Parent{
    constructor(){
        this.fatherName="Ashraf";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name+" "+this.fatherName;
    }
}

const baby=new Child("Nayeem");
const baby2=new Child("Imran");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
