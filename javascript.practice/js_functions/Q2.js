// Q2: Apply an operation on each number using a callback function

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Callback function to double a number
function doubleNumber(number) {
    return number * 2;
}

// Callback function to square a number
function squareNumber(number) {
    return number * number;
}

let numbers = [1, 2, 3, 4];

// Double each number
let doubledNumbers = applyOperation(numbers, doubleNumber);
console.log(doubledNumbers);

// Square each number
let squaredNumbers = applyOperation(numbers, squareNumber);
console.log(squaredNumbers);
