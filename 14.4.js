function leap(year){
    if(year%400==0)
        console.log("leap year");
    else if(year%4==0 && year%100!=0)
        console.log("leap year");
    else
        console.log("not leap year");
}
leap(200);
leap(2000);
leap(300);
