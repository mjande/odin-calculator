// math functions
function round(x) {
    return Math.round(10 * x) / 10;
}

function add(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return round(a + b); 
}   

function subtract(a, b) {
    return round(a - b);
}

function multiply(a, b) {
    return round(a * b);
}

function divide(a, b) {
    return round(a / b);
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function display(string) {
    document.querySelector(".display").textContent = string;
}

function returnDisplay() {
    return document.querySelector(".display").textContent;
}

function resetDisplay() {
    document.querySelector(".display").textContent = undefined;
}

// Event listeners
let storedValue; 
let queuedOp;
let reset; 

function input(numButton) {
    if (reset === true) {
        display(numButton)
        reset = false;
    } else {
        let displayValue = document.querySelector(".display").textContent;
        displayValue += numButton;
        display(displayValue);
    }
}

let numberButtons = document.querySelectorAll("button.number");
numberButtons.forEach((numberButton) => {
    let number = numberButton.textContent;
    numberButton.addEventListener('click', function() {
        input(number);
    });
});

document.addEventListener('keydown', (event) => {
    if (/[0-9]/.test(event.key)) {
        input(event.key);
    }
})


document.querySelector(".clear").addEventListener('click', () => {
    storedValue = undefined;
    queuedOp = undefined;
    resetDisplay();
    reset = false;
});

let operators = document.querySelectorAll('.operator');
operators.forEach((operator) => { 
    let operatorValue = operator.textContent;
    operator.addEventListener('click', () => {    
        if (storedValue === undefined) {
            storedValue = returnDisplay();
            storedOp = operatorValue;
            resetDisplay();
        } else {
            storedValue = operate(storedOp, storedValue, returnDisplay());
            display(storedValue);
            storedOp = operatorValue;
            reset = true;
        }     
    });
});

document.querySelector(".equals").addEventListener('click', () => {
    if (storedValue === undefined || storedOp === undefined) {
        reset = true;
    } else {
        let solution = operate(storedOp, storedValue, returnDisplay());
        if (!isFinite(solution)) {
            display("Nice try!") 
            reset = true;
        } else {    
            display(solution);
            storedOp = undefined;
            storedValue = undefined;
            reset = true;
        }
    }    
});

document.querySelector(".decimal").addEventListener('click', () => {
    if (!returnDisplay().includes(".")) {
        input(".");
    }    
});