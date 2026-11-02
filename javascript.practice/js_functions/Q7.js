// Q7: Demonstrate closure using a multiplier function

function makeMultiplier(multiplier) {
    // Inner function remembers the value of multiplier
    return function (number) {
        return number * multiplier;
    };
}

// Create a function that multiplies by 3
const triple = makeMultiplier(3);

// Use the returned function
console.log(triple(5));
