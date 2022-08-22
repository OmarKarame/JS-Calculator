let previousNumber = 0;
let laterNumber = 0;
let opSelected = false;
let isDecimal = false;
let operation = "";
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                isDecimal = false;
                break;
            case '.':
                if(isDecimal == false){
                    display.innerHTML += e.target.innerHTML;
                    isDecimal = true;
                    break;
                }
                else{
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
                if (operation == "+"){
                    display.innerHTML = parseFloat(previousNumber) + parseFloat(laterNumber);
                    opSelected = false;
                    break;
                }
                else if (operation == "-"){
                    display.innerHTML = parseFloat(previousNumber) - parseFloat(laterNumber);
                    opSelected = false;
                    break;
                }
                else if (operation === "/") {
                    display.innerHTML = parseFloat(previousNumber) / parseFloat(laterNumber);
                    opSelected = false;
                    break;
                }
                else if (operation === "*"){
                    display.innerHTML = parseFloat(previousNumber) * parseFloat(laterNumber);
                    opSelected = false;
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





