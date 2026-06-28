function isAutomorphic(n) {
    // Write your logic here
    let num = n;
    let squareOfNum = Math.pow(num, 2);
    console.log(squareOfNum);
    let lastDigit = (squareOfNum % 10);
    return (lastDigit == num) ? "Yes" : "No";
}


console.log(isAutomorphic(5));