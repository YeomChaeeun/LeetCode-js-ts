/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let callCount = 0
    let called = {}
    return function(...args) {
        let key = args
        
        if(key in called) {
            return called[key]
        } else {
            let results = fn(...args)
            called[key] = results
            // console.log(called)
            return results
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