let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperation !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operator;
    displayValue = '0';
}

function calculateResult() {
    if (currentOperation === null || displayValue === '0') return;
    secondOperand = parseFloat(displayValue);
    switch (currentOperation) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            displayValue = (firstOperand / secondOperand).toString();
            break;
    }
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}