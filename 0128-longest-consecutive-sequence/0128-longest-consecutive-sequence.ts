/**
* 시간복잡도: O(nlogn) - 정렬로 인해
* 공간복잡도: O(1) - 추가 공간 사용 없음
*/
function longestConsecutive(nums: number[]): number {
    
    if(nums.length < 2) 
        return nums.length; // 0, 1
    
    nums = nums.sort((a, b) => a - b)
    
    let currentLength = 1;    // 현재 연속 수열의 길이
    let maxLength = 1;        // 전체 최대 연속 수열의 길이
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            continue
        } 
        
        if(nums[i] === nums[i - 1] + 1 ) {
            currentLength++
        } else {
            // 연속이 끊긴 경우, maxLength 업데이트하고 currentLength 초기화
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 1;
        }
    }
    
    // 마지막 수열의 길이도 확인
    return Math.max(maxLength, currentLength);
}
