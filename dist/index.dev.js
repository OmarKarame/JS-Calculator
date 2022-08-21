"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var previousNumber = 0;
var operatorSelect = false;
var operator = "";

var Calculator =
/*#__PURE__*/
function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  _createClass(Calculator, [{
    key: "displayCurrentNumber",
    // Create a function that displays the number on the current output
    value: function displayCurrentNumber(number) {
      previousNumber = previousNumber.toString() + number.toString();
      document.getElementById("current-output").innerHTML = previousNumber;
      console.log(previousNumber);
      return parseFloat(previousNumber);
    }
  }]);

  return Calculator;
}(); // Create seperate arrays for operators and numbers


var numberButtons = document.querySelectorAll('.button--number');
var operatorButtons = document.querySelectorAll('.button--operation'); //Create a function that displays the operator and the previous number in the past output

var displayOperator = function displayOperator() {} // Create a var that contains the operator that is chosen
// If the operator was chosen already (operatorSelect == true),
// a new operator replaces it
// Create a case and switch for each operator and 
// return the operator that is being selected
// Else clear the current display
// and set operatorSelect = true
// Create a case and switch for each operator and 
// return the operator that is being selected
// and display the previous number with the new operator in past output
// All-clear function must set the operatorSelect to be false
// and set operator and number to empty strings
// Equals fuction must set the operatorSelect to be false and run the 
// functions on a case and switch based on the operator
// It must also clear the past output before calling the functions that 
// will compute and display the outcome on the current output
// Use array iterators to parse through the arrays
;

numberButtons.forEach(function (number) {
  // Create an eventListener for the buttons and call the display number function
  number.addEventListener("click", Calculator.displayCurrentNumber(number));
});
operatorButtons.forEach(function (operator) {
  // Create an eventListener for the buttons and call the display operator function
  operator.addEventListener("click", displayOperator);
}); // //The previous number the calculator should remember before each time a button is pressed
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