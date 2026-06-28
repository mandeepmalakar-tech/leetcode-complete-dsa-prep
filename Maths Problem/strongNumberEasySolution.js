function calculateStrong(num){
    // factorial helper function 
    function factorial(n){
        let facto = 1;
        for(let i=2; i<=n; i++){
            facto *= i;
        }
        return facto;
    }

    let sumOfFactorial = 0;
    for(let digit of String(num)){ // loop digit
        sumOfFactorial += factorial(Number(digit)); // add it's to factorial
    }
    // Compare 
    return sumOfFactorial === num ? "Yes" : "No";
}   

console.log(calculateStrong(54));






