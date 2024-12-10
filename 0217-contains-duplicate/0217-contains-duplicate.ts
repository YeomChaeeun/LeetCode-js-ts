function containsDuplicate(nums: number[]): boolean {
    
//     const uniqueArr = nums.filter((item, index) => { return nums.indexOf(item) === index })
//     console.log(uniqueArr)
    
//     return nums.length !== uniqueArr.length;
    
//     nums.sort()
//     if(nums.length === 1) 
    
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === nums[i+1]){
//             console.log(nums[i], nums[i+1])
//             return true;
//         } else {
//             return false
//         }
//     }
    
    let obj={}
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            return true;
        }
        obj[nums[i]] = 1;
        
    }
    return false;
    
    
};