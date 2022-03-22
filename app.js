function add(a, b) {
    return a + b; 
}   

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case 'opAdd':
            return add(a, b);
        case 'opSubtract':
            return subtract(a, b);
        case 'opMultiply':
            return multiply(a, b);
        case 'opDivide':
            return divide(a, b);
    }
}