const students=[
    {id:21,name:"Nayeem Hossain"},
    {id:31,name:"Jayed Hossain"},
    {id:41,name:"Nadeem Hossain"},
    {id:51,name:"Karim Hossain"},
];
const names=students.map(s=>s.name);
console.log(names);
const ids=students.map(s=>s.id);
console.log(ids);
const biggerStudents=students.filter(s=>s.id>30);
console.log(biggerStudents);
const ImmediateBigger=students.find(s=>s.id>30);
console.log(ImmediateBigger);