type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let sum : number = init;

    for(let i=0; i<nums.length; i++) {
        sum = fn(sum, nums[i]) 
    }

    return sum
};