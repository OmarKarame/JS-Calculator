"use strict";

var previousNumber = 0;
var laterNumber = 0;
var opSelected = false;
var isDecimal = false;
var operation = "";
var display = document.getElementById('display');
var buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(function (button) {
  button.addEventListener('click', function (e) {
    switch (e.target.innerText) {
      case 'AC':
        display.innerText = '';
        isDecimal = false;
        break;

      case '.':
        if (isDecimal == false) {
          display.innerHTML += e.target.innerHTML;
          isDecimal = true;
          break;
        } else {
          break;
        }

      case '+':
        display.innerHTML = '';
        operation = "+";
        opSelected = true;

      case '=': // try{
      //     display.innerText = eval(display.innerText);
      // } catch {
      //     display.innerText = "Error"
      // }
      // break;

      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }

        break;

      default:
        if (opSelected == false) {
          display.innerText += e.target.innerText;
          previousNumber = display.innerHTML;
        } else {
          display.innerHTML = e.target.innerText;
          laterNumber = display.innerHTML;
        }

    }
  });
}); // let previousNumber = 0;
// let operatorSelect = false;
// let operator = "";
// class Calculator{
//     // Create a function that displays the number on the current output
//     displayCurrentNumber(number) {
//         previousNumber = previousNumber.toString() + number.toString();
//         document.getElementById("current-output").innerHTML = previousNumber;
//         console.log(previousNumber);
//         return parseFloat(previousNumber);
//     }
// }
// // Create seperate arrays for operators and numbers
// const numberButtons = document.querySelectorAll('.button--number');
// const operatorButtons = document.querySelectorAll('.button--operation');
// //Create a function that displays the operator and the previous number in the past output
// const displayOperator = () => {
//     // Create a var that contains the operator that is chosen
//     // If the operator was chosen already (operatorSelect == true),
//     // a new operator replaces it
//         // Create a case and switch for each operator and 
//         // return the operator that is being selected
//     // Else clear the current display
//     // and set operatorSelect = true
//         // Create a case and switch for each operator and 
//         // return the operator that is being selected
//     // and display the previous number with the new operator in past output
// }
// // All-clear function must set the operatorSelect to be false
// // and set operator and number to empty strings
// // Equals fuction must set the operatorSelect to be false and run the 
// // functions on a case and switch based on the operator
// // It must also clear the past output before calling the functions that 
// // will compute and display the outcome on the current output
// // Use array iterators to parse through the arrays
// numberButtons.forEach((number) => {
//     // Create an eventListener for the buttons and call the display number function
//     number.addEventListener("click", Calculator.displayCurrentNumber(number));
// })
// operatorButtons.forEach((operator) => {
//     // Create an eventListener for the buttons and call the display operator function
//     operator.addEventListener("click", displayOperator);
// })
// //The previous number the calculator should remember before each time a button is pressed
// let previousNumber = "0";
// // const displayNumber = (num) => {
// //     perviousNumber = previousNumber.toString() + num.toString();
// //     document.getElementById("current-output").innerHTML = previousNumber;
// //     return parseFloat(previousNumber);
// // }
// //Create a variable that gets and stores the element with id = "zero"
// let zero = document.getElementById("zero");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let numberButtons = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
// //numbers.forEach((number) => {
// //     numberButtons.addEventListener("click", displayNumber(number))
// // });
// // how does the function know which number is being pressed when called 
// const displayNumber = (event) => {
//     if (previousNumber == 0){
//         previousNumber = "";
//     }
//     previousNumber = previousNumber + number;
//     console.log(previousNumber);
//     document.getElementById("current-equation").innerHTML = previousNumber;
//     return parseFloat(previousNumber);
// }
// //Add event listener with type of event and function to run
// zero.addEventListener("click", function displayNumber(){
//     if (previousNumber == 0){
//         previousNumber = "";
//     }
//     previousNumber = previousNumber + "0";
//     document.getElementById("current-equation").innerHTML = previousNumber;
//     return parseFloat(previousNumber);
// });
// one.addEventListener("click", displayNumber(1));
// two.addEventListener("click", function displayNumber(){
//     console.log(previousNumber);
//     if (previousNumber == 0){
//         previousNumber = "";
//     }
//     previousNumber = previousNumber + "1";
//     console.log(previousNumber);
//     document.getElementById("current-equation").innerHTML = previousNumber;
//     return parseFloat(previousNumber);
// });