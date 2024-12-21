function climbStairs(n: number): number {
    // 1 - 2 - 3 - 5 - 8 ... 규칙 발생
    
    if(n <= 3) return n
    // return climbStairs(n - 1) + climbStairs(n - 2)
    
    // 피보나치 수열과 비슷한 앞의 두 숫자를 더해서 배열 구조를 만듬
    // 동적 프로그래밍 방식으로 계산
    let current = 1;  // 현재 방법의 수
    let prev = 1;     // 이전 단계의 방법의 수

    // n-1번 반복하여 방법의 수 계산
    for (let i = 1; i < n; i++) {
        [current, prev] = [current + prev, current];
    }

    return current;
};