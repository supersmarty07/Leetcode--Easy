const twoSum = (nums, target) => {
    let output = [];
    for(i=0;i<nums.length;i++){
        let find = nums.indexOf(target-nums[i])
        if(find!==i && find>=0) {output.push(i, find); break;}  
    } 
    return output;
};
