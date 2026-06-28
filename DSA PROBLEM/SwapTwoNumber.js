function swapNumbers(a, b) {
    // Write your logic here
    [a,b] = [b,a];
    return [a,b];
}

console.log(swapNumbers(5,10))