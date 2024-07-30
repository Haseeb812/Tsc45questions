
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Cannot divide by zero!");
    }
}


const result = add(40, 5);
console.log("Result:", result);