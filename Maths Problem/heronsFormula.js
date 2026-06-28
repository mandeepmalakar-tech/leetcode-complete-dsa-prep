const prompt = require("prompt-sync")();
let a = Number(prompt("Enter the Length of Side A: "));
let b = Number(prompt("Enter the Length of Side B: "));
let c = Number(prompt("Enter the Length of Side C: "));

/* Function that will calculate the Area of Triangle Using Heron's Formula */
function findAreaUsingHeronsFormula(a, b, c) {
  /* a,b,c are Side A, Side B, and Side C respectively */
  // Guard 1: Check if inputs are valid numbers
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Invalid input! Please enter numbers only.";
  }

  // Guard 2: Check if sides are positive
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Invalid! Sides must be greater than 0.";
  }

  // Guard 3: Check if valid triangle (triangle inequality rule)
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Invalid! These sides cannot form a triangle.";
  }

  
  let s = (a + b + c) / 2; // Semi-perimeter
  let area = Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2)); // Heron's Formula
  return area;
}

let result = findAreaUsingHeronsFormula(a, b, c);
console.log(result);

// Export: Now you can use anywhere in any file
module.exports = {
  findAreaUsingHeronsFormula,
};
