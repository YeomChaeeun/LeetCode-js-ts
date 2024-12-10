function containsDuplicate(nums: number[]): boolean {

    // 접근 1 - 시간 복잡도가 매우 커서 실패
//     const uniqueArr = nums.filter((item, index) => { return nums.indexOf(item) === index })
//     console.log(uniqueArr)
    
//     return nums.length !== uniqueArr.length;
    
//     접근 2 - 양 옆의 값을 
    
    if(nums.length === 1) 
        return false;
    
    // 정렬
    nums.sort()
    
    // 양옆의 값이 같음을 비교
    for(let i = 0; i < nums.length; i++){
        console.log(nums[i], nums[i+1])
        if(nums[i] === nums[i+1]){
            return true;
        } 
    }
    return false;

    
//     let obj={}
    
//     for(let i = 0; i < nums.length; i++) {
//         console.log('nums >>', nums[i], 'obj >>', obj)
//         if(obj[nums[i]]) {
//             return true;
//         }
//         obj[nums[i]] = 1;
//     }
//     return false;
    
};