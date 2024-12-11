function topKFrequent(nums: number[], k: number): number[] {
    let obj = { }
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) { 
            ++obj[nums[i]]
        } else {
            obj[nums[i]] = 1
        }
    }
    // console.log(obj)
    
    // let entries = Object.entries(obj)
    // console.log(entries) // 배열로 변경
    
    let sort_arr = Object.entries(obj).sort((a, b) => Number(b[1]) - Number(a[1]));
    // console.log(sort_arr)
    
    let result = [];
    let l = 0;
    for(const item of sort_arr) {
        // console.log(item)
        if(l == k) break;
        result.push(Number(item[0]));
        l++;
    }
    
    console.log(result)
    
    return result;
    
};