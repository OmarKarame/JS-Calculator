"use strict";

var previousNumber = 0;
var laterNumber = 0;
var opSelected = false;
var isDecimal = false;
var operation = "";
var display = document.getElementById('display');
var previousDisplay = document.getElementById('previous-display');
var buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(function (button) {
  button.addEventListener('click', function (e) {
    switch (e.target.innerText) {
      case 'AC':
        display.innerText = '';
        previousDisplay.innerHTML = '';
        previousNumber = 0;
        laterNumber = 0;
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
        operation = "+";
        previousDisplay.innerHTML = previousNumber + operation;
        display.innerHTML = '';
        opSelected = true;
        isDecimal = false;
        break;

      case '-':
        display.innerHTML = '';
        operation = "-";
        previousDisplay.innerHTML = previousNumber + operation;
        opSelected = true;
        isDecimal = false;
        break;

      case '/':
        display.innerHTML = '';
        operation = "/";
        previousDisplay.innerHTML = previousNumber + operation;
        opSelected = true;
        isDecimal = false;
        break;

      case '*':
        display.innerHTML = '';
        operation = "*";
        previousDisplay.innerHTML = previousNumber + operation;
        opSelected = true;
        isDecimal = false;
        break;

      case '%':
        display.innerHTML = '';
        operation = "%";
        previousDisplay.innerHTML = previousNumber + operation;
        opSelected = true;
        isDecimal = false;
        break;

      case '+/-':
        display.innerHTML = parseFloat(previousNumber) - 2 * parseFloat(previousNumber);
        previousNumber = display.innerHTML;
        break;

      case '=':
        if (operation == "+") {
          previousDisplay.innerHTML = "";
          display.innerHTML = parseFloat(previousNumber) + parseFloat(laterNumber);
          opSelected = false;
          previousNumber = display.innerHTML;
          break;
        } else if (operation == "-") {
          previousDisplay.innerHTML = "";
          display.innerHTML = parseFloat(previousNumber) - parseFloat(laterNumber);
          opSelected = false;
          previousNumber = display.innerHTML;
          break;
        } else if (operation == "/") {
          previousDisplay.innerHTML = "";
          display.innerHTML = parseFloat(previousNumber) / parseFloat(laterNumber);
          opSelected = false;
          previousNumber = display.innerHTML;
          break;
        } else if (operation == "*") {
          previousDisplay.innerHTML = "";
          display.innerHTML = parseFloat(previousNumber) * parseFloat(laterNumber);
          opSelected = false;
          previousNumber = display.innerHTML;
          break;
        } else if (operation == "%") {
          previousDisplay.innerHTML = "";
          display.innerHTML = parseFloat(previousNumber) / 100 * parseFloat(laterNumber);
          opSelected = false;
          previousNumber = display.innerHTML;
          break;
        } else {
          break;
        }

      case 'C':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }

        break;

      default:
        if (opSelected == false) {
          display.innerText += e.target.innerText;
          previousNumber = display.innerHTML;
        } else {
          display.innerHTML += e.target.innerText;
          laterNumber = display.innerHTML;
        }

    }
  });
});