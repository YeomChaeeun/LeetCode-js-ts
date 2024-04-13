type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let called = {}
    return function(...args) {
        let key = args.toString()
        if(key in called) {
            return called[key]
        } else {
            called[key] = fn(...args)
            return called[key]
        }
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */