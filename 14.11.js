var n=19;
for(i=2;i<n-1;i++){
        if(n%i==0){
        console.log("It's not a prime number.");
        break;
    }
}
console.log("Its a prime number.");


function prime(m){
    for(j=2;j<m-1;j++){
        if(m%j==0){
            return 'Not a prime number';
           
        }
    }
    return "Prime number";
}
console.log(prime(13));