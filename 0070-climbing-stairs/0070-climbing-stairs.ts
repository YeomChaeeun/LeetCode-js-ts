function climbStairs(n: number): number {
    // if(n <= 3) return n
    // 1 - 2 - 3 - 5 - 8 ... 규칙 발생
    // return climbStairs(n - 1) + climbStairs(n - 2)
    
    // 피보나치 수열 - 앞의 두 숫자를 더해서 배열 구조를 만듬
    let output = 1;
    for (let prev = output; n > 1; n--) {
        [output, prev] = [prev + output, output]
    }
    return output;
};