/* Generate 4 Digit OTP */
const generatedOTP = Math.trunc((Math.random() * 9000) + 1000);  /* 1000 - 9999 */
console.log(generatedOTP);



/* Generate 6 Digit OTP */
const generateSixDigitOTP = Math.trunc((Math.random() * 900000) + 100000);  /* 100000 - 999999 */
console.log(generateSixDigitOTP);
