/**
 * Implement a function that accepts a number N and returns the Nth number in the Fibonacci sequence
 */

const getNthFibonacciNumber = num => {

    if (num == 0) {
        return 0
    }

    if (num < 3) {
        return 1
    }

    let fibs = []
    for (let i = 0; i < num; i++) {
        fibs.push(0)
    }
    
    fibs[1] = 1  

    for (let i = 2; i < num; i++) {
        fibs[i] = fibs[i-1] + fibs[i-2]
    }

    console.log(`All fibs: ${fibs}`)

    return fibs[num-1]
}

console.log(getNthFibonacciNumber(5))