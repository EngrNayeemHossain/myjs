function evenif(nums){
    for(let i=0;i<nums.length;i++){
        const num=nums[i];
        if(num%2==0){
            console.log(num, ': is even number');
        }
        else{
            console.log(num, ': is odd number');
        }
    }
}

nums=[5,12,23,21,24,22];
evenif(nums);

friends_age=[45,34,35,36,38];
evenif(friends_age);

