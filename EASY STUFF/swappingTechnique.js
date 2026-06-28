// first way to swap the value 
let a = 5; 
let b = 10;
let temp; 


// swapping
temp = a; //5
a = b; //10
b = temp; //5

// Swapped Values
console.log(`a: ${a}, b: ${b}`); // a: 10, b: 5


// second way to swap the value without using any third Variable
let x = 15; 
let y = 20;

// swapping
x = x+y;
y = x-y; 
x = x-y;

console.log(`x: ${x}, y: ${y}`); // x: 20, y: 15


// third way to swap the value and Trust me It's most easiest way
// This is a shorthand way to swap variables without using a third variable. 
// "Destructuring assignment" allows you to swap values in a single line.
let m = 12; 
let n = 24;

console.log("\nBefore")
console.log(`M: ${m} and N: ${n}`);

//Swapping
[m, n] = [n, m];

console.log("\nAfter")
console.log(`M: ${m} and N: ${n}`);