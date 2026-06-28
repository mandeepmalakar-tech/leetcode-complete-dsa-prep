function reverseNaturalNumberPrintingTo1(num){
    let result = "";
    for(let i=num; i>=1; i--){
        result += i + " ";
    }
    return result;
}

const ans = reverseNaturalNumberPrintingTo1(12);
console.log(ans);

// Answer: 12 11 10 9 8 7 6 5 4 3 2 1 