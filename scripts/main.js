/* Catching the dom element */
const calculator = document.querySelector('.container');
const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

/* Function for calculating the displayed numbers (I'm using 'Function Constructor') */

function calculate(numbers) {
    return new Function('return ' + numbers)();
  }
  

/* Add click events */
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

            } else {

                display.textContent = displayedNumber + keyContent;
            }

        } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {

            calculator.dataset.firstValue = displayedNumber;
            calculator.dataset.operator = action;
            

            let sign = '';
            if(action === 'add') {
                sign = ' + ';
            } else if (action === 'subtract') {
                sign = ' - ';
            } else if (action === 'multiply') {
                sign = ' × ';
            } else if (action === 'divide') {
                sign = ' ÷ ';
            }
            display.textContent = displayedNumber + sign;


        } else if (action === 'decimal') {

            display.textContent = displayedNumber + '.';
            
        } else if (action === 'clear') {

            display.textContent = 0;
            firstValue = '';
            operator = '';
            secondValue = ''

        } else if (action === 'calculate') {

            const modifiedDisplayedNumber = displayedNumber.replace(/×/g, '*');
            const finalModifiedDisplayedNumber = modifiedDisplayedNumber.replace(/÷/g, '/');

            let result = calculate(finalModifiedDisplayedNumber);

            if (result.toString().length > 4) {
                display.textContent = result.toFixed(2);
            } else {
                display.textContent = result;
            }
            
        }
    }
});



