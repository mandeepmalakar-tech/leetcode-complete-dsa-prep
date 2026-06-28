function calculateStrong(num) {
  let stringNum = String(num);

  // single digit case
  let factoFor1Digit = 1;
  if (stringNum.length == 1) {
    for (let i = 2; i <= num; i++) {
      factoFor1Digit = factoFor1Digit * i;
    }
    if (factoFor1Digit === num) return "Yes";
    else return "No";
  }

  // Multiple digit case 245
  let sumOfFactorial = 0;
  for (let i = 0; i < stringNum.length; i++) {
    let factoForMultipleDigit = 1;
    let numberTypeValue = Number(stringNum[i]);
    for (let j = 2; j <= numberTypeValue; j++) {
      factoForMultipleDigit = factoForMultipleDigit * j;
    }
    sumOfFactorial = sumOfFactorial + factoForMultipleDigit;
  }
  return sumOfFactorial === num ? "Yes" : "No";
}

console.log(calculateStrong(145));
