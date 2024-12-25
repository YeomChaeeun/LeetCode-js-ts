function reverseBits(n: number): number {
    let arr = n.toString(2).split('')
    let len = arr.length
    for (let i = 0; i < (32 - len); i++) {
        arr.unshift('0');
    }
    let result = arr.reverse().join('')
    
    return parseInt(result,2)
}
