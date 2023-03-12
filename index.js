const scanner = require("prompt-sync");

function init() {
  console.log("Welcome to task list :");
  console.log("1. Find factorial of a number.");
  console.log("2. Display multiplication table.");
  console.log("3. Print the fibonacci sequence.");
  console.log("4. Check armstrong number.");
  let choice = prompt("Please enter your choice:");

  choiceSelection(choice);

}

function choiceSelection() {
  switch (choice) {
    case 1:
      factorialNum();
      break;
    case 2:
      multiplicationTable();
      break;
    case 3:
      fibonacciSeries();
      break;
    case 4:
      break;
    case 5:
      break;
    default:
      console.log("Please enter valid choice.. Try again!");
      init();
      break;
  }
}

// This function will help to calculate factorial number for given number
function factorialNum() {

  // Get number from user to calculate
  let num = prompt("Enter the number for factorial calculation.");
  let factorialNum = 1;

  // Calcualting multiplication from num to 1 
  for (let i = num; i >= 1; i--) {
    factorialNum *= i;
  }

  // Print the final calculation of factorial number.
  console.log("Factorial of " + num + "! is " + factorialNum);
}

// This function will help to print multiplication table from given number. 
function multiplicationTable() {

  // Get number from user to print mulitplication table
  let num = prompt("Enter the number to print multiplication table");

  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}

// This function will help to print fibonacci series.
function fibonacciSeries() {

  // Get number from user to calculate fibonacci series.
  let num = prompt("Enter the number for fibonacci series.");
  let prevNum = 0;
  let nextNum = 1;


  for (let i = 0; i < num; i++) {

  
    console.log(prevNum);
  
    let sum = prevNum+nextNum;
    prevNum=nextNum;
    nextNum=sum;
  }


}

fibonacciSeries();