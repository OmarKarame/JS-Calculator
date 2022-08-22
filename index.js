let previousNumber = 0;
let laterNumber = 0;
let opSelected = false;
let isDecimal = false;
let operation = "";
let display = document.getElementById('display');
let previousDisplay = document.getElementById('previous-display')

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                previousNumber = 0;
                laterNumber = 0;
                isDecimal = false;
                break;
            case '.':
                if(isDecimal == false){
                    display.innerHTML += e.target.innerHTML;
                    isDecimal = true;
                    break;
                }
                else if (display.innerHTML - Math.floor(n) !== 0){
                    isDecimal = false;
                    break;
                }
                else{
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
                if (operation == "+"){
                    previousDisplay.innerHTML = "";
                    display.innerHTML = parseFloat(previousNumber) + parseFloat(laterNumber);
                    opSelected = false;
                    previousNumber = display.innerHTML;
                    break;
                }
                else if (operation == "-"){
                    previousDisplay.innerHTML = "";
                    display.innerHTML = parseFloat(previousNumber) - parseFloat(laterNumber);
                    opSelected = false;
                    previousNumber = display.innerHTML;
                    break;
                }
                else if (operation == "/") {
                    previousDisplay.innerHTML = "";
                    display.innerHTML = parseFloat(previousNumber) / parseFloat(laterNumber);
                    opSelected = false;
                    previousNumber = display.innerHTML;
                    break;
                }
                else if (operation == "*"){
                    previousDisplay.innerHTML = "";
                    display.innerHTML = parseFloat(previousNumber) * parseFloat(laterNumber);
                    opSelected = false;
                    previousNumber = display.innerHTML;
                    break;
                }
                else if (operation == "%"){
                    previousDisplay.innerHTML = "";
                    display.innerHTML = parseFloat(previousNumber) / 100 * parseFloat(laterNumber);
                    opSelected = false;
                    previousNumber = display.innerHTML;
                    break;
                }
                else{
                    break;
                }
            case 'C':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                if(opSelected == false){
                    display.innerText += e.target.innerText;
                    previousNumber = display.innerHTML;
                }
                else{
                    display.innerHTML += e.target.innerText;
                    laterNumber = display.innerHTML;
                }
                
        }
    });
});





