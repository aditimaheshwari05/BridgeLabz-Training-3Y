const x = 16.75;

const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const powerValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`
Math Utility Dashboard
----------------------
Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Power (x^3): ${powerValue}
Random Number (10-50): ${randomNumber}
`);