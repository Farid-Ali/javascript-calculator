const calculator = document.querySelector('.container');
const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

const calculate = (firstValue,operator,secondValue) => {
    let result = '';

    if (operator === 'add') {
        result = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (operator === 'subtract') {
        result = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (operator === 'multiply') {
        result = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (operator === 'divide') {
        result = parseFloat(firstValue) / parseFloat(secondValue);
    }

    return result;
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNumber = display.textContent;
        let firstValue = '';
        let operator = '';
        let secondValue = '';

        if (!action) {

            if (displayedNumber === '0') {
                display.textContent = keyContent;
            } else if (displayedNumber.endsWith('+') || displayedNumber.endsWith('-') || displayedNumber.endsWith('×') || displayedNumber.endsWith('÷')) {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNumber + keyContent;
            }

        } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {

            calculator.dataset.firstValue = displayedNumber;
            calculator.dataset.operator = action;

            let sign = '';
            if(action === 'add') {
                sign = '+';
            } else if (action === 'subtract') {
                sign = '-';
            } else if (action === 'multiply') {
                sign = '×';
            } else if (action === 'divide') {
                sign = '÷';
            }
            display.textContent = displayedNumber + sign;

        } else if (action === 'decimal') {

            display.textContent = displayedNumber + '.';
            
        } else if (action === 'clear') {

            display.textContent = '0';

        }  else if (action === 'calculate') {

            firstValue = calculator.dataset.firstValue;
            operator = calculator.dataset.operator;
            secondValue = displayedNumber;

            console.log(firstValue);
            console.log(operator);
            console.log(secondValue);
            

            display.textContent = calculate(firstValue,operator,secondValue);

        }

    }
});

