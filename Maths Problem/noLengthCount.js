let num = 939349384;
let count = 0;
while(num > 0){
    count++;
    num = Math.trunc((num/10));
}

console.log(count);





// and ek easy method by using length function
let num2 = 345;
let result = num2 + '';
console.log(result.length);
