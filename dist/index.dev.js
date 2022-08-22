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
        isDecimal = false;
        break;

      case '-':
        display.innerHTML = '';
        operation = "-";
        opSelected = true;
        isDecimal = false;
        break;

      case '/':
        display.innerHTML = '';
        operation = "/";
        opSelected = true;
        isDecimal = false;
        break;

      case '*':
        display.innerHTML = '';
        operation = "*";
        opSelected = true;
        isDecimal = false;
        break;

      case '=':
        if (operation == "+") {
          display.innerHTML = parseFloat(previousNumber) + parseFloat(laterNumber);
          opSelected = false;
          break;
        } else if (operation == "-") {
          display.innerHTML = parseFloat(previousNumber) - parseFloat(laterNumber);
          opSelected = false;
          break;
        } else if (operation == "/") {
          display.innerHTML = parseFloat(previousNumber) / parseFloat(laterNumber);
          opSelected = false;
          break;
        } else if (operation == "*") {
          display.innerHTML = parseFloat(previousNumber) * parseFloat(laterNumber);
          opSelected = false;
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