function countBits(n: number): number[] {
    let result : number[] = []

    function count(num: number) {
        let cnt = 0
        while(num > 0) {
            num &= (num - 1)
            cnt++
        }
        return cnt
    }
    
    for(let i = 0; i <= n; i++) {
        result.push(count(i))
    }

    return result
}
