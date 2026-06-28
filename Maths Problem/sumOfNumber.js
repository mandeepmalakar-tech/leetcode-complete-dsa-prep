// sum of number's digit 
function sumOfDigits(n){
    let num = n;
    let sum = 0;
    while(num > 0){
        let rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(50));


// solution 2 
function sumOfDigits(n) {
    // Write your logic here
    let num = String(n);
    let sum = 0;
    for(let digit of num){
        sum += Number(digit)
    }
    return sum;
}