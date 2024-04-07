/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let sum = init;
    return {
        increment: () => {
            return ++sum
        },
        decrement: () => {
            return --sum
        },
        reset: () => {
            sum = init
            return sum
        }
    }

    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */