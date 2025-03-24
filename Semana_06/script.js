document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button:not(.btn-voltar)');
    
    let currentInput = '0';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function inputDigit(digit) {
        if (waitingForSecondOperand) {
            currentInput = digit;
            waitingForSecondOperand = false;
        } else {
            currentInput = currentInput === '0' ? digit : currentInput + digit;
        }
    }

    function inputDecimal() {
        if (waitingForSecondOperand) {
            currentInput = '0.';
            waitingForSecondOperand = false;
            return;
        }
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);
        
        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);
            currentInput = String(result);
            firstOperand = result;
        }
        
        waitingForSecondOperand = true;
        operator = nextOperator;
    }

    function calculate(firstOperand, secondOperand, operator) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                return secondOperand;
        }
    }

    function resetCalculator() {
        currentInput = '0';
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'AC') {
                resetCalculator();
            } else if (value === '±') {
                currentInput = (parseFloat(currentInput) * -1).toString();
            } else if (value === '%') {
                currentInput = (parseFloat(currentInput) / 100).toString();
            } else if (value === '.') {
                inputDecimal();
            } else if (value === '=') {
                if (firstOperand !== null && operator) {
                    handleOperator(null);
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                handleOperator(value);
            } else {
                inputDigit(value);
            }
            
            updateDisplay();
        });
    });
});