"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    if (
        Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "")
    ) {
        invalidNumbers.push(value);

        console.log(
            `Invalid: Value = ${stringValue} | Number = NaN | Boolean = ${booleanValue} | String = "${stringValue}"`
        );
    } else {
        validNumbers.push(numberValue);

        console.log(
            `Valid: Value = ${stringValue} | Number = ${numberValue} | Boolean = ${booleanValue} | String = "${stringValue}"`
        );
    }
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);