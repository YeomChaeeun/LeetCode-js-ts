/**
 *
 * @param nums
 * @param k
 */
function topKFrequent(nums: number[], k: number): number[] {
    let obj = {}

    for(const num of nums) {
        if(!obj[num])
            obj[num] = 0
        ++obj[num]
    }

    // 배열로 변경 후 정렬
    let sort_arr = Object.entries(obj).sort((a, b) => Number(b[1]) - Number(a[1]));
    // console.log(sort_arr)

    return sort_arr.slice(0, k).map((i) => Number(i[0]));;
};
