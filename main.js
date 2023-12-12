let inputDisplay = document.querySelector('.input-display');
let outputDisplay = document.querySelector('.output-display');
let historyList = document.getElementById('history-list');
let displayValue = '0';

function updateDisplay() {
    inputDisplay.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    outputDisplay.textContent = '0'; // Clear the output display
    updateDisplay();
}


function toggleSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}

function percentage() {
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number.toString();
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(displayValue).toString();
        outputDisplay.textContent = result;

        // Add the current expression and result to the history list
        const historyItem = document.createElement('li');
        historyItem.textContent = `${displayValue} = ${result}`;
        historyList.appendChild(historyItem);

        displayValue = result;
        updateDisplay();
    } catch (error) {
        outputDisplay.textContent = 'Error';
    }
}
