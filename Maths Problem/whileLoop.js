const prompt = require("prompt-sync")();
let userInput = "";
while (userInput !== "S" && userInput !== "s") {
  userInput = prompt("Enter any No or S to Stop:  ");

  if(userInput == "S" || userInput == "s") break;

  if (Number(userInput) % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

console.log("Thanks for Using Use this Program.");