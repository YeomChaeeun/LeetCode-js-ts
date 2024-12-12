function longestConsecutive(nums: number[]): number {
    
    if(nums.length < 2) 
        return nums.length; // 0, 1
    
    nums = nums.sort((a, b) => a - b)
    // console.log(nums)
    
//     let count = 1
//     for(let i = 0; i < nums.length-1; i++) {
//         if(nums[i] === nums[i+1]) {
//             continue;
//         } else if(nums[i] - nums[i+1] === 1) {
//             count++;
//         } else {
//             break;
//         }
//     };
    
//     console.log(count);
//     return count;
    
    let longest = 0;
    let length = 1;
    
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] === nums[i + 1]) {
            console.log(nums[i], '===', nums[i+1])
            continue;
        } else if(nums[i] + 1 === nums[i + 1] ) {
            console.log(nums[i], '+ 1 =', nums[i+1])
            length += 1;
        } else {
            console.log(longest, ' - ', length)
            longest = Math.max(length, longest);
            length = 1;
        }
    }
    
    longest = Math.max(length, longest);
    return longest;
    
};