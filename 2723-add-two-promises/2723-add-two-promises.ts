type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    // console.log(await promise1)
    // console.log(await promise2)
    let result = await(promise1) + await(promise2)
    return result
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */