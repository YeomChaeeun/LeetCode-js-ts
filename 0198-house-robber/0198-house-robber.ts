function rob(nums: number[]): number {
    
    if(nums.length === 1) return nums[0];
    
    // 0 + 2 ... 
    // 1 + 3 ...
 
    // Max(인덱스 0부터 더한 것, 인덱스 1부터 더한 것)
    
    let prev = 0
    let curr = 0
    let temp = 0
    for(let i = 0; i < nums.length; i++) {
        temp = curr; // 직전것을 바꿔줍니다 
        curr = Math.max(prev + nums[i], curr);
        prev = temp; 
        
        console.log(temp, " - ", curr, " - ", prev)
    };
    console.log(curr);
    return curr;
};