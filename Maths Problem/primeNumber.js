function checkPrimeNumber(num) {
  let factorCount = 1;
  for (let i = 2; i <= num; i++) {
    if(num % i === 0){
        factorCount++;
    }
  }
  if(factorCount === 2){
    return "Prime"
  }else{
    return "Not Prime"
  }
}

console.log(checkPrimeNumber(5));
