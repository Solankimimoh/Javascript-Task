const scanner = require("prompt-sync");

function init() {
  console.log("\nWelcome to task list : \n");
  console.log("1. Find factorial of a number.");
  console.log("2. Display multiplication table.");
  console.log("3. Print the fibonacci sequence.");
  console.log("4. Check armstrong number.");
  console.log("4. Print armstrong number from interval. \n");
  let choice = parseInt(prompt("Please enter your choice:"));

  choiceSelection(choice);

}

function choiceSelection(choice) {
  switch (choice) {
    case 1:
      factorialNum();
      init();
      break;
    case 2:
      multiplicationTable();
      init();
      break;
    case 3:
      fibonacciSeries();
      init();
      break;
    case 4:
      armstrongNumVerify();
      init();
      break;
    case 5:
      armstrongNumInterval();
      init();
      break;
    default:
      console.log(" \n Please enter valid choice.. Try again!");
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

    let sum = prevNum + nextNum;
    prevNum = nextNum;
    nextNum = sum;
  }


}

// This function will help to check given number is armstrong or not.
function armstrongNumVerify() {
  let num = prompt("Enter the number to check armstrong number.");

  if (armstrongCheck(num)) {
    console.log(num + " is armstrong");
  } else {
    console.log(num + " is not armstrong");
  }

}

// This function will help to print amrstrong number from internval
function armstrongNumInterval() {
  let num = prompt("Enter the end number to check armstrong number interval.");

  for (let i = 1; i <= num; i++) {
    if (armstrongCheck(i)) {
      console.log(i + " is armstrong");
    } else {
      console.log(i + " is not armstrong");
    }
  }
}

// This is function will take number as input and calculate and check armstrong number return true or false
function armstrongCheck(num) {

  let powerCount = num.toString().length;
  let armstrongNum = 0;
  let originalNum = num;

  for (let i = 0; i < powerCount; i++) {

    let reminder = Math.floor(num % 10);
    let tempNum = num / 10;
    num = tempNum;
    let powerCal = 1;

    for (let j = 0; j < powerCount; j++) {
      powerCal = powerCal * reminder;
    }
    armstrongNum = armstrongNum + powerCal;

  }

  if (armstrongNum == originalNum) {
    return true;
  } else {
    return false;
  }

}

init();