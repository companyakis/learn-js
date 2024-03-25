/*
Your Goal: Complete the Factorial
Taking in some integer value n, find the factorial for that number and return it

*/

function factorial(n) {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    return factorial
}

