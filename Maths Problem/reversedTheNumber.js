function reverseNumber(n) {
    // Write your logic here
    let num = n;
    let reverse = Number("");
    while(num > 0){
        let digit = num%10;
        reverse = reverse + digit;
        num = Math.floor(num/10);
    }
    return Number(reverse);
}

console.log(reverseNumber(346));