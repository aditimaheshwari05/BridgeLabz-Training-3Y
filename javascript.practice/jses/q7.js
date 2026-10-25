"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

for (const operation of operations) {
    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "subtract":
                result = num1 - num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new CalculationError("Cannot divide by zero.");
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new CalculationError("Cannot find square root of a negative number.");
                }
                result = Math.sqrt(num1);
                break;

            default:
                throw new InvalidOperationError(
                    `Operation "${operation}" is not recognized.`
                );
        }

        console.log(`Operation: ${operation} | Result: ${result}`);
    } catch (error) {
        console.log(
            `Operation: ${operation} | Error: ${error.name} - ${error.message}`
        );
    }
}

console.log("\nFormatted Summary");
console.log("------------------");
console.log(`Number 1: ${num1}`);
console.log(`Number 2: ${num2}`);
console.log(`Operations: ${operations.join(", ")}`);